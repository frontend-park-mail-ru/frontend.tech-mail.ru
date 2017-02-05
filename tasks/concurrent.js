'use strict';

module.exports = function (grunt, options) {
	return {
		options: {
			logConcurrentOutput: true
		},
		all: [['express', 'notify:server', 'watch:livereload'], 'watch:build']
	};
};
