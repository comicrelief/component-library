"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Container = _styledComponents.default.div.withConfig({
  displayName: "Box__Container",
  componentId: "sc-1oa7u3c-0"
})(["display:flex;position:relative;height:100%;flex-direction:column;@media ", "{flex-direction:row;}@media ", "{flex-direction:column;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('XL');
});
const Image = _styledComponents.default.div.withConfig({
  displayName: "Box__Image",
  componentId: "sc-1oa7u3c-1"
})(["height:auto;flex-basis:calc(100% / 3);img{border-radius:", ";overflow:hidden;}"], props => props.squaredCorners ? '0' : '1rem');
const Copy = _styledComponents.default.div.withConfig({
  displayName: "Box__Copy",
  componentId: "sc-1oa7u3c-2"
})(["padding:", ";display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;flex-basis:calc(200% / 3);@media ", "{justify-content:center;}@media ", "{justify-content:normal;}"], (0, _spacing.default)('l'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('XL');
});
const Box = _ref5 => {
  let {
    imageLow = null,
    images = null,
    image = null,
    imageAltText,
    width = '100%',
    children = null,
    squaredCorners = false,
    ...rest
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(Container, rest, imageLow ? /*#__PURE__*/_react.default.createElement(Image, {
    squaredCorners: squaredCorners
  }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    alt: imageAltText,
    imageLow: imageLow,
    images: images,
    image: image,
    width: width,
    height: "auto",
    squaredCorners: squaredCorners
  })) : null, children ? /*#__PURE__*/_react.default.createElement(Copy, null, children) : null);
};
var _default = exports.default = Box;