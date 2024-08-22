"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Box = _interopRequireDefault(require("./Box"));
var _data = require("../../../styleguide/data/data");
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Box.default, {
    imageLow: _data.defaultData.image,
    images: _data.defaultData.image
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Title"), /*#__PURE__*/_react.default.createElement("p", null, "Description"))).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with no image', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement("h2", null, "Title"), /*#__PURE__*/_react.default.createElement("p", null, "Description"))).toJSON();
  expect(tree).toMatchSnapshot();
});