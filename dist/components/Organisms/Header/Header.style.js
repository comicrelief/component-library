"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaIcons = exports.InnerWrapper = exports.HeaderWrapper = exports.Brand = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _containers = _interopRequireDefault(require("../../../theme/shared/containers"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const HeaderWrapper = exports.HeaderWrapper = _styledComponents.default.header.attrs(() => ({
  role: 'banner'
})).withConfig({
  displayName: "Headerstyle__HeaderWrapper",
  componentId: "sc-11ghppe-0"
})(["position:relative;background-color:", ";padding:0;height:75px;@media ", "{height:auto;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('Nav');
});
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "Headerstyle__InnerWrapper",
  componentId: "sc-11ghppe-1"
})(["display:flex;align-items:center;height:100%;padding:0 12px;cursor:pointer;max-width:", ";@media ", "{margin:0 auto;}"], _containers.default.large, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('Nav');
});
const Brand = exports.Brand = _styledComponents.default.div.withConfig({
  displayName: "Headerstyle__Brand",
  componentId: "sc-11ghppe-2"
})(["", ";margin-right:auto;display:flex;align-items:center;a{border:0;color:transparent;margin-right:", ";img{width:100%;object-fit:contain;}:hover{border:0;}}"], (0, _zIndex.default)('high'), (0, _spacing.default)('md'));
const MetaIcons = exports.MetaIcons = _styledComponents.default.div.withConfig({
  displayName: "Headerstyle__MetaIcons",
  componentId: "sc-11ghppe-3"
})(["width:auto;display:flex;align-items:center;> div{height:35px;width:auto;display:inline-block;> a{height:inherit;width:inherit;margin-left:0.5rem;img{padding:5px;height:inherit;width:inherit;}}}@media ", "{position:relative;display:flex;align-items:center;background-color:", ";margin-right:0px;right:0px;}"], _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('Nav');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.color('white');
});