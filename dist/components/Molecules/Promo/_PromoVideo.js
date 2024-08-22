"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Promo = require("./Promo.style");
var _PromoVideoButton = _interopRequireDefault(require("./_PromoVideoButton"));
const PromoVideo = _ref => {
  let {
    behindTextGradient,
    copyLeft,
    thisVideoSrc,
    thisPoster,
    autoPlay,
    loop,
    showPosterAfterPlaying,
    blackPlayButton
  } = _ref;
  const [isPlaying, setIsPlaying] = (0, _react.useState)(false);
  const [isRestarting, setIsRestarting] = (0, _react.useState)(false);
  const [videoProgress, setVideoProgress] = (0, _react.useState)(0);
  const videoEl = (0, _react.useRef)(null);
  const togglePlay = () => {
    if (videoEl.current) {
      if (isPlaying) videoEl.current.pause();else videoEl.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const updateTime = () => {
    if (videoEl.current && videoEl.current.duration) {
      // Calculate the percentage of the video played:
      const percentage = Math.round(videoEl.current.currentTime / videoEl.current.duration * 100);
      // Because a completely smooth animation is impossible with the 250ms-ish frequency of
      // the 'timeupdate' event, we're electing to just update the ring every 25%.
      const nearest = 25;
      const roundedPercentage = percentage + nearest / 2 - (percentage + nearest / 2) % nearest;
      setVideoProgress(roundedPercentage);
    }
  };

  // Only loads once the initial screensize check is complete
  (0, _react.useEffect)(() => {
    // Use truthy comparison so either a null OR undefined value won't work
    if (thisVideoSrc != null) {
      videoEl.current.addEventListener('timeupdate', updateTime);
      // Trigger on-load autoplay if apppropriate
      if (autoPlay && !isPlaying) {
        togglePlay();
      }
      videoEl.current.addEventListener('ended', () => {
        // Used purely to halt the CSS animation:
        setIsRestarting(true);

        // If this is a non-looping video, add a listener to update our local state
        // once the video's ended, to let the user retrigger it manually:
        if (!loop) {
          setIsPlaying(false);
          setVideoProgress(0);
          // Reload the video to show the poster image:
          if (showPosterAfterPlaying) videoEl.current.load();
        } else {
          // Rather than using the Video 'loop' property, we retrigger
          // it in *code* as there's no 'restarted' to hook into:
          togglePlay();
        }

        // Grace period to allow the animation to reset
        setTimeout(() => {
          setIsRestarting(false);
        }, 100);
      });
    }
    // CERTAINLY don't want this re-running for EACH of these variable updates, sorry Lint...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thisVideoSrc]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Promo.Video, {
    ref: videoEl,
    src: thisVideoSrc,
    poster: thisPoster,
    muted: true
  }, "Your browser does not support this video filetype."), /*#__PURE__*/_react.default.createElement(_PromoVideoButton.default, {
    copyLeft: copyLeft,
    videoProgress: videoProgress,
    togglePlay: togglePlay,
    isPlaying: isPlaying,
    behindTextGradient: behindTextGradient,
    blackPlayButton: blackPlayButton,
    isRestarting: isRestarting
  }));
};
var _default = exports.default = PromoVideo;