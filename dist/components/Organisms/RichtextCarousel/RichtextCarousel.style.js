"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideCopyWrapper = exports.HeadingCopyWrapper = exports.CarouselWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
// import Text from '../../Atoms/Text/Text';
// Duration in seconds
const animationSpeed = 0.75;
const SlideCopyWrapper = exports.SlideCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__SlideCopyWrapper",
  componentId: "sc-35wlbv-0"
})(["background:", ";height:", "px;width:75%;display:flex;flex-direction:column;justify-content:center;padding:25px;border:1px dashed ", ";border-radius:20px;position:relative;overflow:visible;word-wrap:break-word;&:after{position:absolute;content:'';top:50%;width:34%;right:calc(-34% - 0px);height:2px;border-bottom:1px dashed ", ";}@media ", "{height:", "px;width:85%;}@media ", "{height:", "px;}"], _ref => {
  let {
    theme,
    nodeBackgroundColour
  } = _ref;
  return theme.color(nodeBackgroundColour);
}, props => props.mobileHeight, _ref2 => {
  let {
    theme,
    nodeOutlineColour
  } = _ref2;
  return theme.color(nodeOutlineColour);
}, _ref3 => {
  let {
    theme,
    nodeOutlineColour
  } = _ref3;
  return theme.color(nodeOutlineColour);
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, props => props.tabletHeight, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
}, props => props.desktopHeight);
const HeadingCopyWrapper = exports.HeadingCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__HeadingCopyWrapper",
  componentId: "sc-35wlbv-1"
})(["text-align:center;"]);

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = exports.CarouselWrapper = _styledComponents.default.div.withConfig({
  displayName: "RichtextCarouselstyle__CarouselWrapper",
  componentId: "sc-35wlbv-2"
})(["height:100%;background:", ";max-width:760px;padding:2.5rem ", " 3.5rem;margin:0 auto;border-radius:20px;box-shadow:0px 0px 20px rgba(0,0,0,0.15);.carousel{position:relative;margin:0 auto;padding-top:", ";button.carousel__back-button,button.carousel__next-button{position:absolute;left:0;top:0;width:33% !important;height:100%;padding:0 !important;box-shadow:none;text-indent:-9999px;background-color:transparent;border:none;&:after{content:\"\";position:absolute;top:0;left:0;width:50%;height:100%;transition:opacity 0.2s linear;background:", ";}&:hover{&:after{opacity:0.5;}}@media ", "{width:33.3% !important;&:after{width:100%;}}}button.carousel__next-button{left:auto;right:0;&:before{transform:translate(0,-50%) rotate(-90deg);}&:after{left:auto;right:0;background:", ";}}.richtext-carousel{transition:-webkit-transform ", "s;-o-transition:transform ", "s;transition:transform ", "s;-webkit-transform:", "s;will-change:transform;.last-slide{.slide-copy-wrapper:after{content:none;}}.carousel__slide{padding-bottom:", "px !important;@media ", "{padding-bottom:", "px !important;.carousel__inner-slide{> div:first-child{transition:transform ", "s ease;transform-origin:center;transform:scale(0.8);&:after{transition:transform ", "s ease,width ", "s ease,right ", "s ease;width:100%;right:calc(-100% - 6px);transform:scale(1);}}}&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{width:33%;right:calc(-33% - 3px);transform:scale(1);}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{transform:scale(1);&:after{width:33%;right:calc(-33% + 3px);transform:scale(0.8);}}}+ .carousel__slide--visible{> div > div:first-child{transform:scale(0.8);&:after{width:50%;right:calc(-50% - 6px);transform:scale(1);}}}}}}@media ", "{padding-bottom:", "px !important;&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-125% - 5px);width:125%;}}}}}}}.carousel__inner-slide{text-align:center;display:inline-flex;align-items:center;justify-content:flex-start;flex-direction:column;}}}}"], _ref6 => {
  let {
    theme,
    carouselBackgroundColour
  } = _ref6;
  return theme.color(carouselBackgroundColour);
}, (0, _spacing.default)('l'), (0, _spacing.default)('l'), _ref7 => {
  let {
    theme,
    carouselBackgroundColour
  } = _ref7;
  return (0, _styledComponents.css)(["linear-gradient(90deg,", ",", "7a,", "00);"], theme.color(carouselBackgroundColour), theme.color(carouselBackgroundColour), theme.color(carouselBackgroundColour));
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('M');
}, _ref9 => {
  let {
    theme,
    carouselBackgroundColour
  } = _ref9;
  return (0, _styledComponents.css)(["linear-gradient(90deg,", "00,", "7a,", ");"], theme.color(carouselBackgroundColour), theme.color(carouselBackgroundColour), theme.color(carouselBackgroundColour));
}, animationSpeed, animationSpeed, animationSpeed, animationSpeed, props => props.mobileHeight, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('M');
}, props => props.tabletHeight, animationSpeed, animationSpeed, animationSpeed, animationSpeed, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('L');
}, props => props.desktopHeight);