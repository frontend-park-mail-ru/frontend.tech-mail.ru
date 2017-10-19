'use strict';

const fs = require('fs');

function execute(generator, value) {
	const next = generator.next(value);
	if (!next.done) {
		next.value.then(
			result => execute(generator, result),
			err => generator.throw(err)
		);
	} else {
		console.log('FINISH!');
		process.exit();
	}
}
function read(file) {
	return new Promise(function (resolve, reject) {
		fs.readFile(file, 'utf8', function (err, text) {
			if (err) {
				return reject(err);
			}
			resolve(text);
		});
	});
}
function write(file, source) {
	return new Promise(function (resolve, reject) {
		fs.writeFile(file, source, 'utf8', function (err) {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}


const gen1 = function *() {
	const list = yield read('./files/list.dat');
	const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);

	let summ = 0;

	const num1 = yield read('./files/' + filenames[0]);
	const num2 = yield read('./files/' + filenames[1]);
	const num3 = yield read('./files/' + filenames[2]);
	const num4 = yield read('./files/' + filenames[3]);

	summ +=+ num1;
	summ +=+ num2;
	summ +=+ num3;
	summ +=+ num4;

	yield write('result-execute1.dat', `Result is ${summ}`);
};

const gen2 = function *() {
	const list = yield read('./files/list.dat');
	const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);

	let summ = 0;

	for (let filename of filenames) {
		const num = yield read('./files/' + filename);
		summ +=+ num;
	}

	yield write('result-execute2.dat', `Result is ${summ}`);
};

const gen3 = function *() {
	const list = yield read('./files/list.dat');
	const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);

	const nums = yield Promise.all(
		filenames.map(filename => read('./files/' + filename))
	);

	const summ = nums.reduce((sum, num) => + num + + sum);

	yield write('result-execute3.dat', `Result is ${summ}`);
};

execute(gen());
