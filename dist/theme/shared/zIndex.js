"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = require("styled-components");
const indexes = {
  base: 0,
  low: 1,
  medium: 2,
  high: 3,
  higher: 4
};
const zIndex = index => {
  let value = indexes.base;
  if (index) {
    value = indexes[index];
  }
  return (0, _styledComponents.css)(["z-index:", ";"], value);
};
var _default = exports.default = zIndex;