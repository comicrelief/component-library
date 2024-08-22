"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _SocialIcons = _interopRequireDefault(require("./SocialIcons"));
it('renders correctly with Comic Relief links', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SocialIcons.default, {
    campaign: "comicrelief"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with Sport Relief links', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SocialIcons.default, {
    campaign: "sportrelief"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with Red Nose Day links and self target', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SocialIcons.default, {
    campaign: "rednoseday",
    target: "self"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});