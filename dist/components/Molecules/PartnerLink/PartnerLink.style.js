"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreInfo = exports.Item = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _hideVisually = _interopRequireDefault(require("../../../theme/shared/hideVisually"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
const MoreInfo = exports.MoreInfo = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "PartnerLinkstyle__MoreInfo",
  componentId: "sc-1lfodop-0"
})(["", " height:auto;@media ", "{font-size:", ";}"], _hideVisually.default, _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontSize('s');
});
const Item = exports.Item = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "PartnerLinkstyle__Item",
  componentId: "sc-1lfodop-1"
})(["display:block;position:relative;padding:0;border:none;:hover,:focus{border:none;", "{overflow:inherit;clip-path:none;margin:0;text-align:center;transform:translateY(-50%);clip:auto;top:50%;left:0;width:100%;", ";}::after{content:'';position:absolute;display:block;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:", ";}}"], MoreInfo, (0, _zIndex.default)('medium'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('red');
});