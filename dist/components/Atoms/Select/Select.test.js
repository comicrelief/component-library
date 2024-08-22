"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Select = _interopRequireDefault(require("./Select"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Select.default, {
    label: "Label",
    description: "Please choose an option",
    errorMsg: "",
    options: [{
      value: 'Option one',
      displayValue: 'The first option'
    }, {
      value: 'Option two',
      displayValue: 'The second option'
    }, {
      value: 'Option three',
      displayValue: 'The third option'
    }, {
      value: 'Option four',
      displayValue: 'The fourth option'
    }]
  })).toJSON();
  expect(tree).toMatchSnapshot();
});