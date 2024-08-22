"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Text = _interopRequireDefault(require("./Text"));
it('renders high heading correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    height: "5"
  }, "Heading 3 high")).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders heavy heading correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    weight: "1000"
  }, "Heading 3 heavy")).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders large heading correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "l"
  }, "Heading 3 large")).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders xl yellow paragraph correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "xl",
    color: "yellow"
  }, "My paragraph xl and yellow")).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders xl paragraph with Anton font correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "xl",
    family: "Anton"
  }, "My paragraph xl and font Anton")).toJSON();
  expect(tree).toMatchSnapshot();
});