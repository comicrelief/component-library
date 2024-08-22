"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconWrapper = exports.HelperText = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _hideVisually = _interopRequireDefault(require("../../../theme/shared/hideVisually"));
const buttonStyle = () => (0, _styledComponents.css)(["display:inline-flex;position:relative;padding:0.5rem 1.25rem;text-decoration:none;font-weight:700;font-size:", ";border-radius:2rem;transition:all 0.3s;height:3.125rem;width:100%;justify-content:center;align-items:center;cursor:pointer;", ";", ";@media ", "{width:auto;}@media ", "{", ";}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.fontSize('s');
}, _ref2 => {
  let {
    color,
    theme
  } = _ref2;
  return color ? theme.buttonColors(color) : theme.buttonColors('red');
}, _ref3 => {
  let {
    mobileColour,
    theme
  } = _ref3;
  return mobileColour ? theme.buttonColors(mobileColour) : null;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
}, _ref6 => {
  let {
    color,
    theme
  } = _ref6;
  return color ? theme.buttonColors(color) : theme.buttonColors('red');
});
const linkStyle = () => (0, _styledComponents.css)(["position:relative;text-decoration:none;display:inline;line-height:", ";", ";"], _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.fontSize('l');
}, _ref8 => {
  let {
    type,
    theme,
    underline
  } = _ref8;
  return type ? theme.linkStyles(type, underline) : theme.linkStyles('standard', underline);
});
const IconWrapper = exports.IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Linkstyle__IconWrapper",
  componentId: "sc-t360tr-0"
})(["display:inline-flex;margin-left:", ";align-self:center;right:", ";", ";@media ", "{width:auto;right:auto;position:relative;", ";}"], (0, _spacing.default)('md'), (0, _spacing.default)('m'), _ref9 => {
  let {
    type
  } = _ref9;
  return type === 'standard' && (0, _styledComponents.css)(["position:absolute;right:-2rem;top:0;bottom:0;"]);
}, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('M');
}, _ref11 => {
  let {
    type
  } = _ref11;
  return type === 'standard' && (0, _styledComponents.css)(["position:absolute;right:-2rem;top:0;bottom:0;"]);
});
const StyledLink = _styledComponents.default.a.withConfig({
  displayName: "Linkstyle__StyledLink",
  componentId: "sc-t360tr-1"
})(["", " ", ";"], props => props.type === 'button' ? buttonStyle : linkStyle, _ref12 => {
  let {
    iconFirst
  } = _ref12;
  return iconFirst && (0, _styledComponents.css)(["flex-direction:row-reverse;span[type=\"button\"]{margin-left:0;margin-right:1rem;}"]);
});
const HelperText = exports.HelperText = _styledComponents.default.span.withConfig({
  displayName: "Linkstyle__HelperText",
  componentId: "sc-t360tr-2"
})(["", ";"], _hideVisually.default);
var _default = exports.default = StyledLink;