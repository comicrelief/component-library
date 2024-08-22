"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Banner__Wrapper",
  componentId: "sc-14ows70-0"
})(["background:", ";"], _ref => {
  let {
    theme,
    backgroundColor
  } = _ref;
  return theme.color(backgroundColor);
});
const Container = _styledComponents.default.div.withConfig({
  displayName: "Banner__Container",
  componentId: "sc-14ows70-1"
})(["text-align:center;padding:calc(", " * 2) ", ";margin:0 auto;max-width:", "px;@media ", "{padding:", " ", ";}@media ", "{padding:", " ", ";}"], (0, _spacing.default)('m'), (0, _spacing.default)('m'), _allBreakpoints.breakpointValues.XL, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('xl'), (0, _spacing.default)('l'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('XL');
}, (0, _spacing.default)('xl'), (0, _spacing.default)('xl'));
const Banner = _ref4 => {
  let {
    children,
    backgroundColor = 'grey_dark'
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    backgroundColor: backgroundColor
  }, /*#__PURE__*/_react.default.createElement(Container, null, children));
};
var _default = exports.default = Banner;