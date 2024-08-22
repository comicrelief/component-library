"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoWrapper = exports.PlayButton = exports.Media = exports.Image = exports.Copy = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _containers = _interopRequireDefault(require("../../../theme/shared/containers"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _videoPlayIcon = _interopRequireDefault(require("./assets/video--play-icon.svg"));
var _videoPlayIcon__hover = _interopRequireDefault(require("./assets/video--play-icon__hover.svg"));
var _loader = _interopRequireDefault(require("./assets/loader.svg"));
var _utils = _interopRequireDefault(require("../../../utils/_utils"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "SingleMessagestyle__Container",
  componentId: "sc-86zg20-0"
})(["display:flex;position:relative;flex-direction:column;overflow:hidden;background:", ";@media ", "{flex-direction:", ";", ";}iframe{height:100%;width:100%;position:absolute;top:0;", ";", ";}"], _ref => {
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
    copyFirst
  } = _ref3;
  return copyFirst === true ? 'row-reverse' : 'row';
}, _ref4 => {
  let {
    landscapeVideo,
    hasVideo,
    fullImage
  } = _ref4;
  return landscapeVideo && hasVideo && !fullImage ? 'min-height: 0;' : null;
}, _ref5 => {
  let {
    copyFirst
  } = _ref5;
  return copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;';
}, _ref6 => {
  let {
    isPlaying
  } = _ref6;
  return isPlaying ? (0, _zIndex.default)('high') : (0, _zIndex.default)('base');
});
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "SingleMessagestyle__Copy",
  componentId: "sc-86zg20-1"
})(["width:100%;", ";", ";padding:", ";@media ", "{", ";", ";flex-direction:column;justify-content:center;padding:", ";}", ";", ";@media ", "{", ";}"], (0, _zIndex.default)('low'), _ref7 => {
  let {
    hasVideo,
    fullImage
  } = _ref7;
  return hasVideo === true && fullImage === true ? 'display: none;' : null;
}, (0, _spacing.default)('l'), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('M');
}, _ref9 => {
  let {
    vhFull,
    fullImage
  } = _ref9;
  return vhFull || fullImage ? 'min-height: calc(100vh - 5.625rem); flex-direction: column; justify-content: center;' : 'height: auto;';
}, _ref10 => {
  let {
    hasVideo,
    fullImage
  } = _ref10;
  return hasVideo === true && fullImage === true ? 'display: none;' : 'display: flex;';
}, (0, _spacing.default)('xl'), props => props.fullImage && (0, _styledComponents.css)(["@media ", "{position:absolute;width:100%;right:0;top:50%;transform:translateY(-50%);", " width:50%;}"], _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('M');
}, props.copyFirst ? (0, _styledComponents.css)(["left:0;"]) : null), props => props.hasImage ? (0, _styledComponents.css)(["@media ", "{width:50%;}"], _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.allBreakpoints('M');
}) : (0, _styledComponents.css)(["@media ", "{width:100%;max-width ", ";padding:", ";}margin:auto;padding:", ";"], _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('M');
}, _containers.default.small, (0, _spacing.default)('xl'), (0, _spacing.default)('md')), _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.allBreakpoints('L');
}, _ref15 => {
  let {
    paddingOption
  } = _ref15;
  return (0, _utils.default)(paddingOption);
});
const Media = exports.Media = _styledComponents.default.div.withConfig({
  displayName: "SingleMessagestyle__Media",
  componentId: "sc-86zg20-2"
})(["width:100%;", ";@media ", "{height:auto;width:", ";", ";", ";}position:relative;", ";", ";@media ", "{padding-bottom:", ";}"], _ref16 => {
  let {
    fullImage
  } = _ref16;
  return fullImage ? 'height: 200px;' : 'height: 280px;';
}, _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.allBreakpoints('M');
}, _ref18 => {
  let {
    fullImage
  } = _ref18;
  return fullImage ? '100%' : '50%';
}, _ref19 => {
  let {
    fullImage
  } = _ref19;
  return fullImage ? 'min-height: 500px;' : null;
}, _ref20 => {
  let {
    vhFull,
    fullImage
  } = _ref20;
  return vhFull && fullImage ? 'min-height: calc(100vh - 5.625rem);' : null;
}, _ref21 => {
  let {
    doubleImage
  } = _ref21;
  return doubleImage && 'display: flex; flex-direction: column';
}, _ref22 => {
  let {
    hasVideo
  } = _ref22;
  return hasVideo ? 'height: auto; overflow: hidden; padding-bottom: 56.25%;' : null;
}, _ref23 => {
  let {
    theme
  } = _ref23;
  return theme.allBreakpoints('M');
}, _ref24 => {
  let {
    landscapeVideo,
    hasVideo
  } = _ref24;
  return landscapeVideo && hasVideo ? 'calc(56.25% / 2);' : '0;';
});
const PlayButton = exports.PlayButton = _styledComponents.default.button.withConfig({
  displayName: "SingleMessagestyle__PlayButton",
  componentId: "sc-86zg20-3"
})(["", ";cursor:pointer;width:100%;height:100%;position:absolute;top:0;border:0;margin:0;padding:0;text-indent:-9999px;background:rgba(0,0,0,0) center no-repeat;background-size:70px;background-image:", ";", ";display:", ";&:focus,&:hover{background-image:", ";}@media ", "{background-size:100px;}"], (0, _zIndex.default)('medium'), _ref25 => {
  let {
    isBuffering
  } = _ref25;
  return isBuffering === true ? "url(".concat(_loader.default, ")") : "url(".concat(_videoPlayIcon.default, ")");
}, _ref26 => {
  let {
    copyFirst
  } = _ref26;
  return copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;';
}, _ref27 => {
  let {
    isPlaying
  } = _ref27;
  return isPlaying ? 'none' : 'block';
}, _ref28 => {
  let {
    isBuffering
  } = _ref28;
  return isBuffering === true ? "url(".concat(_loader.default, ")") : "url(".concat(_videoPlayIcon__hover.default, ")");
}, _ref29 => {
  let {
    theme
  } = _ref29;
  return theme.allBreakpoints('M');
});
const Image = exports.Image = _styledComponents.default.div.withConfig({
  displayName: "SingleMessagestyle__Image",
  componentId: "sc-86zg20-4"
})(["@media ", "{img{position:", ";}}width:100%;height:100%;", ";", ";", ";"], _ref30 => {
  let {
    theme
  } = _ref30;
  return theme.allBreakpoints('M');
}, _ref31 => {
  let {
    fullImage,
    vhFull
  } = _ref31;
  return fullImage || vhFull ? 'absolute' : null;
}, _ref32 => {
  let {
    doubleImage
  } = _ref32;
  return doubleImage && 'height: 50%';
}, _ref33 => {
  let {
    isPlaying
  } = _ref33;
  return isPlaying ? (0, _zIndex.default)('base') : (0, _zIndex.default)('low');
}, _ref34 => {
  let {
    hasVideo
  } = _ref34;
  return hasVideo ? 'position: absolute; top: 0; left: 0;' : null;
});
const VideoWrapper = exports.VideoWrapper = _styledComponents.default.div.withConfig({
  displayName: "SingleMessagestyle__VideoWrapper",
  componentId: "sc-86zg20-5"
})(["width:100%;height:100%;position:absolute;top:0;left:0;", ";"], _ref35 => {
  let {
    isPlaying
  } = _ref35;
  return isPlaying ? (0, _zIndex.default)('medium') : (0, _zIndex.default)('base');
});