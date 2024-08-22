"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const fontSizes = {
  xxs: '0.69375rem',
  xs: '0.83125rem',
  s: '1rem',
  m: '1.2rem',
  l: '1.44rem',
  xl: '1.725rem',
  xxl: '4.125rem',
  super: '7.3125rem'
};
var _default = size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
exports.default = _default;