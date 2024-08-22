"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Copy = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "Cardstyle__Container",
  componentId: "sc-cxn4co-0"
})(["position:relative;display:flex;height:100%;border-radius:", ";overflow:hidden;background:", ";@media ", "{flex-direction:", ";gap:", ";background:", ";}@media ", "{flex-direction:", ";gap:", ";background:", ";}@media ", "{flex-direction:column;background:", ";}"], props => props.squaredCorners ? '0' : "".concat((0, _spacing.default)('md')), _ref => {
  let {
    theme,
    backgroundColor
  } = _ref;
  return theme.color(backgroundColor);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('S');
}, props => props.smallBreakpointRowLayout === true ? 'row' : 'column', (0, _spacing.default)('md'), _ref3 => {
  let {
    theme,
    backgroundColor,
    smallBreakpointRowLayout
  } = _ref3;
  return smallBreakpointRowLayout === true ? 'transparent' : theme.color(backgroundColor);
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, props => props.mediumBreakpointRowLayout === true ? 'row' : 'column', (0, _spacing.default)('md'), _ref5 => {
  let {
    theme,
    backgroundColor,
    mediumBreakpointRowLayout
  } = _ref5;
  return mediumBreakpointRowLayout === true ? 'transparent' : theme.color(backgroundColor);
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('L');
}, _ref7 => {
  let {
    theme,
    backgroundColor
  } = _ref7;
  return theme.color(backgroundColor);
});
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Cardstyle__Wrapper",
  componentId: "sc-cxn4co-1"
})(["height:auto;"]);
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "Cardstyle__Copy",
  componentId: "sc-cxn4co-2"
})(["display:flex;flex-direction:column;padding:", ";", " ", " @media ", "{padding:", ";h1{font-size:2rem;}}"], (0, _spacing.default)('l'), _ref8 => {
  let {
    smallBreakpointRowLayout
  } = _ref8;
  return smallBreakpointRowLayout === true && (0, _styledComponents.css)(["@media ", "{padding:", ";h1{margin:0 0 ", ";font-size:1.5rem;}}@media ", "{padding:", ";h1{font-size:2rem;})};"], _ref9 => {
    let {
      theme
    } = _ref9;
    return theme.allBreakpoints('S');
  }, (0, _spacing.default)('sm'), (0, _spacing.default)('sm'), _ref10 => {
    let {
      theme
    } = _ref10;
    return theme.allBreakpoints('M');
  }, (0, _spacing.default)('l'));
}, _ref11 => {
  let {
    mediumBreakpointRowLayout
  } = _ref11;
  return mediumBreakpointRowLayout === true && (0, _styledComponents.css)(["@media ", "{padding:", ";h1{margin:0 0 ", ";font-size:1.5rem;}}"], _ref12 => {
    let {
      theme
    } = _ref12;
    return theme.allBreakpoints('M');
  }, (0, _spacing.default)('sm'), (0, _spacing.default)('sm'));
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('l'));