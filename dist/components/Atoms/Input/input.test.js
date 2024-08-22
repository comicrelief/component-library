"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Input = _interopRequireDefault(require("./Input"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Input.default, {
    name: "fullname",
    placeholder: "This is the hint text",
    type: "text",
    label: "Label",
    errorMsg: "",
    id: "Accessibility info go here"
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c1 {\n      font-size: 1rem;\n      line-height: 1rem;\n      text-transform: inherit;\n      font-weight: bold;\n      line-height: normal;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n    }\n\n    .c0 {\n      position: relative;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      color: #5C5C5E;\n      width: 100%;\n    }\n\n    .c2 {\n      margin-bottom: 0.5rem;\n    }\n\n    .c4 {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      height: 48px;\n      padding: 1rem 1.5rem;\n      background-color: #F4F3F5;\n      border: 1px solid;\n      border-color: #E1E2E3;\n      box-shadow: none;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      color: #000000;\n      border-radius: 0.5rem;\n      font-size: inherit;\n      z-index: 2;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n    }\n\n    .c4:focus {\n      border: 1px solid #666;\n    }\n\n    .c3 {\n      position: relative;\n      font-size: 1.25rem;\n    }\n\n    @media (min-width:740px) {\n      .c4 {\n        max-width: 290px;\n      }\n    }\n\n    <label\n      className=\"c0\"\n      htmlFor=\"Accessibility info go here\"\n    >\n      <span\n        className=\"c1 c2\"\n        color=\"inherit\"\n        dangerouslySetInnerHTML={\n          Object {\n            \"__html\": \"Label\",\n          }\n        }\n        size=\"s\"\n      />\n      <div\n        className=\"c3\"\n      >\n        \n        <input\n          aria-describedby=\"Accessibility info go here\"\n          className=\"c4\"\n          id=\"Accessibility info go here\"\n          name=\"fullname\"\n          placeholder=\"This is the hint text\"\n          required={false}\n          type=\"text\"\n        />\n      </div>\n      \n    </label>\n  ");
});