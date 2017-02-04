'use strict';

const path = require('path');

module.exports = function (grunt, options) {
	return {
		build: [path.resolve(__dirname, '..', 'dist')],
		deploy: [path.resolve(__dirname, '..', 'dist')]
	};
};
