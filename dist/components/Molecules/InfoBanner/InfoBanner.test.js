"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _InfoBanner = _interopRequireDefault(require("./InfoBanner"));
it('renders correctly', () => {
  const title = 'Hello There';
  const amount = '£ 2,000,000';
  const theme = 'Be happy';
  const themeLink = 'cr.com';
  const startDate = '1st June 2010';
  const endDate = '1st June 2020';
  const country = 'Uk';
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_InfoBanner.default, {
    background: "#2C0230",
    title: title,
    amount: amount,
    theme: theme,
    themeLink: themeLink,
    startDate: startDate,
    endDate: endDate,
    country: country
  })).toJSON();
  expect(tree).toMatchSnapshot();
});