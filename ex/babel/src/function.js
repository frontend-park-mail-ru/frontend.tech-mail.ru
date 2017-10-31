'use strict';

export default class Super {
	static uniq (...strings) {
		console.log([...new Set(strings).values()]);
	}
}
