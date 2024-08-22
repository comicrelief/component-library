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
  displayName: "Internal__StyledSVG",
  componentId: "sc-166yk4t-0"
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
const Internal = _ref4 => {
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
    d: "M90.871 50.776c-.016.016-.026.036-.043.052l-32 32C58.047 83.609 57.024 84 56 84s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 52H8a4 4 0 010-8h70.343L53.171 18.829a4 4 0 015.657-5.657l32 32c.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327a4.017 4.017 0 010 1.568c-.023.113-.065.217-.097.327-.041.141-.074.283-.13.42-.053.128-.126.243-.191.364-.059.109-.107.221-.176.325a4.035 4.035 0 01-.455.555z"
  }));
};
var _default = exports.default = (0, _styledComponents.withTheme)(Internal);