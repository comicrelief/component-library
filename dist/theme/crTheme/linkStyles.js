"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = require("styled-components");
var _colors = _interopRequireDefault(require("./colors"));
const linkStyles = {
  standard: {
    color: (0, _colors.default)('black'),
    border: "2px solid ".concat((0, _colors.default)('black')),
    weight: 'normal',
    hoverColor: (0, _colors.default)('black'),
    hoverBorder: "2px solid ".concat((0, _colors.default)('black'))
  },
  standard_white: {
    color: (0, _colors.default)('white'),
    border: "2px solid ".concat((0, _colors.default)('white')),
    weight: 'normal',
    hoverColor: (0, _colors.default)('white'),
    hoverBorder: "2px solid ".concat((0, _colors.default)('white'))
  }
};
var _default = (styleName, underline) => {
  let style = (0, _styledComponents.css)(["color:", ";border-bottom:solid 2px;border-bottom-color:inherit;font-weight:normal;:hover{color:inherit;font-weight:700;}"], (0, _colors.default)('black'));
  if (styleName) {
    style = (0, _styledComponents.css)(["color:", ";border-bottom:", ";font-weight:", ";:hover{color:", ";border-bottom:", ";font-weight:", ";}"], linkStyles[styleName].color, underline && linkStyles[styleName].border, linkStyles[styleName].weight, linkStyles[styleName].hoverColor, underline && linkStyles[styleName].hoverBorder, linkStyles[styleName].hoverWeight);
  }
  return style;
};
exports.default = _default;