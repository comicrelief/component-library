"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Banner = _interopRequireDefault(require("./Banner"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Banner.default, {
    backgroundColor: "purple_dark"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "white"
  }, "Mental health issues affect 1 in 4 of us in the UK. Join now and with your help we can provide vital support for people like Jordan. You know what to do."))).toJSON();
  expect(tree).toMatchSnapshot();
});