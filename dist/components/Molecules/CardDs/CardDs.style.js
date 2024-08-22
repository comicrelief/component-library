"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaLink = exports.Image = exports.Copy = exports.Container = exports.CTA = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "CardDsstyle__Container",
  componentId: "sc-1m4yp5m-0"
})(["display:flex;position:relative;flex-direction:column;height:100%;width:100%;background:", ";@media ", "{flex-direction:row;}@media ", "{flex-direction:column;}"], _ref => {
  let {
    theme,
    backgroundColor
  } = _ref;
  return theme.color(backgroundColor);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('XL');
});
const Image = exports.Image = _styledComponents.default.div.withConfig({
  displayName: "CardDsstyle__Image",
  componentId: "sc-1m4yp5m-1"
})(["height:auto;margin:0 0 0 ", ";@media ", "{margin:0 -", " 0 ", ";}img{border-radius:", ";box-shadow:0 0 ", " rgba(0,0,0,0.15);}"], (0, _spacing.default)('m'), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('m'), (0, _spacing.default)('m'), (0, _spacing.default)('md'), (0, _spacing.default)('md'));
const MediaLink = exports.MediaLink = _styledComponents.default.a.withConfig({
  displayName: "CardDsstyle__MediaLink",
  componentId: "sc-1m4yp5m-2"
})(["width:100%;@media ", "{width:calc(50% + 6rem);}@media ", "{width:100%;}"], _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('M');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('XL');
});
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "CardDsstyle__Copy",
  componentId: "sc-1m4yp5m-3"
})(["padding:", ";", ";display:flex;flex-direction:column;border-radius:", ";box-shadow:0 0 ", " rgba(0,0,0,0.15);background:", ";margin:0 ", " 0 0;@media ", "{height:100%;}", ";", ";"], (0, _spacing.default)('l'), _ref7 => {
  let {
    hasLink
  } = _ref7;
  return hasLink && "padding-bottom: ".concat((0, _spacing.default)('xl'));
}, (0, _spacing.default)('md'), (0, _spacing.default)('md'), _ref8 => {
  let {
    theme,
    backgroundColor
  } = _ref8;
  return theme.color(backgroundColor);
}, (0, _spacing.default)('m'), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.allBreakpoints('XL');
}, (0, _zIndex.default)('low'), _ref10 => {
  let {
    hasImage
  } = _ref10;
  return hasImage && (0, _styledComponents.css)(["margin-top:calc(-2 * ", ");min-height:calc(5 * ", ");@media ", "{margin:", " 0 -", " -", ";width:calc(50% + 6rem);}@media ", "{margin:calc(-2 * ", ") 0 -", " 0;width:100%;}"], (0, _spacing.default)('m'), (0, _spacing.default)('l'), _ref11 => {
    let {
      theme
    } = _ref11;
    return theme.allBreakpoints('M');
  }, (0, _spacing.default)('m'), (0, _spacing.default)('m'), (0, _spacing.default)('m'), _ref12 => {
    let {
      theme
    } = _ref12;
    return theme.allBreakpoints('XL');
  }, (0, _spacing.default)('m'), (0, _spacing.default)('m'));
});
const CTA = exports.CTA = _styledComponents.default.div.withConfig({
  displayName: "CardDsstyle__CTA",
  componentId: "sc-1m4yp5m-4"
})(["position:absolute;right:", ";bottom:-", ";", ";@media ", "{bottom:calc(-1 * (", " + ", "));", ";}"], (0, _spacing.default)('m'), (0, _spacing.default)('m'), (0, _zIndex.default)('medium'), _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('l'), (0, _spacing.default)('md'), _ref14 => {
  let {
    hasImage
  } = _ref14;
  return !hasImage && "bottom: -".concat((0, _spacing.default)('m'), ";");
});