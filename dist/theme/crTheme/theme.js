"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _buttonColors = _interopRequireDefault(require("./buttonColors"));
var _linkStyles = _interopRequireDefault(require("./linkStyles"));
var _fontSizes = _interopRequireDefault(require("./fontSizes"));
var _allBreakpoints = _interopRequireDefault(require("../shared/allBreakpoints"));
var _fontFamilies = _interopRequireDefault(require("../shared/fontFamilies"));
var _default = exports.default = {
  color: _colors.default,
  buttonColors: _buttonColors.default,
  linkStyles: _linkStyles.default,
  fontSize: _fontSizes.default,
  allBreakpoints: _allBreakpoints.default,
  fontFamilies: _fontFamilies.default,
  font: {
    regular: 'Montserrat',
    bold: 'Anton'
  }
};