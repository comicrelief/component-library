"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Video = exports.Media = exports.Gradient = exports.Copy = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _containers = _interopRequireDefault(require("../../../theme/shared/containers"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "Promostyle__Container",
  componentId: "sc-kk4nna-0"
})(["width:100%;display:flex;position:relative;flex-direction:column;overflow:hidden;background:", ";@media ", "{flex-direction:row;}", " ", " ", ""], _ref => {
  let {
    theme,
    backgroundColor
  } = _ref;
  return theme.color(backgroundColor);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
}, _ref3 => {
  let {
    position
  } = _ref3;
  return position === 'upper' && (0, _styledComponents.css)(["clip-path:polygon(0 0,100% 0,100% 90%,0 100%);@media ", "{clip-path:polygon(0 0,100% 0,100% 85%,0 100%);}"], _ref4 => {
    let {
      theme
    } = _ref4;
    return theme.allBreakpoints('L');
  });
}, _ref5 => {
  let {
    position
  } = _ref5;
  return position === 'lower' && (0, _styledComponents.css)(["clip-path:polygon(0 10%,100% 0,100% 100%,0 100%);@media ", "{clip-path:polygon(0 15%,100% 0,100% 100%,0 100%);}"], _ref6 => {
    let {
      theme
    } = _ref6;
    return theme.allBreakpoints('L');
  });
}, _ref7 => {
  let {
    position
  } = _ref7;
  return position === 'end' && (0, _styledComponents.css)(["clip-path:polygon(0 0,100% 0,100% 90%,0 101%);border-radius:0 0 0 2rem;@media ", "{clip-path:polygon(0 0,100% 0,100% 85%,0% 101%);border-radius:0 0 0 4rem;}"], _ref8 => {
    let {
      theme
    } = _ref8;
    return theme.allBreakpoints('L');
  });
});
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Promostyle__Wrapper",
  componentId: "sc-kk4nna-1"
})(["width:100%;max-width:", ";height:100%;left:0;right:0;margin:0 auto;display:flex;align-items:center;position:relative;", ";@media ", "{min-height:calc(100vh - 90px);}"], _containers.default.medium, _ref9 => {
  let {
    copyLeft
  } = _ref9;
  return !copyLeft && 'justify-content: flex-end';
}, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('L');
});
const Copy = exports.Copy = _styledComponents.default.div.withConfig({
  displayName: "Promostyle__Copy",
  componentId: "sc-kk4nna-2"
})(["width:100%;padding:", " ", " ", ";", ";@media ", "{width:100%;padding:", " ", ";}", ""], (0, _spacing.default)('m'), (0, _spacing.default)('m'), (0, _spacing.default)('xl'), (0, _zIndex.default)('low'), _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('xxl'), (0, _spacing.default)('m'), _ref12 => {
  let {
    position
  } = _ref12;
  return position === 'lower' && (0, _styledComponents.css)(["padding:", " ", ";@media ", "{padding:6rem ", ";margin-top:6rem;}"], (0, _spacing.default)('xl'), (0, _spacing.default)('m'), _ref13 => {
    let {
      theme
    } = _ref13;
    return theme.allBreakpoints('L');
  }, (0, _spacing.default)('m'));
});
const Media = exports.Media = _styledComponents.default.div.withConfig({
  displayName: "Promostyle__Media",
  componentId: "sc-kk4nna-3"
})(["width:100%;height:auto;img{object-position:center;}@media ", "{height:100%;position:absolute;}"], _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.allBreakpoints('L');
});
const Video = exports.Video = _styledComponents.default.video.attrs(() => ({
  playsInline: true
})).withConfig({
  displayName: "Promostyle__Video",
  componentId: "sc-kk4nna-4"
})(["width:100%;height:100%;object-fit:cover;"]);
const Gradient = exports.Gradient = _styledComponents.default.div.withConfig({
  displayName: "Promostyle__Gradient",
  componentId: "sc-kk4nna-5"
})(["width:100%;height:100%;display:flex;align-items:center;@media ", "{width:50%;position:absolute;top:0;left:0;", ";", ";}"], _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.allBreakpoints('L');
}, _ref16 => {
  let {
    copyLeft
  } = _ref16;
  return !copyLeft && (0, _styledComponents.css)(["left:auto;right:0;"]);
}, _ref17 => {
  let {
    hasVideo,
    behindTextGradient
  } = _ref17;
  return hasVideo !== false && behindTextGradient !== 'none' && (0, _styledComponents.css)(["overflow:hidden;background-color:", ";box-shadow:0px 0px 50px 60px ", ";"], behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)', behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)');
});