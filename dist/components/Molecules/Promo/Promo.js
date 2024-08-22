"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PromoVideo = _interopRequireDefault(require("./_PromoVideo"));
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Promo = require("./Promo.style");
const Promo = _ref => {
  let {
    backgroundColor = 'white',
    copyLeft = false,
    imageSet = null,
    imageLow = null,
    image = null,
    imageAltText = '',
    children = null,
    position = 'none',
    autoPlay = true,
    loop = true,
    poster = null,
    mobilePoster = null,
    videoSrc = null,
    mobileVideoSrc = null,
    showPosterAfterPlaying = true,
    behindTextGradient = 'none',
    blackPlayButton = false
  } = _ref;
  // Store the appropriate prop in state, dependent on the breakpoint
  const [thisVideoSrc, setThisVideoSrc] = (0, _react.useState)(null);
  const [thisPoster, setThisPoster] = (0, _react.useState)(null);

  // Let either field define this, just in case
  const hasVideo = Boolean(videoSrc || mobileVideoSrc);
  // A 'video-y' Promo will override and ignore any 'non-Video' images;
  // none of these fields are required so we have to handle them accordingly:
  const hasImage = Boolean(imageSet && !hasVideo);

  // Runs on initial load:
  (0, _react.useEffect)(() => {
    if (hasVideo) {
      // Checks size on load ONLY; don't want to mess about with listeners:
      const isDesktop = window.innerWidth >= _allBreakpoints.breakpointValues.Nav; // 1024+ px
      let currentPoster;
      let currentSrc;

      // If we've got both desktop AND mobile videos, let the
      // *current* screen width define which video src to use:
      if (videoSrc && mobileVideoSrc) {
        currentSrc = isDesktop ? videoSrc : mobileVideoSrc;
        currentPoster = isDesktop ? poster : mobilePoster;
      } else {
        // Else, pick whatever we DO actually have:
        currentSrc = videoSrc || mobileVideoSrc;
        currentPoster = poster || mobilePoster;
      }
      setThisVideoSrc(currentSrc);
      setThisPoster(currentPoster);
    }
  }, [hasVideo, videoSrc, mobileVideoSrc, mobilePoster, poster]);
  return /*#__PURE__*/_react.default.createElement(_Promo.Container, {
    backgroundColor: backgroundColor,
    position: position
  }, /*#__PURE__*/_react.default.createElement(_Promo.Media, {
    imageRight: copyLeft
  }, hasImage && !hasVideo && /*#__PURE__*/_react.default.createElement(_Picture.default, {
    alt: imageAltText,
    imageLow: imageLow,
    images: imageSet,
    image: image,
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }), hasVideo && thisVideoSrc && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PromoVideo.default, {
    copyLeft: copyLeft,
    behindTextGradient: behindTextGradient,
    blackPlayButton: blackPlayButton,
    thisVideoSrc: thisVideoSrc,
    thisPoster: thisPoster,
    showPosterAfterPlaying: showPosterAfterPlaying,
    autoPlay: autoPlay,
    loop: loop
  }))), /*#__PURE__*/_react.default.createElement(_Promo.Wrapper, {
    copyLeft: copyLeft
  }, /*#__PURE__*/_react.default.createElement(_Promo.Gradient, {
    hasVideo: hasVideo,
    behindTextGradient: behindTextGradient,
    copyLeft: copyLeft
  }, /*#__PURE__*/_react.default.createElement(_Promo.Copy, {
    position: position,
    hasVideo: hasVideo,
    behindTextGradient: behindTextGradient
  }, children))));
};
var _default = exports.default = Promo;