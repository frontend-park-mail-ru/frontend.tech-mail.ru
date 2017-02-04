'use strict';

module.exports = function (grunt, options) {
	return {
		build: {
			options: {
				title: 'Build complete',
				message: '<%= pkg.name %> build finished successfully.'
			}
		},
		server: {
			options: {
				title: 'Build complete',
				message: 'Static server listen http://localhost:8080/'
			}
		}
	};
};
