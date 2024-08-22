"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Card = _interopRequireDefault(require("./Card"));
var _data = require("../../../styleguide/data/data");
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Card.default, {
    image: _data.defaultData.image,
    images: _data.defaultData.image,
    backgroundColor: "yellow"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Title"), /*#__PURE__*/_react.default.createElement("p", null, "Description"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Card.default, {
    image: _data.defaultData.image,
    images: _data.defaultData.image,
    backgroundColor: "yellow",
    smallBreakpointLayout: "Row",
    mediumBreakpointLayout: "Row"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Title"), /*#__PURE__*/_react.default.createElement("p", null, "Text body copy description. Loads more text test. Loads more text test."))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with no body', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Card.default, {
    imageLow: _data.defaultData.image,
    images: _data.defaultData.image,
    backgroundColor: "yellow"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});