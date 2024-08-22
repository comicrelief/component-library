"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Chip = _interopRequireDefault(require("./Chip"));
it("renders article teaser correctly", () => {
  const handleToggle = e => e.target.value;
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Chip.default, {
    category: "Gender Justice",
    handleToggle: handleToggle
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      width: auto;\n      height: 48px;\n      border-radius: 2rem;\n      background-color: #d5d5d5;\n      margin: 0.5rem 0.5rem 0 0;\n      padding: 4px;\n      padding-right: 1rem;\n      -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n      position: relative;\n    }\n\n    .c2 {\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      opacity: 0.2;\n      border-radius: 2rem;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 1;\n    }\n\n    .c2:hover {\n      background: #E1E2E3;\n    }\n\n    .c1 {\n      display: block;\n      box-sizing: border-box;\n      opacity: 0;\n      position: absolute;\n      left: 0px;\n      width: 40px;\n      height: 40px;\n      margin: 0;\n      border: 1px solid #666;\n    }\n\n    .c1 + span {\n      background: url(mock.asset) no-repeat center;\n      background-size: 24px;\n      margin-right: 1rem;\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-color: #969598;\n      float: left;\n      z-index: 2;\n    }\n\n    .c1:checked ~ span {\n      background-size: 24px;\n      background-color: #6F3AAB;\n    }\n\n    .c1:focus + span {\n      border-color: #666;\n      border-width: 3px;\n    }\n\n    .c1:focus + span {\n      border-color: #666;\n      border-width: 3px;\n    }\n\n    @media (min-width:740px) {\n      .c0 {\n        margin: 1rem 1rem 0 0;\n      }\n    }\n\n    <label\n      className=\"c0\"\n    >\n      <input\n        checked={false}\n        className=\"c1\"\n        color=\"purple\"\n        onChange={[Function]}\n        type=\"checkbox\"\n        value=\"Gender Justice\"\n      />\n      <span />\n      <span\n        className=\"c2\"\n      />\n      Gender Justice\n    </label>\n  ");
});