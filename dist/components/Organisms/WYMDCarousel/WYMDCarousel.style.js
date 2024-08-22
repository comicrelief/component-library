"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleHelpedText = exports.Including = exports.ImageWrapper = exports.Heading = exports.CopyWrapper = exports.CarouselWrapper = exports.AmountWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
// Duration in seconds
const animationSpeed = 0.75;

// Use to calc positions when scaling copy
const textScaleOffsetA = 45;
const textScaleOffsetB = 5;
const ImageWrapper = exports.ImageWrapper = _styledComponents.default.div.withConfig({
  displayName: "WYMDCarouselstyle__ImageWrapper",
  componentId: "sc-115z54p-0"
})(["width:45%;display:block;padding:9%;border:2px dashed #89888b;border-radius:50%;position:relative;overflow:visible;img{width:100%;height:auto;display:block;}&:after{position:absolute;content:'';top:50%;width:125%;right:calc(-125% - 2px);height:2px;border-bottom:2px dashed #89888b;}@media ", "{width:50%;padding:9%;&:after{width:100%;right:calc(-100% - 8px);}}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('L');
});
const AmountWrapper = exports.AmountWrapper = _styledComponents.default.div.withConfig({
  displayName: "WYMDCarouselstyle__AmountWrapper",
  componentId: "sc-115z54p-1"
})(["padding:", " 0 0.75rem;h1{font-size:34px;line-height:37px;@media ", "{font-size:40px;line-height:40px;}}"], (0, _spacing.default)('m'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});
const CopyWrapper = exports.CopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "WYMDCarouselstyle__CopyWrapper",
  componentId: "sc-115z54p-2"
})(["padding:0;width:75%;margin:0 auto;p{font-size:", ";line-height:", ";}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.fontSize('s');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.fontSize('l');
});
const Heading = exports.Heading = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "WYMDCarouselstyle__Heading",
  componentId: "sc-115z54p-3"
})(["width:75%;margin:0 auto;&:first-child{margin-bottom:", ";text-align:center;font-size:16px;line-height:19.5px;@media ", "{font-size:20px;line-height:24.38px;}}"], (0, _spacing.default)('l'), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
});
const PeopleHelpedText = exports.PeopleHelpedText = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "WYMDCarouselstyle__PeopleHelpedText",
  componentId: "sc-115z54p-4"
})(["margin-bottom:", ";text-align:center;font-size:34px;line-height:37px;@media ", "{font-size:60px;line-height:60px;}@media ", "{font-size:64px;line-height:68px;}"], (0, _spacing.default)('l'), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('M');
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.allBreakpoints('L');
});
const Including = exports.Including = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "WYMDCarouselstyle__Including",
  componentId: "sc-115z54p-5"
})(["margin-bottom:0;text-align:center;font-size:12px;line-height:14.63px;@media ", "{font-size:17px;line-height:19px;}"], _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('M');
});

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = exports.CarouselWrapper = _styledComponents.default.div.withConfig({
  displayName: "WYMDCarouselstyle__CarouselWrapper",
  componentId: "sc-115z54p-6"
})(["height:100%;background-color:", ";max-width:760px;padding:", ";margin:0 auto;border-radius:20px;box-shadow:0px 0px 20px rgba(0,0,0,0.15);.carousel{position:relative;margin:0 auto;padding-top:", ";@media ", "{padding-top:", ";}button.carousel__back-button,button.carousel__next-button{position:absolute;left:0;top:0;width:33% !important;height:100%;padding:0 !important;box-shadow:none;text-indent:-9999px;background-color:transparent;border:none;&:after{content:\"\";position:absolute;top:0;left:0;width:50%;height:100%;transition:opacity 0.2s linear;background:linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));}&:hover{&:after{opacity:0.5;}}@media ", "{width:33.3% !important;&:after{width:100%;}}}button.carousel__next-button{left:auto;right:0;&:before{transform:translate(0,-50%) rotate(-90deg);}&:after{left:auto;right:0;background:linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));}}.wymd-carousel{transition:-webkit-transform ", "s;-o-transition:transform ", "s;transition:transform ", "s;-webkit-transform:", "s;will-change:transform;.last-slide{.image-wrapper:after{content:none;}}.carousel__slide{padding-bottom:", "px !important;@media ", "{padding-bottom:", "px !important;.carousel__inner-slide{> div:first-child{transition:transform ", "s ease;transform:scale(0.5);&:after{transition:transform ", "s ease,width ", "s ease,right ", "s ease;right:calc(-300% - 6px);transform:scale(1);width:300%;}}.all-text-wrapper{transition:transform ", "s ease;transform-origin:top;transform:translateY(calc(-", "px + ", "%)) scale(0.5)}}&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-300% - 6px);transform:scale(1);width:300%;}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{transform:scale(1);&:after{right:calc(-222% - 6px);transform:scale(0.5);width:300%;}}}.all-text-wrapper{transform:translateY(0) scale(1);}+ .carousel__slide--visible{> div > div:first-child{transform:scale(0.5);&:after{right:calc(-300% - 6px);transform:scale(1);width:300%;}}.all-text-wrapper{transform:translateY(calc(-", "px + ", "%)) scale(0.5)}}}}}@media ", "{padding-bottom:", "px !important;&.carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-250% - 6px);width:250%;}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-187% - 6px);width:250%;}}}+ .carousel__slide--visible{.carousel__inner-slide{> div:first-child{&:after{right:calc(-250% - 6px);width:250%;}}}}}}}.carousel__inner-slide{text-align:center;display:inline-flex;align-items:center;justify-content:flex-start;flex-direction:column;}}}}"], _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.color('white');
}, (0, _spacing.default)('l'), (0, _spacing.default)('l'), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('l'), _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('M');
}, animationSpeed, animationSpeed, animationSpeed, animationSpeed, props => props.mobileHeight, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.allBreakpoints('M');
}, props => props.tabletHeight, animationSpeed, animationSpeed, animationSpeed, animationSpeed, animationSpeed, textScaleOffsetA, textScaleOffsetB, textScaleOffsetA, textScaleOffsetB, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('L');
}, props => props.desktopHeight);