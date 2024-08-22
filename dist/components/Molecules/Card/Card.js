"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Card = require("./Card.style");
const Card = _ref => {
  let {
    backgroundColor = 'white',
    children = null,
    imageLow = null,
    images = null,
    image = null,
    imageAltText = '',
    width = '100%',
    height = '100%',
    squaredCorners = false,
    smallBreakpointRowLayout = null,
    mediumBreakpointRowLayout = null,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Card.Container, Object.assign({
    backgroundColor: backgroundColor,
    squaredCorners: squaredCorners,
    smallBreakpointRowLayout: smallBreakpointRowLayout,
    mediumBreakpointRowLayout: mediumBreakpointRowLayout
  }, rest), imageLow ? /*#__PURE__*/_react.default.createElement(_Card.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    alt: imageAltText,
    imageLow: imageLow,
    images: images,
    image: image,
    objectFit: "cover",
    width: width,
    height: height,
    smallBreakpointRowLayout: smallBreakpointRowLayout,
    mediumBreakpointRowLayout: mediumBreakpointRowLayout
  })) : null, children ? /*#__PURE__*/_react.default.createElement(_Card.Copy, {
    smallBreakpointRowLayout: smallBreakpointRowLayout,
    mediumBreakpointRowLayout: mediumBreakpointRowLayout
  }, children) : null);
};
var _default = exports.default = Card;