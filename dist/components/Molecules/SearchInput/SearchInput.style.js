"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.SearchWrapper = exports.SearchField = exports.SearchBox = exports.InnerWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Input = _interopRequireDefault(require("../../Atoms/Input/Input"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "SearchInputstyle__Wrapper",
  componentId: "sc-1y1iity-0"
})(["width:100%;max-width:1440px;margin:auto;"]);
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "SearchInputstyle__InnerWrapper",
  componentId: "sc-1y1iity-1"
})(["margin:", " auto;padding:0 calc((4 * ", "));"], (0, _spacing.default)('md'), (0, _spacing.default)('xsm'));
const SearchBox = exports.SearchBox = _styledComponents.default.div.withConfig({
  displayName: "SearchInputstyle__SearchBox",
  componentId: "sc-1y1iity-2"
})(["margin:", " auto;width:100%;border-bottom:4px solid ", ";overflow:hidden;"], (0, _spacing.default)('xl'), _ref => {
  let {
    theme
  } = _ref;
  return theme.color('red');
});
const SearchWrapper = exports.SearchWrapper = _styledComponents.default.div.withConfig({
  displayName: "SearchInputstyle__SearchWrapper",
  componentId: "sc-1y1iity-3"
})(["width:100%;padding:0 ", ";"], (0, _spacing.default)('sm'));
const SearchField = exports.SearchField = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "SearchInputstyle__SearchField",
  componentId: "sc-1y1iity-4"
})(["input{padding:13px 0;margin:0;font-size:", ";max-width:100%;border:0;outline:", ";background:none;:focus{border:0;}@media ", "{height:100px;font-size:", ";}}"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontSize('md');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('red');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.fontSize('xxl');
});