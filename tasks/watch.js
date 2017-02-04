'use strict';

const path = require('path');

module.exports = function (grunt, options) {
	return {
		livereload: {
			options: {
				livereload: true
			},
			files: [path.resolve(__dirname, '..', 'dist/**/*')]
		}
	};
};
