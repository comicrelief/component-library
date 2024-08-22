"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
const Container = _styledComponents.default.section.withConfig({
  displayName: "HeroBanner__Container",
  componentId: "sc-c6z1hi-0"
})(["min-height:200px;position:relative;background:", ";color:", ";"], props => props.background ? props.background : 'transparent', props => props.theme.color('red'));
const Image = _styledComponents.default.img.attrs(() => ({
  alt: ''
})).withConfig({
  displayName: "HeroBanner__Image",
  componentId: "sc-c6z1hi-1"
})(["object-fit:cover;width:100%;display:block;height:100%;opacity:0.5;"]);
const Title = _styledComponents.default.h1.withConfig({
  displayName: "HeroBanner__Title",
  componentId: "sc-c6z1hi-2"
})(["position:absolute;margin:0 auto;top:50%;transform:translateY(-50%);left:0;right:0;text-align:center;"]);

/**
 * Hero Banner to be used as Header of landing pages.
 */

const HeroBanner = _ref => {
  let {
    url,
    title,
    background
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, {
    background: background
  }, /*#__PURE__*/_react.default.createElement(Image, {
    src: url
  }), /*#__PURE__*/_react.default.createElement(Title, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    size: "xxl",
    color: "white"
  }, title)));
};
var _default = exports.default = HeroBanner;