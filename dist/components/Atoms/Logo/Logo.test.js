"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Logo = _interopRequireDefault(require("./Logo"));
it("renders correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Logo.default, {
    rotate: true
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c1 {\n      object-fit: cover;\n      width: 100%;\n      display: block;\n      height: auto;\n      margin-right: 1rem;\n    }\n\n    .c0 {\n      display: inline-block;\n      z-index: 3;\n      width: 51px;\n      -webkit-transform: rotate(-14deg);\n      -ms-transform: rotate(-14deg);\n      transform: rotate(-14deg);\n      vertical-align: bottom;\n    }\n\n    @media (min-width:1150px) {\n      .c0 {\n        width: 70px;\n      }\n    }\n\n    <div\n      className=\"c0\"\n      rotate={1}\n    >\n      <img\n        alt=\"Comic Relief logo\"\n        className=\"c1\"\n        src=\"mock.asset\"\n      />\n    </div>\n  ");
});