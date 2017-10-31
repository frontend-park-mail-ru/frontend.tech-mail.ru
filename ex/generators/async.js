'use strict';

const fs = require('fs');

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

const work = async function () {
	const list = await read('./files/list.dat');
	const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);

	const nums = await Promise.all(
		filenames.map(filename => read('./files/' + filename))
	);

	const summ = nums.reduce((sum, num) => +num + +sum);

	await write('result-async.dat', `Result is ${summ}`);
};

work()
	.then(() => console.log('FINISH!'))
	.catch(console.error);
