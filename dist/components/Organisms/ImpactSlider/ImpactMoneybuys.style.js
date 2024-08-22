"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrLabel = exports.MoneybuyWrapper = exports.MoneybuyImage = exports.MoneybuyDescription = exports.MoneybuyAmount = exports.Moneybuy = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
const MoneybuyWrapper = exports.MoneybuyWrapper = _styledComponents.default.div.withConfig({
  displayName: "ImpactMoneybuysstyle__MoneybuyWrapper",
  componentId: "sc-1lsmpzi-0"
})(["margin-top:32px;width:100%;display:flex;align-content:space-between;flex-direction:column;justify-content:space-between;align-items:center;@media ", "{flex-direction:row;align-items:stretch;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('L');
});
const Moneybuy = exports.Moneybuy = _styledComponents.default.div.withConfig({
  displayName: "ImpactMoneybuysstyle__Moneybuy",
  componentId: "sc-1lsmpzi-1"
})(["display:inherit;width:100%;padding:8px 20px;height:auto;background-color:white;border-radius:10px;border:1px solid ", ";position:relative;flex-direction:row;align-items:center;justify-content:flex-start;opacity:1;", " @media ", "{width:70%;padding:8px 40px;}@media ", "{padding:20px 14px;flex-direction:column;width:18%;max-height:none;}"], props => props.theme.color('black'), props => props.isInactive && (0, _styledComponents.css)(["opacity:0.5;"]), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('L');
});
const OrLabel = exports.OrLabel = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ImpactMoneybuysstyle__OrLabel",
  componentId: "sc-1lsmpzi-2"
})(["display:inherit;align-items:center;margin:8px 0;font-size:14px;"]);
const MoneybuyImage = exports.MoneybuyImage = _styledComponents.default.span.withConfig({
  displayName: "ImpactMoneybuysstyle__MoneybuyImage",
  componentId: "sc-1lsmpzi-3"
})(["background:center / 65% no-repeat url(\"", "\"),", ";width:48px;height:48px;border-radius:48px;@media ", "{width:0;height:0;padding:30%;border-radius:100%;}"], props => props.imageURL, props => props.theme.color('grey_extra_light'), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('L');
});
const MoneybuyAmount = exports.MoneybuyAmount = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ImpactMoneybuysstyle__MoneybuyAmount",
  componentId: "sc-1lsmpzi-4"
})(["text-align:center;margin:0 10px;width:25%;@media ", "{margin:8px 15px 2px;width:auto;}"], _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
});
const MoneybuyDescription = exports.MoneybuyDescription = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ImpactMoneybuysstyle__MoneybuyDescription",
  componentId: "sc-1lsmpzi-5"
})(["text-align:left;width:50%;@media ", "{width:100%;text-align:center;}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('L');
});