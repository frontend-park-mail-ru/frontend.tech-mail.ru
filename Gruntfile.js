'use strict';

const loadGruntConfig = require('load-grunt-config');
const timeGrunt = require('time-grunt');
const path = require('path');


module.exports = function (grunt) {
	loadGruntConfig(grunt, {
		configPath: path.resolve(__dirname, 'tasks')
	});

};
