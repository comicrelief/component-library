"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.PlayImage = exports.PlayHolder = exports.MediaLink = exports.Image = exports.Copy = exports.Container = exports.CloseButton = exports.CTA = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
const boxShadow = 'box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15)';
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "SingleMessageDsstyle__Container",
  componentId: "sc-s8zd7s-0"
})(["display:flex;position:relative;flex-direction:column;justify-content:space-around;background:", ";@media ", "{flex-direction:", ";}"], _ref => {
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
    imageLeft
  } = _ref3;
  return imageLeft ? 'row' : 'row-reverse';
});
const Subtitle = exports.Subtitle = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "SingleMessageDsstyle__Subtitle",
  componentId: "sc-s8zd7s-1"
})(["letter-spacing:0.03em;text-transform:uppercase;"]);
const Image = exports.Image = _styledComponents.default.div.withConfig({
  displayName: "SingleMessageDsstyle__Image",
  componentId: "sc-s8zd7s-2"
})(["height:100%;@media ", "{height:448px;}img{border-radius:1rem;", ";}"], _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, boxShadow);
const MediaLink = exports.MediaLink = _styledComponents.default.a.withConfig({
  displayName: "SingleMessageDsstyle__MediaLink",
  componentId: "sc-s8zd7s-3"
})(["", ";@media ", "{margin:0;height:448px;flex-grow:0;flex-shrink:0;flex-basis:50%;}"], _ref5 => {
  let {
    imageLeft
  } = _ref5;
  return imageLeft ? "margin-right: ".concat((0, _spacing.default)('m')) : "margin-left: ".concat((0, _spacing.default)('m'));
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('M');
});
const PlayHolder = exports.PlayHolder = _styledComponents.default.div.withConfig({
  displayName: "SingleMessageDsstyle__PlayHolder",
  componentId: "sc-s8zd7s-4"
})(["position:relative;"]);
const PlayImage = exports.PlayImage = _styledComponents.default.img.withConfig({
  displayName: "SingleMessageDsstyle__PlayImage",
  componentId: "sc-s8zd7s-5"
})(["position:absolute;margin:auto;", ";top:0;right:0;bottom:0;left:0;"], (0, _zIndex.default)('medium'));
const CloseButton = exports.CloseButton = _styledComponents.default.button.withConfig({
  displayName: "SingleMessageDsstyle__CloseButton",
  componentId: "sc-s8zd7s-6"
})(["position:absolute;z-index:2;top:-45px;right:0px;display:inline-block;width:35px;height:35px;overflow:hidden;border:none;background:transparent;:before{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff;border-radius:5px;margin-top:-6px;transform:rotate(45deg);}:after{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff;border-radius:5px;margin-top:-6px;transform:rotate(-45deg);}"]);
const CTA = exports.CTA = _styledComponents.default.div.withConfig({
  displayName: "SingleMessageDsstyle__CTA",
  componentId: "sc-s8zd7s-7"
})(["position:absolute;bottom:-", ";", ";a{font-family:", ";}@media ", "{", "}"], (0, _spacing.default)('m'), (0, _zIndex.default)('medium'), _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.fontFamilies('Montserrat');
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('M');
}, _ref9 => {
  let {
    hasImage
  } = _ref9;
  return !hasImage && "bottom: -".concat((0, _spacing.default)('m'), ";");
});
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "SingleMessageDsstyle__Copy",
  componentId: "sc-s8zd7s-8"
})(["position:relative;height:auto;padding:", ";", ";display:flex;flex-direction:column;border-radius:1rem;", ";background:", ";", ";", ";@media ", "{min-height:448px;height:auto;width:calc(50% + 1.5rem);flex-grow:0;flex-shrink:0;flex-basis:calc(50% + 1.5rem);padding:", ";", ";", ";}@media ", "{padding:calc(", " * 2);", ";margin:", ";}"], (0, _spacing.default)('m'), (0, _zIndex.default)('low'), boxShadow, _ref10 => {
  let {
    theme,
    backgroundColor
  } = _ref10;
  return theme.color(backgroundColor);
}, _ref11 => {
  let {
    hasLink
  } = _ref11;
  return hasLink && "padding-bottom: calc(".concat((0, _spacing.default)('l'), " + ").concat((0, _spacing.default)('m'), ")");
}, _ref12 => {
  let {
    imageLeft
  } = _ref12;
  return imageLeft ? "margin: -".concat((0, _spacing.default)('m'), " 0 ").concat((0, _spacing.default)('m'), " ").concat((0, _spacing.default)('m'), "; ").concat(CTA, " { right: ").concat((0, _spacing.default)('m'), ";}") : "margin: -".concat((0, _spacing.default)('m'), " ").concat((0, _spacing.default)('m'), " ").concat((0, _spacing.default)('m'), " 0; ").concat(CTA, " { left: ").concat((0, _spacing.default)('m'), ";}");
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('l'), _ref14 => {
  let {
    hasLink
  } = _ref14;
  return hasLink && "padding-bottom: calc(".concat((0, _spacing.default)('l'), " + ").concat((0, _spacing.default)('m'), ")");
}, _ref15 => {
  let {
    imageLeft
  } = _ref15;
  return imageLeft ? "margin: ".concat((0, _spacing.default)('l'), " 0 ").concat((0, _spacing.default)('m'), " -").concat((0, _spacing.default)('m')) : "margin: ".concat((0, _spacing.default)('l'), " -").concat((0, _spacing.default)('m'), " ").concat((0, _spacing.default)('m'), " 0");
}, _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.allBreakpoints('XL');
}, (0, _spacing.default)('m'), _ref17 => {
  let {
    hasLink
  } = _ref17;
  return hasLink && "padding-bottom: calc(".concat((0, _spacing.default)('m'), " * 3)");
}, _ref18 => {
  let {
    imageLeft
  } = _ref18;
  return imageLeft ? "".concat((0, _spacing.default)('l'), " 0 ").concat((0, _spacing.default)('m'), " -").concat((0, _spacing.default)('l')) : "".concat((0, _spacing.default)('l'), " -").concat((0, _spacing.default)('l'), " ").concat((0, _spacing.default)('m'), " 0");
});