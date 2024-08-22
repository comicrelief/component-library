"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkStyle = exports.CookieWrapper = exports.CookieText = exports.AcceptCookieBtn = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const CookieWrapper = exports.CookieWrapper = _styledComponents.default.div.withConfig({
  displayName: "CookieBannerstyle__CookieWrapper",
  componentId: "sc-m69qcz-0"
})(["display:flex;position:relative;padding:", ";background:", ";flex-direction:column;", ";"], (0, _spacing.default)('md'), _ref => {
  let {
    theme
  } = _ref;
  return theme.color('deep_violet_dark');
}, (0, _zIndex.default)('high'));
const CookieText = exports.CookieText = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "CookieBannerstyle__CookieText",
  componentId: "sc-m69qcz-1"
})(["line-height:1.5;margin:0;&:first-of-type{margin-bottom:", ";}@media ", "{width:75%;margin:", " auto;&:first-of-type{margin-bottom:", ";}}"], (0, _spacing.default)('sm'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('none'), (0, _spacing.default)('md'));
const AcceptCookieBtn = exports.AcceptCookieBtn = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "CookieBannerstyle__AcceptCookieBtn",
  componentId: "sc-m69qcz-2"
})(["padding:", " ", ";display:block;margin-bottom:10px;@media ", "{margin:0 ", " 0 0;display:inline-block;}"], (0, _spacing.default)('sm'), (0, _spacing.default)('md'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('xsm'));
const LinkStyle = exports.LinkStyle = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "CookieBannerstyle__LinkStyle",
  componentId: "sc-m69qcz-3"
})(["color:", ";padding:0 ", " 1px;border-bottom:2px solid;"], _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('white');
}, (0, _spacing.default)('xsm'));