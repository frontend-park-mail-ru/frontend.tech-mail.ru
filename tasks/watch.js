'use strict';

const path = require('path');

module.exports = function (grunt, options) {
	return {
		// options: {
		// 	livereload: true
		// },
		// livereload: {
		// 	options: {
		// 		livereload: true
		// 	},
		// 	files: [path.resolve(__dirname, '..', 'dist/**/*')]
		// },
		// lib: {
		// 	cwd: path.resolve(__dirname, '..', 'source'),
		// 	files: ['lib/**/*', '!**/*.md'],
		// 	tasks: ['copy:lib'],
		// },
		// examples: {
		// 	cwd: path.resolve(__dirname, '..', 'source'),
		// 	files: ['examples/**/*', '!**/*.md'],
		// 	tasks: ['copy:examples'],
		// },
		// slides: {
		// 	cwd: path.resolve(__dirname, '..', 'source'),
		// 	files: ['slides/**/*', '!**/*.md'],
		// 	tasks: ['copy:slides'],
		// },
		// root: {
		// 	cwd: path.resolve(__dirname, '..', 'source'),
		// 	files: ['*', '!**/*.md'],
		// 	filter: 'isFile',
		// 	tasks: ['copy:root'],
		// },
		// markdown: {
		// 	cwd: path.resolve(__dirname, '..', 'source', 'pages'),
		// 	files: ['**/*'],
		// 	tasks: ['copy:markdown'],
		// }
		livereload: {
			options: {
				livereload: true
			},
			files: [path.resolve(__dirname, '..', 'dist/**')],
			tasks: []
		},
		build: {
			files: [path.resolve(__dirname, '..', 'source/**')],
			tasks: ['copy']
		}
	};
};
