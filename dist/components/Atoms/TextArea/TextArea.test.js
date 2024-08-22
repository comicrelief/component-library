"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _TextArea = _interopRequireDefault(require("./TextArea"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    name: "description",
    placeholder: "This is text area",
    label: "Label",
    rows: 5,
    errorMsg: "",
    id: "Please leave your comment here"
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c1 {\n      font-size: 1rem;\n      line-height: 1rem;\n      text-transform: inherit;\n      font-weight: bold;\n      line-height: normal;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n    }\n\n    .c0 {\n      position: relative;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      color: #5C5C5E;\n      width: 100%;\n    }\n\n    .c2 {\n      margin-bottom: 0.5rem;\n    }\n\n    .c3 {\n      box-sizing: border-box;\n      width: 100%;\n      margin: 0;\n      padding: 1rem 1.5rem;\n      font-size: 1.25rem;\n      background-color: #F4F3F5;\n      border: 1px solid;\n      border-radius: 0.5rem;\n      border-color: #E1E2E3;\n      box-shadow: none;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      color: #000000;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n      resize: vertical;\n    }\n\n    .c3:focus {\n      border: 1px solid #666;\n    }\n\n    .c3:focus::-webkit-input-placeholder {\n      visibility: hidden;\n    }\n\n    .c3:focus::-moz-placeholder {\n      visibility: hidden;\n    }\n\n    .c3:focus:-ms-input-placeholder {\n      visibility: hidden;\n    }\n\n    .c3:focus::placeholder {\n      visibility: hidden;\n    }\n\n    <label\n      className=\"c0\"\n      htmlFor=\"Please leave your comment here\"\n    >\n      <span\n        className=\"c1 c2\"\n        color=\"inherit\"\n        dangerouslySetInnerHTML={\n          Object {\n            \"__html\": \"Label\",\n          }\n        }\n        size=\"s\"\n      />\n      <textarea\n        aria-describedby=\"Please leave your comment here\"\n        className=\"c3\"\n        name=\"description\"\n        placeholder=\"This is text area\"\n        rows={5}\n      />\n      \n    </label>\n  ");
});