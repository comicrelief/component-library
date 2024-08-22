"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _DoubleCopy = _interopRequireDefault(require("./DoubleCopy"));
var _RichText = _interopRequireDefault(require("../../Atoms/RichText/RichText"));
it('renders correctly', () => {
  const content = '<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_DoubleCopy.default, {
    leftCopy: /*#__PURE__*/_react.default.createElement(_RichText.default, {
      markup: content
    }),
    rightCopy: /*#__PURE__*/_react.default.createElement(_RichText.default, {
      markup: content
    })
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c2 {\n      text-align: left;\n    }\n\n    .c0 {\n      width: 100%;\n    }\n\n    .c1 {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 4rem;\n    }\n\n    @media (min-width:740px) {\n      .c0 {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n      }\n    }\n\n    <section\n      className=\"c0\"\n    >\n      <div\n        className=\"c1\"\n      >\n        <div\n          className=\"c2\"\n          dangerouslySetInnerHTML={\n            Object {\n              \"__html\": \"<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\",\n            }\n          }\n        />\n      </div>\n      <div\n        className=\"c1\"\n      >\n        <div\n          className=\"c2\"\n          dangerouslySetInnerHTML={\n            Object {\n              \"__html\": \"<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\",\n            }\n          }\n        />\n      </div>\n    </section>\n  ");
});