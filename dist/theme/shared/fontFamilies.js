"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const fonts = {
  Montserrat: {
    font: 'Montserrat',
    fallback: 'Helvetica, Arial'
  },
  Anton: {
    font: 'Anton',
    fallback: 'Impact'
  },
  Founders: {
    font: 'Founders-Grotesk-Regular',
    fallback: 'helvetica, arial, sans-serif'
  },
  Founders_semi_bold: {
    font: 'Founders-Grotesk-Semibold',
    fallback: 'helvetica, arial, sans-serif'
  },
  Founders_bold: {
    font: 'Founders-GroteskXCondensed-Bold',
    fallback: 'helvetica, arial, sans-serif'
  }
};
var _default = family => {
  let style = 'inherit';
  if (family) {
    style = "'".concat(fonts[family].font, "', ").concat(fonts[family].fallback, ", sans-serif");
  }
  return style;
};
exports.default = _default;