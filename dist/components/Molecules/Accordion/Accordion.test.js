"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Accordion = _interopRequireDefault(require("./Accordion"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    title: /*#__PURE__*/_react.default.createElement(_Text.default, {
      tag: "h2",
      font: "Anton",
      size: "l"
    }, "I am the title")
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p"
  }, "Name, surname, email and billing address We need these to process your payment, create a receipt and send it to you. Establishment information We use this information to understand which institutions (e.g. schools, companies) raise money for us. Your details will be kept safe and never shared with other organisations; see our Privacy Policy for more information"))).toJSON();
  expect(tree).toMatchSnapshot();
});