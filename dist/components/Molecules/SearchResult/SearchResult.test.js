"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _SearchResult = _interopRequireDefault(require("./SearchResult"));
var _data = require("../../../styleguide/data/data");
it('renders correctly in minimalist form', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SearchResult.default, {
    href: "/test",
    image: _data.defaultData.image,
    title: "News article",
    alt: "Image's description"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with copy', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SearchResult.default, {
    href: "/test",
    image: _data.defaultData.image,
    title: "News article",
    copy: "News article copy",
    alt: "Image's description"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with date', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SearchResult.default, {
    href: "/test",
    image: _data.defaultData.image,
    date: "01 July 2019",
    title: "News article",
    alt: "Image's description"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with date and type', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SearchResult.default, {
    href: "/test",
    image: _data.defaultData.image,
    date: "01 July 2019",
    type: "article",
    title: "News article",
    alt: "Image's description"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});