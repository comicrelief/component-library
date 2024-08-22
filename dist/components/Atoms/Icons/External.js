"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const StyledSVG = _styledComponents.default.svg.withConfig({
  displayName: "External__StyledSVG",
  componentId: "sc-oha23y-0"
})(["fill:", ";@media ", "{fill:", ";}"], _ref => {
  let {
    mobileColour,
    colour,
    theme
  } = _ref;
  return mobileColour ? theme.color(mobileColour) : theme.color(colour);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
}, _ref3 => {
  let {
    colour,
    theme
  } = _ref3;
  return colour ? theme.color(colour) : theme.color('white');
});
const External = _ref4 => {
  let {
    colour = 'white',
    mobileColour = null,
    theme,
    size = 24,
    ...rest
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(StyledSVG, Object.assign({}, rest, {
    width: size,
    height: size,
    fill: theme.color(colour),
    colour: colour,
    mobileColour: mobileColour,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M92 8.001V48a4 4 0 01-8 0V17.657L50.899 50.758c-.781.781-1.805 1.171-2.829 1.171s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 12H48a4 4 0 010-8h40c.016 0 .032.005.048.005.246.003.492.026.734.074.121.024.233.069.35.104.133.039.268.07.397.123.132.055.253.13.377.198.104.057.212.103.312.169.201.134.386.289.559.456.016.016.035.026.051.042.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327.052.259.08.522.08.785zM72 68a4 4 0 00-4 4v12H12V28h12a4 4 0 000-8H8a4 4 0 00-4 4v64a4 4 0 004 4h64a4 4 0 004-4V72a4 4 0 00-4-4z"
  }));
};
var _default = exports.default = (0, _styledComponents.withTheme)(External);