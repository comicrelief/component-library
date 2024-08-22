"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const angle = {
  right: '90deg',
  left: '-90deg',
  down: '180deg',
  up: '0deg'
};
const Icon = _styledComponents.default.svg.withConfig({
  displayName: "Chevron__Icon",
  componentId: "sc-1p4fsgl-0"
})(["transform:", ";fill:", ";@media ", "{fill:", ";}"], _ref => {
  let {
    direction
  } = _ref;
  return "rotate(".concat(angle[direction], ")");
}, _ref2 => {
  let {
    mobileColour,
    colour,
    theme
  } = _ref2;
  return mobileColour ? theme.color(mobileColour) : theme.color(colour);
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('L');
}, _ref4 => {
  let {
    colour,
    theme
  } = _ref4;
  return colour ? theme.color(colour) : theme.color('white');
});
const Chevron = _ref5 => {
  let {
    colour = 'white',
    mobileColour = null,
    theme,
    size = 24,
    direction = 'up',
    ...rest
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(Icon, Object.assign({
    direction: direction,
    width: size,
    height: size,
    fill: theme.color(colour),
    colour: colour,
    mobileColour: mobileColour,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    d: "M40 33a1.992 1.992 0 01-1.414-.586L24 17.829 9.414 32.414a2 2 0 11-2.828-2.828l16-16a2 2 0 012.828 0l16 16A2 2 0 0140 33z"
  }));
};
var _default = exports.default = (0, _styledComponents.withTheme)(Chevron);