"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseText = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
/** Text component */
const BaseText = exports.BaseText = _styledComponents.default.span.withConfig({
  displayName: "Text__BaseText",
  componentId: "sc-1snl0ya-0"
})(["color:", ";font-size:", ";line-height:", ";text-transform:", ";", ";", ";", ";font-family:", ";", ";", ";", ";", ";"], _ref => {
  let {
    color,
    theme
  } = _ref;
  return color ? theme.color(color) : 'inherit';
}, _ref2 => {
  let {
    size,
    theme
  } = _ref2;
  return theme.fontSize(size);
}, _ref3 => {
  let {
    size,
    theme
  } = _ref3;
  return theme.fontSize(size);
}, _ref4 => {
  let {
    uppercase
  } = _ref4;
  return uppercase ? 'uppercase' : 'inherit';
}, _ref5 => {
  let {
    weight
  } = _ref5;
  return weight ? "font-weight: ".concat(weight) : null;
}, _ref6 => {
  let {
    height
  } = _ref6;
  return height ? "line-height: ".concat(height) : null;
}, _ref7 => {
  let {
    as
  } = _ref7;
  return as === 'p' || as === 'span' ? 'line-height: normal;' : null;
}, _ref8 => {
  let {
    family,
    theme
  } = _ref8;
  return family ? theme.fontFamilies(family) : theme.fontFamilies(theme.font.regular);
}, _ref9 => {
  let {
    family
  } = _ref9;
  return family === 'Anton' ? 'letter-spacing: 0.03rem' : null;
}, _ref10 => {
  let {
    size,
    theme
  } = _ref10;
  return size === 'super' ? (0, _styledComponents.css)(["font-size:", ";line-height:3rem;@media ", "{font-size:", ";line-height:", ";margin-bottom:2rem;}@media ", "{font-size:", ";line-height:", ";margin-bottom:2rem;}"], theme.fontSize('xxl'), theme.allBreakpoints('M'), theme.fontSize('big'), theme.fontSize('big'), theme.allBreakpoints('L'), theme.fontSize('super'), theme.fontSize('super')) : null;
}, _ref11 => {
  let {
    mobileColor,
    theme
  } = _ref11;
  return mobileColor && (0, _styledComponents.css)(["@media (max-width:", "px){color:", ";}"], _allBreakpoints.breakpointValues.L - 1, theme.color(mobileColor));
}, _ref12 => {
  let {
    size,
    theme
  } = _ref12;
  return size === 'm' ? (0, _styledComponents.css)(["font-size:", ";@media ", "{font-size:", ";}"], theme.fontSize('s'), theme.allBreakpoints('M'), theme.fontSize('m')) : null;
});

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const Text = _ref13 => {
  let {
    tag = 'span',
    size = 's',
    color = 'inherit',
    children = undefined,
    uppercase = false,
    height = undefined,
    weight = undefined,
    family = null,
    mobileColor = null,
    ...rest
  } = _ref13;
  return /*#__PURE__*/_react.default.createElement(BaseText, Object.assign({}, rest, {
    as: tag,
    color: color,
    size: size,
    uppercase: uppercase,
    height: height,
    weight: weight,
    family: family,
    mobileColor: mobileColor
  }), children);
};
var _default = exports.default = Text;