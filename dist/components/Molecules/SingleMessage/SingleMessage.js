"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _youtubePlayer = _interopRequireDefault(require("youtube-player"));
var _reactUid = require("react-uid");
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _SingleMessage = require("./SingleMessage.style");
const allPlayers = {};

/* Single Message is our main component usually to build landing pages */
const SingleMessage = _ref => {
  let {
    backgroundColor = 'white',
    copyFirst = false,
    fullImage = false,
    imageSet = null,
    imageLow = null,
    image = null,
    imageSet2 = null,
    image2 = null,
    imageAltText = '',
    imageAltText2 = '',
    children = null,
    vhFull = false,
    videoID = null,
    landscapeVideo = false,
    paddingOption = null
  } = _ref;
  const hasImage = imageSet || false;
  const doubleImage = (imageSet || image) && (imageSet2 || image2);
  const hasVideo = !!(videoID !== null && videoID !== '');

  // States to track video status
  const [isInitialised, setIsInitialised] = (0, _react.useState)(false);
  const [isPlaying, setIsPlaying] = (0, _react.useState)(false);
  const [onPlay, setOnPlay] = (0, _react.useState)(false);
  const [isBuffering, setIsBuffering] = (0, _react.useState)(false);
  const [uniqueID, setUniqueID] = (0, _react.useState)(null);
  const [hasParentID, setHasParentID] = (0, _react.useState)(false);
  const thisRef = (0, _react.useRef)(null);
  const isIOS = typeof navigator === 'object' ? /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) : false;

  // Break-out video markup into its own function
  const renderVideoPlayers = thisRowID => {
    // Store the dynamically-created UUID (from the main render func) in our state
    // so useEffect can access it
    const thisVideoID = "".concat(thisRowID, "__video");
    setUniqueID(thisVideoID);
    return /*#__PURE__*/_react.default.createElement(_SingleMessage.VideoWrapper, {
      isPlaying: isPlaying,
      isBuffering: isBuffering,
      key: thisVideoID,
      landscapeVideo: landscapeVideo
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: thisVideoID
    }));
  };

  /* Waiting on a usable ref from render before setting our flag used in other functions */
  (0, _react.useEffect)(() => {
    setHasParentID(true);
  }, [thisRef]);

  /* Sets up YT players once all of the ID stuff is taken care of */
  (0, _react.useEffect)(() => {
    if (hasVideo && onPlay && uniqueID && !isInitialised) {
      setIsInitialised(true);
      // Switch state to ensure this only runs once per video row
      // Instantiate a YT Player into our array, using its unique
      // id as the key that PlayButton can access
      allPlayers[uniqueID] = (0, _youtubePlayer.default)(uniqueID, {
        videoId: videoID,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          fs: 0
        }
      });
    }
  }, [hasVideo, isInitialised, uniqueID, videoID, onPlay]);
  const handlePlay = thisUniqueID => {
    setOnPlay(true);
    // Trigger play and update video state
    const thisVideoID = "".concat(thisUniqueID, "__video");
    setTimeout(() => {
      allPlayers[thisVideoID].playVideo();
      // Once video is playing, switch state to allow CSS to show/hide relevant layers
      allPlayers[thisVideoID].on('stateChange', event => {
        if (event.data === 1 && !isIOS || isIOS) {
          setIsBuffering(false);
          setIsPlaying(true);
        }
      });
    }, 1000);
    setIsBuffering(true);
  };

  /* Dynamically retrieve ID that Gatsby has already baked into the page,
  need to null check for initial render */
  const getID = refWithID => {
    const thisID = refWithID !== null ? refWithID.getAttribute('id') : null;
    return thisID;
  };
  return (
    /*#__PURE__*/
    // Creates namespaced UUIDs for each row
    _react.default.createElement(_reactUid.UID, {
      name: id => "single-msg__".concat(id)
    }, id => /*#__PURE__*/_react.default.createElement(_SingleMessage.Container, {
      backgroundColor: backgroundColor,
      copyFirst: copyFirst,
      vhFull: vhFull,
      id: "".concat(id),
      isPlaying: isPlaying,
      hasVideo: hasVideo,
      landscapeVideo: landscapeVideo,
      fullImage: fullImage,
      ref: thisRef
    }, imageSet || imageSet2 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SingleMessage.Media, {
      doubleImage: doubleImage,
      isPlaying: isPlaying,
      isBuffering: isBuffering,
      hasVideo: hasVideo,
      landscapeVideo: landscapeVideo,
      fullImage: fullImage,
      vhFull: vhFull
    }, hasVideo && hasParentID && renderVideoPlayers(getID(thisRef.current)), imageSet || image ? /*#__PURE__*/_react.default.createElement(_SingleMessage.Image, {
      doubleImage: doubleImage,
      vhFull: vhFull,
      isPlaying: isPlaying,
      isBuffering: isBuffering,
      hasVideo: hasVideo,
      fullImage: fullImage,
      landscapeVideo: landscapeVideo
    }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
      alt: imageAltText,
      imageLow: imageLow,
      images: imageSet,
      image: image,
      objectFit: "cover",
      width: "100%",
      height: "100%"
    })) : null, imageSet2 || image2 ? /*#__PURE__*/_react.default.createElement(_SingleMessage.Image, {
      doubleImage: doubleImage,
      vhFull: vhFull
    }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
      alt: imageAltText2,
      imageLow: imageLow,
      images: imageSet2,
      image: image2,
      objectFit: "cover",
      width: "100%",
      height: "100%"
    })) : null, hasVideo ? /*#__PURE__*/_react.default.createElement(_SingleMessage.PlayButton, {
      copyFirst: copyFirst,
      isPlaying: isPlaying,
      isBuffering: isBuffering,
      onClick: () => handlePlay(getID(thisRef.current))
    }, "Play video") : null)) : null, children ? /*#__PURE__*/_react.default.createElement(_SingleMessage.Copy, {
      fullImage: fullImage,
      hasImage: hasImage,
      copyFirst: copyFirst,
      hasVideo: hasVideo,
      vhFull: vhFull,
      paddingOption: paddingOption
    }, children) : null))
  );
};
var _default = exports.default = SingleMessage;