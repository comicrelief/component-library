"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Button = _interopRequireDefault(require("./Button"));
it("renders a standard styled link correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit"
  }, "A standard link")).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      display: -webkit-inline-box;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      position: relative;\n      padding: 0.5rem 1.25rem;\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      font-weight: 700;\n      font-size: 1rem;\n      border-radius: 2rem;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n      height: 3.125rem;\n      width: 100%;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      border: none;\n      cursor: pointer;\n      background-color: #E52630;\n      color: #FFFFFF;\n    }\n\n    .c0 > a {\n      -webkit-text-decoration: none;\n      text-decoration: none;\n    }\n\n    .c0:hover {\n      background-color: #890B11;\n      color: #FFFFFF;\n    }\n\n    @media (min-width:740px) {\n      .c0 {\n        width: auto;\n      }\n    }\n\n    @media (min-width:1024px) {\n      .c0 {\n        width: auto;\n        padding: 1rem 2rem;\n        margin: 0 auto 2rem;\n      }\n    }\n\n    <button\n      className=\"c0\"\n      type=\"submit\"\n    >\n      A standard link\n    </button>\n  ");
});