"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const StyledItem = _styledComponents.default.a.withConfig({
  displayName: "Itemstyle__StyledItem",
  componentId: "sc-19pu4qu-0"
})(["padding:9px 14px 9px 14px;border-radius:30px;text-align:center;text-decoration:none;font-weight:700;cursor:", ";background:", ";color:", ";", ";"], _ref => {
  let {
    selected,
    disabled
  } = _ref;
  return selected || disabled ? 'default' : 'pointer';
}, _ref2 => {
  let {
    theme,
    selected,
    disabled,
    backgroundColor,
    selectedBackgroundColor,
    disabledBackgroundColor
  } = _ref2;
  let processedBackgroundColor = backgroundColor;
  if (disabled) {
    processedBackgroundColor = disabledBackgroundColor;
  } else if (selected) {
    processedBackgroundColor = selectedBackgroundColor;
  }
  return theme.color(processedBackgroundColor);
}, _ref3 => {
  let {
    theme,
    selected,
    disabled,
    color,
    selectedColor,
    disabledColor
  } = _ref3;
  let processedColor = color;
  if (disabled) {
    processedColor = disabledColor;
  } else if (selected) {
    processedColor = selectedColor;
  }
  return theme.color(processedColor);
}, _ref4 => {
  let {
    theme,
    selected,
    disabled,
    backgroundColorOnHover,
    colorOnHover
  } = _ref4;
  if (!(selected || disabled)) {
    return (0, _styledComponents.css)([":hover{background:", ";color:", ";}"], theme.color(backgroundColorOnHover), theme.color(colorOnHover));
  }
  return null;
});
var _default = exports.default = StyledItem;