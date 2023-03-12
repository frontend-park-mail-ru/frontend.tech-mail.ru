'use strict';

const promisify = require('promisify-node');
const grunt = require('grunt');
const path = require('path');
const co = require('co');
const exec = require('child_process').exec;


const fs = promisify('fs');
const promiseExec = function (cmd, opts) {
	return new Promise(function (resolve, reject) {
		exec(cmd, opts, function (err, stdout, stderr) {
			if (err) {
				reject(stderr || stdout);
			} else {
				resolve(stdout || stderr);
			}
		})
	});
};

const repository = 'git@github.com:frontend-park-mail-ru/frontend-park-mail-ru.github.io.git';
const branch = 'master';
const tempDirName = '.deploy.git';
const distDirName = 'dist';

grunt.registerTask('upload', function () {
	const done = this.async();
	co(function *() {
		const projectDir = path.resolve(__dirname, '..', '..');
		const deployDir = path.resolve(projectDir, tempDirName);
		const distDir = path.resolve(projectDir, distDirName);
		grunt.file.mkdir(deployDir);

		grunt.log.writeln('  Проверяем статус директории ' + tempDirName);
		const remote = yield promiseExec('git remote show origin', {cwd: deployDir});
		const remoteUrl = /Fetch URL: (.+?)$/im.exec(remote);

		if (!(remoteUrl && remoteUrl[1] === repository)) {
			grunt.log.writeln('  Удаляем директорию ' + tempDirName);
			grunt.file.delete(deployDir);

			grunt.log.writeln(`  Скачиваем репозиторий ${repository} в директорию ${tempDirName}`);
			yield promiseExec(`git clone --depth 2 ${repository} ${tempDirName}`, {cwd: projectDir});
		}

		grunt.log.writeln(`  Скачиваем ветку ${branch}`);
		yield promiseExec(`git fetch --depth 2 origin ${branch}`, {cwd: deployDir});

		grunt.log.writeln(`  Переключаемся на ветку ${branch}`);
		yield promiseExec(`git checkout ${branch}`, {cwd: deployDir});

		const filesToRemove = grunt.file.expand({
			filter: srcpath => !/\/\.git/.test(srcpath),
			cwd: deployDir,
			dot: true
		}, ['*']);

		grunt.log.writeln(`  Очищаем директорию ${tempDirName}`);
		filesToRemove.forEach(name => grunt.file.delete(path.resolve(deployDir, name)));

		const filesToCopy = grunt.file.expand({
			cwd: distDir,
			dot: true
		}, ['*']);

		grunt.log.writeln(`  Копируем файлы`);
		filesToCopy.forEach(name => grunt.file.copy(path.resolve(distDir, name), path.resolve(deployDir, name)));
		yield promiseExec(`git add .`, {cwd: deployDir});
		yield promiseExec(`git add --all`, {cwd: deployDir});

		grunt.log.writeln(`  Совершаем коммит`);
		try {
			let r = yield promiseExec(`git commit -am "Обновили сайт (${new Date().toLocaleString()})"`, {cwd: deployDir});
			grunt.log.writeln(r);
		} catch (stderr) {
			grunt.log.writeln(`  Нет изменений, которые нужно закоммитить:\n${stderr}`);
		}

		grunt.log.writeln(`  Отправляем изменения в ветку ${branch}`);
		let r = yield promiseExec(`git push origin ${branch}`, {cwd: deployDir});
		grunt.log.writeln(r);

	})
		.then(() => {
			done(true);
		})
		.catch(e => {
			console.error(e);
			done(false);
		})
});
