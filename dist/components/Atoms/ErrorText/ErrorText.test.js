"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _ErrorText = _interopRequireDefault(require("./ErrorText"));
it('renders correctly', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_ErrorText.default, {
    size: "sm"
  }, "This is an error"));
  expect(renderer.toJSON()).toMatchSnapshot();
});