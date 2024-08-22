"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
const Video = _styledComponents.default.video.attrs(() => ({
  playsInline: true
})).withConfig({
  displayName: "VideoBanner__Video",
  componentId: "sc-wxn2ep-0"
})(["width:100%;height:100%;"]);
const VideoBanner = _ref => {
  let {
    video,
    poster,
    controls = false,
    autoPlay = true,
    loop = false,
    muted = true,
    showPosterAfterPlaying = true
  } = _ref;
  // Use the prop as our default
  const [isMuted, setIsMuted] = (0, _react.useState)(muted);
  const videoEl = (0, _react.useRef)(null);
  const triggerPlay = () => {
    videoEl.current.play();
  };
  (0, _react.useEffect)(() => {
    // Trigger onload autoplay based on prop:
    if (autoPlay) {
      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      setIsMuted(true);
      triggerPlay();
    }

    // And attach event listener based on prop:
    if (!loop && showPosterAfterPlaying) {
      videoEl.current.addEventListener('ended', () => {
        // Reloads video, which re-shows poster
        videoEl.current.load();
      });
    }
  }, [autoPlay, loop, showPosterAfterPlaying]);
  return /*#__PURE__*/_react.default.createElement(Video, {
    poster: poster,
    src: video,
    ref: videoEl,
    controls: controls,
    loop: loop,
    muted: isMuted
  }, "Your browser does not support video.");
};
var _default = exports.default = VideoBanner;