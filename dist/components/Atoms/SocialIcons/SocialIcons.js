"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Links = _interopRequireDefault(require("./Utils/Links"));
var _Icons = _interopRequireDefault(require("./Utils/Icons"));
var _Icon = _interopRequireDefault(require("./Icon/Icon"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const StyledList = _styledComponents.default.ul.withConfig({
  displayName: "SocialIcons__StyledList",
  componentId: "sc-i6jfaw-0"
})(["display:flex;list-style-type:none;margin:0 auto;justify-content:center;padding:0;align-items:center;@media ", "{justify-content:start;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
});
const StyledItem = _styledComponents.default.li.withConfig({
  displayName: "SocialIcons__StyledItem",
  componentId: "sc-i6jfaw-1"
})(["width:32px;margin-right:", ";@media ", "{width:48px;}"], (0, _spacing.default)('m'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});

/** Social media icons with customizable style linked to campaign social media accounts */
const SocialIcons = _ref3 => {
  let {
    target = 'blank',
    campaign,
    ...restProps
  } = _ref3;
  const links = (0, _Links.default)(campaign);
  return /*#__PURE__*/_react.default.createElement(StyledList, null, Object.keys(_Icons.default).map(brand => /*#__PURE__*/_react.default.createElement(StyledItem, {
    key: brand
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, Object.assign({
    target: target,
    icon: _Icons.default[brand],
    href: links[brand].url,
    title: links[brand].title,
    brand: brand
  }, restProps)))));
};
var _default = exports.default = SocialIcons;