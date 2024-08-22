"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const spacingSizes = {
  none: '0',
  xsm: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  m: '1.5rem',
  l: '2rem',
  lg: '3rem',
  xl: '4rem',
  xxl: '8rem',
  xxxl: '16rem'
};
const spacing = size => {
  if (size) {
    return spacingSizes[size];
  }
  return spacingSizes.none;
};
var _default = exports.default = spacing;