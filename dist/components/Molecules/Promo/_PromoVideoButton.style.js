"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressRingWrapper = exports.ProgressRingSVG = exports.ProgressRingCircle = exports.PlayButtonWrapper = exports.PlayButton = exports.Icon = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _PlayWhite = _interopRequireDefault(require("./assets/Play--white.svg"));
var _PauseWhite = _interopRequireDefault(require("./assets/Pause--white.svg"));
var _PlayBlack = _interopRequireDefault(require("./assets/Play--black.svg"));
var _PauseBlack = _interopRequireDefault(require("./assets/Pause--black.svg"));
const PlayButtonWrapper = exports.PlayButtonWrapper = _styledComponents.default.div.withConfig({
  displayName: "_PromoVideoButtonstyle__PlayButtonWrapper",
  componentId: "sc-17cm3uc-0"
})(["width:100%;height:100%;position:absolute;top:0;left:0;z-index:1;&:after{content:\"\";background-image:url(", "),url(", "),url(", "),url(", "),none;}"], _PlayWhite.default, _PauseWhite.default, _PlayBlack.default, _PauseBlack.default);
const PlayButton = exports.PlayButton = _styledComponents.default.button.withConfig({
  displayName: "_PromoVideoButtonstyle__PlayButton",
  componentId: "sc-17cm3uc-1"
})(["display:flex;width:50px;height:50px;position:absolute;top:10px;right:10px;align-items:center;justify-content:center;border:0;padding:0;margin:0;border-radius:50%;background:", ";opacity:0.8;transition:opacity 0.2s;&:hover,&:focus{opacity:1.0;}&:focus-visible{outline-style:outset;outline-width:medium;}", " ", " @media ", "{top:20px;right:20px;", "}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
}, _ref2 => {
  let {
    blackPlayButton
  } = _ref2;
  return blackPlayButton && (0, _styledComponents.css)(["background:", ";"], _ref3 => {
    let {
      theme
    } = _ref3;
    return theme.color('black');
  });
}, _ref4 => {
  let {
    copyLeft
  } = _ref4;
  return !copyLeft && (0, _styledComponents.css)(["right:auto;left:10px;"]);
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
}, _ref6 => {
  let {
    copyLeft
  } = _ref6;
  return !copyLeft && (0, _styledComponents.css)(["right:auto;left:20px;"]);
});
const ProgressRingWrapper = exports.ProgressRingWrapper = _styledComponents.default.span.withConfig({
  displayName: "_PromoVideoButtonstyle__ProgressRingWrapper",
  componentId: "sc-17cm3uc-2"
})(["position:absolute;width:100%;height:100%;display:flex;"]);
const ProgressRingSVG = exports.ProgressRingSVG = _styledComponents.default.svg.withConfig({
  displayName: "_PromoVideoButtonstyle__ProgressRingSVG",
  componentId: "sc-17cm3uc-3"
})([""]);
const ProgressRingCircle = exports.ProgressRingCircle = _styledComponents.default.circle.withConfig({
  displayName: "_PromoVideoButtonstyle__ProgressRingCircle",
  componentId: "sc-17cm3uc-4"
})(["z-index:100;transition:stroke-dashoffset 0.5s;transform:rotate(-90deg);transform-origin:50% 50%;stroke-dashoffset:", ";stroke:white;fill:transparent;", " ", ""], _ref7 => {
  let {
    strokeDashOffsetStyle
  } = _ref7;
  return strokeDashOffsetStyle;
}, _ref8 => {
  let {
    blackPlayButton
  } = _ref8;
  return !blackPlayButton && (0, _styledComponents.css)(["stroke:", ";"], _ref9 => {
    let {
      theme
    } = _ref9;
    return theme.color('black');
  });
}, _ref10 => {
  let {
    isRestarting
  } = _ref10;
  return isRestarting && (0, _styledComponents.css)(["transition:none;"]);
});
const Icon = exports.Icon = _styledComponents.default.span.withConfig({
  displayName: "_PromoVideoButtonstyle__Icon",
  componentId: "sc-17cm3uc-5"
})(["height:50px;width:50px;background:no-repeat center/50% url(", ") transparent;", " ", " ", " ", ""], _PlayWhite.default, _ref11 => {
  let {
    blackPlayButton,
    isPlaying
  } = _ref11;
  return blackPlayButton && !isPlaying && (0, _styledComponents.css)(["background-image:url(", ");"], _PlayWhite.default);
}, _ref12 => {
  let {
    blackPlayButton,
    isPlaying
  } = _ref12;
  return blackPlayButton && isPlaying && (0, _styledComponents.css)(["background-image:url(", ");"], _PauseWhite.default);
}, _ref13 => {
  let {
    blackPlayButton,
    isPlaying
  } = _ref13;
  return !blackPlayButton && !isPlaying && (0, _styledComponents.css)(["background-image:url(", ");"], _PlayBlack.default);
}, _ref14 => {
  let {
    blackPlayButton,
    isPlaying
  } = _ref14;
  return !blackPlayButton && isPlaying && (0, _styledComponents.css)(["background-image:url(", ");"], _PauseBlack.default);
});