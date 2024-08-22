"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButton = exports.OuterWrapper = exports.InnerWrapper = exports.CurrentAmountCopy = exports.Copy = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Button = _interopRequireDefault(require("../../Atoms/Button/Button"));
const OuterWrapper = exports.OuterWrapper = _styledComponents.default.div.withConfig({
  displayName: "ImpactSliderstyle__OuterWrapper",
  componentId: "sc-1fpimol-0"
})(["position:relative;max-width:100%;background-color:", ";padding:32px 16px;@media ", "{padding:50px;}@media ", "{padding:64px 0;}"], props => props.theme.color("".concat(props.backgroundColour)), _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
});
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "ImpactSliderstyle__InnerWrapper",
  componentId: "sc-1fpimol-1"
})(["width:100%;max-width:780px;margin:0 auto;@media ", "{h1{font-size:48px;line-height:48px;}}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('L');
});
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "ImpactSliderstyle__Copy",
  componentId: "sc-1fpimol-2"
})(["position:relative;@media ", "{p{font-size:20px;line-height:24.38px;}}"], _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('L');
});
const CurrentAmountCopy = exports.CurrentAmountCopy = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ImpactSliderstyle__CurrentAmountCopy",
  componentId: "sc-1fpimol-3"
})(["font-weight:bold;margin-top:16px;@media ", "{font-size:20px;line-height:24.38px;margin:24px 0 38px;}"], _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
});
const SubmitButton = exports.SubmitButton = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "ImpactSliderstyle__SubmitButton",
  componentId: "sc-1fpimol-4"
})(["margin:32px auto 0;width:100%;font-family:", ";display:block;@media ", "{width:70%;margin:40px auto 0;}@media ", "{width:100%;}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.fontFamilies(theme.font.regular);
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.allBreakpoints('M');
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('L');
});