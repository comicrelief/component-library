"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.breakpointValues = void 0;
/**
 * For usage and examples see utils.md
 */

const breakpointValues = exports.breakpointValues = {
  S: 0,
  M: 740,
  L: 1024,
  Nav: 1150,
  XL: 1440
};
var _default = size => {
  if (size) {
    return "(min-width: ".concat(breakpointValues[size], "px)");
  }
  return 'inherit';
};
exports.default = _default;