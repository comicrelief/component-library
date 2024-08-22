"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _pureReactCarousel = require("pure-react-carousel");
var _utils = _interopRequireDefault(require("./_utils"));
require("pure-react-carousel/dist/react-carousel.es.css");
var _WYMDCarousel = require("./WYMDCarousel.style");
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
const WYMDCarousel = _ref => {
  let {
    data,
    data: {
      autoPlay,
      contentful_id: thisID
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
  (0, _react.useEffect)(() => {
    setTheseItems((0, _utils.default)(data));
  }, [setTheseItems, data]);
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
  return /*#__PURE__*/_react.default.createElement(_WYMDCarousel.CarouselWrapper, {
    className: "CarouselWrapper",
    id: thisID,
    mobileHeight: data.mobileHeight,
    tabletHeight: data.tabletHeight,
    desktopHeight: data.desktopHeight
  }, /*#__PURE__*/_react.default.createElement(_WYMDCarousel.Heading, {
    tag: "p",
    weight: "bold"
  }, data.headerCopy), /*#__PURE__*/_react.default.createElement(_WYMDCarousel.PeopleHelpedText, {
    tag: "h1",
    family: "Anton",
    uppercase: true,
    weight: "normal",
    color: "red"
  }, data.peopleHelpedText), /*#__PURE__*/_react.default.createElement(_WYMDCarousel.Including, {
    tag: "p"
  }, "including..."), theseItems && /*#__PURE__*/_react.default.createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: 50,
    naturalSlideHeight: 200,
    totalSlides: totalSlides,
    isPlaying: autoPlay,
    interval: 5000,
    visibleSlides: visibleSlides,
    infinite: true
  }, /*#__PURE__*/_react.default.createElement(_pureReactCarousel.Slider, {
    classNameAnimation: "wymd-carousel"
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
      }, /*#__PURE__*/_react.default.createElement(_WYMDCarousel.ImageWrapper, {
        className: "image-wrapper"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: theseItems[key].image.file.url,
        alt: theseItems[key].copy
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "all-text-wrapper"
      }, /*#__PURE__*/_react.default.createElement(_WYMDCarousel.AmountWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
        tag: "h1",
        family: "Anton",
        uppercase: true,
        weight: "normal"
      }, theseItems[key].amount)), /*#__PURE__*/_react.default.createElement(_WYMDCarousel.CopyWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
        tag: "p"
      }, theseItems[key].copy))))
    );
  }), isMobile === false && /*#__PURE__*/_react.default.createElement(_pureReactCarousel.Slide, {
    index: theseItems.length + 1,
    key: "bookend-last"
  })), /*#__PURE__*/_react.default.createElement(_pureReactCarousel.ButtonBack, null, "Back"), /*#__PURE__*/_react.default.createElement(_pureReactCarousel.ButtonNext, null, "Next")));
};
var _default = exports.default = WYMDCarousel;