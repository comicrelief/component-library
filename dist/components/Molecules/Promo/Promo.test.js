"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Promo = _interopRequireDefault(require("./Promo"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
const defaultData = require('../../../styleguide/data/data').defaultData;
it('renders Promo correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Promo.default, {
    backgroundColor: "blue_dark",
    imageSet: defaultData.promoImage,
    image: defaultData.promoImage,
    imageAltText: "",
    copyLeft: false
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h1",
    color: "white",
    size: "super",
    family: "Anton",
    uppercase: true,
    weight: "normal"
  }, "Curabitur pretium tincidunt lacus"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white"
  }, "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin."), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/",
    type: "button",
    color: "white"
  }, "Show me this")))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Promo correctly end position', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Promo.default, {
    backgroundColor: "blue_dark",
    imageSet: defaultData.promoImage,
    image: defaultData.promoImage,
    imageAltText: "",
    copyLeft: false,
    position: "end"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h1",
    color: "white",
    size: "super",
    family: "Anton",
    uppercase: true,
    weight: "normal"
  }, "Curabitur pretium tincidunt lacus"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white"
  }, "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin."), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/",
    type: "button",
    color: "white"
  }, "Show me this")))).toJSON();
  expect(tree).toMatchSnapshot();
});