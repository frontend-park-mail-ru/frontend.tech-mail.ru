'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Super {
  static uniq(...strings) {
    console.log([...new Set(strings).values()]);
  }

}

exports.default = Super;