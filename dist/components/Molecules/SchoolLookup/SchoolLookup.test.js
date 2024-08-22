"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _SchoolLookup = _interopRequireDefault(require("./SchoolLookup"));
it('renders correctly', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SchoolLookup.default, {
    onSelect: () => {}
  }));
  expect(renderer.toJSON()).toMatchSnapshot();
});