"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconWrapper = exports.InnerWrapper = exports.FooterWrapper = exports.FooterLegalLine = exports.FooterCopyright = exports.FooterBranding = exports.Brand = exports.Angle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
const FooterWrapper = exports.FooterWrapper = _styledComponents.default.footer.attrs(() => ({
  role: 'banner'
})).withConfig({
  displayName: "Footerstyle__FooterWrapper",
  componentId: "sc-167xaf5-0"
})(["text-align:center;line-height:initial;background:#222;position:relative;padding:", " 0;@media ", "{padding:", ";}"], (0, _spacing.default)('md'), _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('l'));
const Angle = exports.Angle = _styledComponents.default.div.withConfig({
  displayName: "Footerstyle__Angle",
  componentId: "sc-167xaf5-1"
})(["width:100%;display:block;clip-path:polygon(0 100%,100% 0,100% 101%,0 101%);height:50px;background:#222;margin-bottom:1rem;@media ", "{clip-path:polygon(0 100%,100% 0,100% 101%,0 101%);height:95px;}"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
});
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "Footerstyle__InnerWrapper",
  componentId: "sc-167xaf5-2"
})(["position:relative;display:block;width:100%;height:100%;max-width:1200px;margin:0 auto;padding:0 ", " ", ";@media ", "{padding:0 ", " ", ";}"], (0, _spacing.default)('md'), (0, _spacing.default)('l'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('md'), (0, _spacing.default)('xl'));
const FooterLegalLine = exports.FooterLegalLine = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Footerstyle__FooterLegalLine",
  componentId: "sc-167xaf5-3"
})(["text-align:left;margin-top:1rem;line-height:1.5rem;"]);
const FooterBranding = exports.FooterBranding = _styledComponents.default.div.withConfig({
  displayName: "Footerstyle__FooterBranding",
  componentId: "sc-167xaf5-4"
})(["display:flex;margin:", " 0 5rem;justify-content:space-between;align-items:center;"], (0, _spacing.default)('lg'));
const FooterCopyright = exports.FooterCopyright = _styledComponents.default.div.withConfig({
  displayName: "Footerstyle__FooterCopyright",
  componentId: "sc-167xaf5-5"
})(["display:block;width:100%;height:100%;text-align:left;margin-top:", ";p{font-size:15px;line-height:24px;margin-bottom:5px;@media ", "{font-size:16px;line-height:27px;}}"], (0, _spacing.default)('lg'), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('L');
});
const Brand = exports.Brand = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "Footerstyle__Brand",
  componentId: "sc-167xaf5-6"
})(["color:transparent;border:0;:hover{border:0;}"]);
const SocialIconWrapper = exports.SocialIconWrapper = _styledComponents.default.div.withConfig({
  displayName: "Footerstyle__SocialIconWrapper",
  componentId: "sc-167xaf5-7"
})([""]);