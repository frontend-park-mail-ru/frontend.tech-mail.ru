'use strict';

const promisify = require('promisify-node');
const grunt = require('grunt');
const path = require('path');
const co = require('co');

const fs = promisify('fs');


grunt.registerTask('slides', function () {
	const done = this.async();
	co(function *() {
		const slidesDir = path.resolve(__dirname, '..', '..', 'source', 'slides');

		const paths = yield fs.readdir(slidesDir);
		const pathStats = yield paths.map(name => fs.stat(path.resolve(slidesDir, name)));
		const folders = pathStats
			.map((stat, pos) => ({stat, name: paths[pos]}))
			.filter(({stat}) => stat.isDirectory())
			.map(({name}) => name.match(/\d+/) ? +name.match(/\d+/)[0] : 0);

		const newPath = 's' + (Math.max(...folders, 0) + 1);

		const srcpath = path.resolve(__dirname, 'index.html');
		const destpath = path.resolve(slidesDir, newPath, 'index.html');

		grunt.log.writeln('Добавляем новую презентацию в директорию ' + path.join('source', 'slides', newPath));
		grunt.file.copy(srcpath, destpath);
	})
		.then(() => {
			done(true);
		})
		.catch(e => {
			console.error(e);
			done(false);
		})
});
