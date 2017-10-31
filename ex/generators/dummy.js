'use strict';

const fs = require('fs');


fs.readFile('./files/list.dat', 'utf8', function (err, text) {
	if (err) {
		return console.error(err);
	}
	const [filename1, filename2, filename3, filename4] = text
		.split('\n')
		.map(name => name.trim())
		.filter(name => !!name);
	let summ = 0;

	fs.readFile('./files/' + filename1, 'utf8', function (err, text) {
		if (err) {
			return console.error(err);
		}
		summ +=+ text;
		fs.readFile('./files/' + filename2, 'utf8', function (err, text) {
			if (err) {
				return console.error(err);
			}
			summ +=+ text;
			fs.readFile('./files/' + filename3, 'utf8', function (err, text) {
				if (err) {
					return console.error(err);
				}
				summ +=+ text;
				fs.readFile('./files/' + filename4, 'utf8', function (err, text) {
					if (err) {
						return console.error(err);
					}
					summ +=+ text;


					fs.writeFile('result-dummy.dat', `Result is ${summ}`, 'utf-8', function (err) {
						if (err) {
							return console.error(err);
						}

						console.log('FINISH!');
						process.exit();
					});
				});
			});
		});
	});
});

