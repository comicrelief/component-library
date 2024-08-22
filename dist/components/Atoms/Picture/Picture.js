"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
require("lazysizes");
require("lazysizes/plugins/blur-up/ls.blur-up");
// Transparent pixel png
const IMAGE_FALLBACK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Picture__Wrapper",
  componentId: "sc-1x3z81z-0"
})(["", ";display:block;width:", ";height:", ";position:relative;", ";"], _ref => {
  let {
    objFitState,
    nonObjFitImage
  } = _ref;
  return !objFitState && nonObjFitImage && "background-image: url(".concat(nonObjFitImage, "); background-size: cover; background-position: center;");
}, props => props.width ? props.width : '100%', props => props.height ? props.height : '100%', _ref2 => {
  let {
    isBackgroundImage
  } = _ref2;
  return isBackgroundImage && 'position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100%;';
});
const Image = _styledComponents.default.img.withConfig({
  displayName: "Picture__Image",
  componentId: "sc-1x3z81z-1"
})(["width:", ";height:", ";display:block;object-fit:", ";", ";", " ", " ", ""], props => props.width ? props.width : '100%', props => props.height ? props.height : 'auto', props => props.objectFit === 'none' && 'none' || props.objectFit === 'cover' && 'cover' || props.objectFit === 'contain' && 'contain', _ref3 => {
  let {
    objectFit,
    objFitState
  } = _ref3;
  return objectFit !== 'none' && !objFitState && 'visibility: hidden;';
}, _ref4 => {
  let {
    smallBreakpointRowLayout
  } = _ref4;
  return smallBreakpointRowLayout === true && (0, _styledComponents.css)(["@media ", "{border-radius:", ";width:80px;height:80px;}@media ", "{padding:none;border-radius:0;width:", ";height:", ";}"], _ref5 => {
    let {
      theme
    } = _ref5;
    return theme.allBreakpoints('S');
  }, (0, _spacing.default)('md'), _ref6 => {
    let {
      theme
    } = _ref6;
    return theme.allBreakpoints('M');
  }, props => props.width ? props.width : '100%', props => props.height ? props.height : 'auto');
}, _ref7 => {
  let {
    mediumBreakpointRowLayout
  } = _ref7;
  return mediumBreakpointRowLayout === true && (0, _styledComponents.css)(["@media ", "{border-radius:", ";width:96px;height:96px;}"], _ref8 => {
    let {
      theme
    } = _ref8;
    return theme.allBreakpoints('M');
  }, (0, _spacing.default)('md'));
}, _ref9 => {
  let {
    smallBreakpointRowLayout,
    mediumBreakpointRowLayout
  } = _ref9;
  return (smallBreakpointRowLayout === true || mediumBreakpointRowLayout === true) && (0, _styledComponents.css)(["@media ", "{padding:none;border-radius:0;width:", ";height:", ";}"], _ref10 => {
    let {
      theme
    } = _ref10;
    return theme.allBreakpoints('L');
  }, props => props.width ? props.width : '100%', props => props.height ? props.height : 'auto');
});

/** Responsive Picture */
const Picture = _ref11 => {
  let {
    images = null,
    image = null,
    alt = '',
    width = '100%',
    height = 'auto',
    objectFit = 'none',
    imageLow = null,
    isBackgroundImage = false,
    smallBreakpointRowLayout = null,
    mediumBreakpointRowLayout = null,
    ...rest
  } = _ref11;
  const document = typeof window !== 'undefined' ? window.document : null;
  const [objFitState, setObjFitState] = (0, _react.useState)(true);
  let nonObjFitImage = null;
  (0, _react.useEffect)(() => {
    // Once document is available, determine if this browser supports object-fit
    if ('objectFit' in document.documentElement.style === false) {
      setObjFitState(false);
    }
  }, [document]);

  // Determine which image will be used for the nonObjectFit fallback
  if (image) {
    nonObjFitImage = image;
  } else if (images) {
    nonObjFitImage = images.substring(0, images.indexOf('?'));
  }
  if (!images) {
    return /*#__PURE__*/_react.default.createElement(Wrapper, Object.assign({
      height: height,
      width: width,
      image: image,
      images: images,
      isBackgroundImage: isBackgroundImage,
      nonObjFitImage: nonObjFitImage,
      objFitState: objFitState
    }, rest), /*#__PURE__*/_react.default.createElement(Image, {
      alt: alt,
      height: height,
      width: width,
      objectFit: objectFit,
      "data-src": image,
      className: "lazyload",
      objFitState: objFitState
    }));
  }
  return /*#__PURE__*/_react.default.createElement(Wrapper, Object.assign({
    height: height,
    width: width,
    image: image,
    images: images,
    setObjFitState: setObjFitState,
    className: "lazyload",
    isBackgroundImage: isBackgroundImage,
    nonObjFitImage: nonObjFitImage,
    objFitState: objFitState
  }, rest), /*#__PURE__*/_react.default.createElement(Image, {
    alt: alt,
    height: height,
    width: width,
    objectFit: objectFit,
    src: image,
    srcSet: IMAGE_FALLBACK,
    "data-src": image,
    "data-srcset": images,
    "data-sizes": "auto",
    "data-lowsrc": imageLow,
    className: "lazyload",
    objFitState: objFitState,
    smallBreakpointRowLayout: smallBreakpointRowLayout,
    mediumBreakpointRowLayout: mediumBreakpointRowLayout
  }));
};
var _default = exports.default = (0, _styledComponents.withTheme)(Picture);