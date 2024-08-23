"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideCopyWrapper = exports.HeadingCopyWrapper = exports.CarouselWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
// import Text from '../../Atoms/Text/Text';
// Duration in seconds
const animationSpeed = 0.75;
const SlideCopyWrapper = exports.SlideCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__SlideCopyWrapper",
  componentId: "sc-35wlbv-0"
})(["width:75%;display:flex;flex-direction:column;justify-content:center;padding:25px;border:1px dashed #89888b;border-radius:20px;position:relative;overflow:visible;word-wrap:break-word;height:", "px;&:after{position:absolute;content:'';top:50%;width:34%;right:calc(-34% - 0px);height:2px;border-bottom:1px dashed #89888b;}@media ", "{width:85%;height:", "px;}@media ", "{height:", "px;}"], props => props.mobileHeight, _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, props => props.tabletHeight, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
}, props => props.desktopHeight);
const HeadingCopyWrapper = exports.HeadingCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__HeadingCopyWrapper",
  componentId: "sc-35wlbv-1"
})([""]);

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = exports.CarouselWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__CarouselWrapper",
  componentId: "sc-35wlbv-2"
})(["height:100%;background-color:", ";max-width:760px;padding:", " ", " ", ";margin:0 auto;border-radius:20px;box-shadow:0px 0px 20px rgba(0,0,0,0.15);.carousel{position:relative;margin:0 auto;padding-top:", ";button.carousel__back-button,button.carousel__next-button{position:absolute;left:0;top:0;width:33% !important;height:100%;padding:0 !important;box-shadow:none;text-indent:-9999px;background-color:transparent;border:none;&:after{content:\"\";position:absolute;top:0;left:0;width:50%;height:100%;transition:opacity 0.2s linear;background:linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));}&:hover{&:after{opacity:0.5;}}@media ", "{width:33.3% !important;&:after{width:100%;}}}button.carousel__next-button{left:auto;right:0;&:before{transform:translate(0,-50%) rotate(-90deg);}&:after{left:auto;right:0;background:linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));}}.richtext-carousel{transition:-webkit-transform ", "s;-o-transition:transform ", "s;transition:transform ", "s;-webkit-transform:", "s;will-change:transform;.last-slide{.slide-copy-wrapper:after{content:none;}}.carousel__slide{padding-bottom:", "px !important;@media ", "{padding-bottom:", "px !important;.carousel__inner-slide{> div:first-child{transition:transform ", "s ease;transform-origin:center;transform:scale(0.8);&:after{transition:transform ", "s ease,width ", "s ease,right ", "s ease;width:100%;right:calc(-100% - 6px);transform:scale(1);}}}&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{width:33%;right:calc(-33% - 3px);transform:scale(1);}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{transform:scale(1);&:after{width:33%;right:calc(-33% + 3px);transform:scale(0.8);}}}+ .carousel__slide--visible{> div > div:first-child{transform:scale(0.8);&:after{width:50%;right:calc(-50% - 6px);transform:scale(1);}}}}}}@media ", "{padding-bottom:", "px !important;&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-125% - 5px);width:125%;}}}}}}}.carousel__inner-slide{text-align:center;display:inline-flex;align-items:center;justify-content:flex-start;flex-direction:column;}}}}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('white');
}, (0, _spacing.default)('l'), (0, _spacing.default)('l'), (0, _spacing.default)('xl'), (0, _spacing.default)('m'), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, animationSpeed, animationSpeed, animationSpeed, animationSpeed, props => props.mobileHeight, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('M');
}, props => props.tabletHeight, animationSpeed, animationSpeed, animationSpeed, animationSpeed, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('L');
}, props => props.desktopHeight);