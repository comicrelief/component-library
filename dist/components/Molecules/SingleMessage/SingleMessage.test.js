"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _SingleMessage = _interopRequireDefault(require("./SingleMessage"));
var _data = require("../../../styleguide/data/data");
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
it('renders Single Message with Image correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "purple",
    imageSet: _data.defaultData.images,
    image: _data.defaultData.image,
    imageAltText: "",
    copyFirst: false
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h1",
    color: "white",
    size: "xxl"
  }, "title"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white"
  }, "description"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/",
    type: "button",
    color: "white"
  }, "CTA"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Single Message with no Image correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "purple",
    copyFirst: false
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white",
    size: "xxl"
  }, "\u201CThe creativity that goes into helping people have a better life is extraordinary.\u201D"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Single Message with full width correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "purple",
    imageSet: _data.defaultData.images,
    image: _data.defaultData.image,
    imageAltText: "",
    copyFirst: false,
    fullImage: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h1",
    color: "white",
    size: "xxl"
  }, "title"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white"
  }, "description"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/",
    type: "button",
    color: "white"
  }, "CTA"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Single Message with full width image and no text correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "purple",
    imageSet: _data.defaultData.images,
    image: _data.defaultData.image,
    imageAltText: "",
    copyFirst: false,
    fullImage: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Single Message with 100% vertical height image correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "purple",
    imageLow: _data.defaultData.imageLow,
    imageSet: _data.defaultData.images,
    image: _data.defaultData.image,
    imageAltText: "",
    vhFull: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white",
    size: "xxl"
  }, "\u201CThe creativity that goes into helping people have a better life is extraordinary.\u201D"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Single Message with double image correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessage.default, {
    backgroundColor: "yellow",
    imageLow: _data.defaultData.imageLow,
    imageSet: _data.defaultData.images,
    image: _data.defaultData.image,
    imageAltText: "",
    imageSet2: _data.defaultData.images,
    image2: _data.defaultData.image,
    imageAltText2: ""
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "black",
    size: "xxl"
  }, "\u201CThe creativity that goes into helping people have a better life is extraordinary.\u201D"))).toJSON();
  expect(tree).toMatchSnapshot();
});