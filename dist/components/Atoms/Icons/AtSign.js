"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
const PATH_DATA = 'M40.811,9.307C36.607,4.664,30.48,2,24,2C11.458,2,2,11.458,2,24s9.458,22,22,22c10.221,0,14.032-3.779,15.29-5.031 c0.197-0.115,0.379-0.265,0.533-0.451c0.707-0.849,0.592-2.11-0.257-2.817c-0.438-0.362-1.61-1.049-3.093,0.427 C35.512,39.086,32.585,42,24,42C13.738,42,6,34.262,6,24S13.738,6,24,6c5.353,0,10.398,2.184,13.845,5.991 c3.162,3.495,4.642,8.044,4.165,12.81c-0.364,3.641-1.958,6.013-4.487,6.677c-1.853,0.487-3.658-0.145-4.269-1.011 c-1.001-1.422-0.753-4.747,0.009-8.237c1.035-3.375,2.104-6.939,2.177-7.179c0.308-1.027-0.249-2.114-1.263-2.465 c-1.012-0.349-2.122,0.161-2.515,1.159c-0.097,0.247-0.191,0.491-0.282,0.732c-1.427-1.455-3.424-2.421-5.724-2.66 c-3.983-0.41-9.547,1.602-12.107,8.643c-1.334,3.667-1.19,7.467,0.384,10.163c1.241,2.126,3.291,3.482,5.929,3.921 c4.299,0.714,7.438-0.837,9.464-3.098c0.254,0.695,0.516,1.122,0.659,1.325c1.66,2.358,5.257,3.443,8.555,2.576 c1.987-0.522,6.691-2.557,7.451-10.147C46.581,19.295,44.741,13.651,40.811,9.307z M37.871,41.195 c-0.149-0.03-0.3-0.081-0.448-0.152C37.567,41.112,37.718,41.163,37.871,41.195z M29.195,21.849 c-0.554,1.799-1.07,3.451-1.379,4.375c-0.413,1.243-2.174,5.229-7.297,4.374c-1.468-0.245-2.493-0.896-3.133-1.993 c-0.967-1.657-0.997-4.254-0.078-6.779c1.633-4.492,4.727-6.064,7.296-6.064c0.217,0,0.431,0.011,0.639,0.033 c1.952,0.203,4.068,1.433,4.396,3.726c0.01,0.074,0.024,0.146,0.043,0.217C29.49,20.479,29.329,21.181,29.195,21.849z';
const StyledSVG = _styledComponents.default.svg.withConfig({
  displayName: "AtSign__StyledSVG",
  componentId: "sc-1328gc9-0"
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
const AtSign = _ref4 => {
  let {
    theme,
    size = 24,
    colour = 'white',
    mobileColour = null,
    ...rest
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(StyledSVG, Object.assign({
    width: size,
    height: size,
    colour: colour,
    mobileColour: mobileColour,
    viewBox: "0 0 48 48"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    d: PATH_DATA
  }));
};
var _default = exports.default = (0, _styledComponents.withTheme)(AtSign);