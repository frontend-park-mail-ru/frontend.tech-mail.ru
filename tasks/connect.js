'use strict';

const path = require('path');

module.exports = function (grunt, options) {
	return {
		server: {
			options: {
				port: 8080,
				base: path.resolve(__dirname, '..', 'dist'),
				livereload: true,
				open: true,
				useAvailablePort: true
			}
		}
	};
};
