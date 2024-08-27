"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _pureReactCarousel = require("pure-react-carousel");
require("pure-react-carousel/dist/react-carousel.es.css");
var _RichtextCarousel = require("./RichtextCarousel.style");
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
const RichtextCarousel = _ref => {
  let {
    data: {
      contentful_id: thisID,
      autoPlay,
      nodes,
      headingCopy,
      // Set some defaults for good measure:
      mobileHeight = 300,
      tabletHeight = 350,
      desktopHeight = 350,
      carouselBackgroundColour = 'white',
      nodeBackgroundColour = 'white',
      nodeOutlineColour = 'grey'
    }
  } = _ref;
  // Defaults to mobile config:
  const [isMobile, setIsMobile] = (0, _react.useState)(true);
  const [visibleSlides, setVisibleSlides] = (0, _react.useState)(1);
  const [totalSlides, setTotalSlides] = (0, _react.useState)(null);
  const [theseItems, setTheseItems] = (0, _react.useState)();

  // Custom function to let us update the carousel config dynamically
  const screenResize = (0, _react.useCallback)(() => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    const isCurrentlyMobile = window.innerWidth < _allBreakpoints.breakpointValues.M;
    if (screenSize !== null && isMobile !== isCurrentlyMobile) {
      setIsMobile(isCurrentlyMobile);
      setVisibleSlides(isCurrentlyMobile ? 1 : 3);
      setTotalSlides(isCurrentlyMobile ? theseItems.length : theseItems.length + 2);
    }
  }, [isMobile, theseItems]);

  // Format our data BEFORE we use it in render:
  // TO-DO: probably don't need this any more
  (0, _react.useEffect)(() => {
    setTheseItems(nodes);
  }, [setTheseItems, nodes]);
  (0, _react.useEffect)(() => {
    if (window !== 'undefined' && window.innerWidth >= _allBreakpoints.breakpointValues.M) {
      // On inital render, update carousel plugin config
      // to suit the non-mobile layout and functionality:
      setIsMobile(false);
      setVisibleSlides(3);
    }

    // Hook into browser's own onresize event to call our custom wrapper function:
    if (typeof window !== 'undefined') window.onresize = screenResize;
  }, [screenResize]);
  if (theseItems && totalSlides === null) {
    // Reflects our two dummy/bookend slides for non-mobile/tablet views:
    setTotalSlides(isMobile ? theseItems.length : theseItems.length + 2);
  }
  return /*#__PURE__*/_react.default.createElement(_RichtextCarousel.CarouselWrapper, {
    className: "CarouselWrapper",
    id: thisID,
    mobileHeight: mobileHeight,
    tabletHeight: tabletHeight,
    desktopHeight: desktopHeight,
    carouselBackgroundColour: carouselBackgroundColour
  }, /*#__PURE__*/_react.default.createElement(_RichtextCarousel.HeadingCopyWrapper, null, headingCopy), theseItems && /*#__PURE__*/_react.default.createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: 50,
    naturalSlideHeight: 200,
    totalSlides: totalSlides,
    isPlaying: autoPlay,
    interval: 5000,
    visibleSlides: visibleSlides,
    infinite: true
  }, /*#__PURE__*/_react.default.createElement(_pureReactCarousel.Slider, {
    classNameAnimation: "richtext-carousel"
  }, isMobile === false && /*#__PURE__*/_react.default.createElement(_pureReactCarousel.Slide, {
    index: 0,
    key: 0
  }), Object.keys(theseItems).map((key, index) => {
    // Reflect that initial dummy/bookend slide shown on non-mobile/tablet views:
    const thisOffsetIndex = index + (isMobile ? 0 : 1);
    return (
      /*#__PURE__*/
      // Calculate the index offset accordingly to reflect the number of slides,
      // but use the REAL index when determining if its the last REAL slide
      _react.default.createElement(_pureReactCarousel.Slide, {
        index: thisOffsetIndex,
        className: index === theseItems.length - 1 && 'last-slide',
        key: thisOffsetIndex
      }, /*#__PURE__*/_react.default.createElement(_RichtextCarousel.SlideCopyWrapper, {
        className: "slide-copy-wrapper",
        mobileHeight: mobileHeight,
        tabletHeight: tabletHeight,
        desktopHeight: desktopHeight,
        nodeBackgroundColour: nodeBackgroundColour,
        nodeOutlineColour: nodeOutlineColour
      }, theseItems[index].copy))
    );
  }), isMobile === false && /*#__PURE__*/_react.default.createElement(_pureReactCarousel.Slide, {
    index: theseItems.length + 1,
    key: "bookend-last"
  })), /*#__PURE__*/_react.default.createElement(_pureReactCarousel.ButtonBack, null, "Back"), /*#__PURE__*/_react.default.createElement(_pureReactCarousel.ButtonNext, null, "Next")));
};
var _default = exports.default = RichtextCarousel;