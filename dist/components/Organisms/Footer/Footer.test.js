"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _data = _interopRequireDefault(require("./data/data"));
var _footerCopy = _interopRequireDefault(require("./data/footerCopy"));
/* eslint-disable react/jsx-wrap-multilines */

it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Footer.default, {
    navItems: _data.default,
    footerCopy: _footerCopy.default.copy
  })).toJSON();
  expect(tree).toMatchSnapshot();
});