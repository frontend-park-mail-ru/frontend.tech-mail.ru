'use strict';

const path = require('path');

module.exports = function (grunt, options) {
	return {
		all: {
			options: {
				port: 8080,
				hostname: 'localhost',
				bases: [path.resolve(__dirname, '..', 'dist')],
				livereload: true,
				open: true,
			}
		}
	};
};
