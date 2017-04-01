'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	for (var _len = arguments.length, strings = Array(_len), _key = 0; _key < _len; _key++) {
		strings[_key] = arguments[_key];
	}

	console.log([].concat(_toConsumableArray(new Set(strings).values())));
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }