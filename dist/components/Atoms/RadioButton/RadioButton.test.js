"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _RadioButton = _interopRequireDefault(require("./RadioButton"));
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    id: "male",
    name: "gender",
    value: "male",
    label: "Male"
  }), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    id: "female",
    name: "gender",
    value: "female",
    label: "Female"
  }))).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    Array [\n      .c2 {\n      font-size: 1rem;\n      line-height: 1rem;\n      text-transform: inherit;\n      font-weight: bold;\n      line-height: normal;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n    }\n\n    .c1 {\n      background-color: #FFFFFF;\n      z-index: 1;\n      top: 0;\n      margin: 5px 10px;\n      width: 30px;\n      height: 30px;\n      opacity: 0;\n      left: 0;\n      right: 0;\n      -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n    }\n\n    .c1 + span {\n      left: 2px;\n      border-radius: 30px;\n      background-clip: padding-box;\n      position: absolute;\n      top: 0px;\n      width: 30px;\n      height: 30px;\n      border: 1px solid #666;\n    }\n\n    .c1:checked + span {\n      background-color: #6F3AAB;\n      border: 1px solid #6F3AAB;\n    }\n\n    .c1:checked + span:before {\n      position: absolute;\n      content: '';\n      top: 8px;\n      left: 0;\n      right: 0;\n      background-color: #FFFFFF;\n      border-radius: 30px;\n      width: 12px;\n      height: 12px;\n      z-index: 1;\n      margin: 0 auto;\n      opacity: 1;\n    }\n\n    .c0 {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      position: relative;\n    }\n\n    <label\n        className=\"c0\"\n        htmlFor=\"male\"\n      >\n        <input\n          className=\"c1\"\n          id=\"male\"\n          name=\"gender\"\n          type=\"radio\"\n          value=\"male\"\n        />\n        <span />\n        <span\n          className=\"c2\"\n          color=\"inherit\"\n          size=\"s\"\n        >\n          Male\n        </span>\n      </label>,\n      .c2 {\n      font-size: 1rem;\n      line-height: 1rem;\n      text-transform: inherit;\n      font-weight: bold;\n      line-height: normal;\n      font-family: 'Montserrat',Helvetica,Arial,sans-serif;\n    }\n\n    .c1 {\n      background-color: #FFFFFF;\n      z-index: 1;\n      top: 0;\n      margin: 5px 10px;\n      width: 30px;\n      height: 30px;\n      opacity: 0;\n      left: 0;\n      right: 0;\n      -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n    }\n\n    .c1 + span {\n      left: 2px;\n      border-radius: 30px;\n      background-clip: padding-box;\n      position: absolute;\n      top: 0px;\n      width: 30px;\n      height: 30px;\n      border: 1px solid #666;\n    }\n\n    .c1:checked + span {\n      background-color: #6F3AAB;\n      border: 1px solid #6F3AAB;\n    }\n\n    .c1:checked + span:before {\n      position: absolute;\n      content: '';\n      top: 8px;\n      left: 0;\n      right: 0;\n      background-color: #FFFFFF;\n      border-radius: 30px;\n      width: 12px;\n      height: 12px;\n      z-index: 1;\n      margin: 0 auto;\n      opacity: 1;\n    }\n\n    .c0 {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      position: relative;\n    }\n\n    <label\n        className=\"c0\"\n        htmlFor=\"female\"\n      >\n        <input\n          className=\"c1\"\n          id=\"female\"\n          name=\"gender\"\n          type=\"radio\"\n          value=\"female\"\n        />\n        <span />\n        <span\n          className=\"c2\"\n          color=\"inherit\"\n          size=\"s\"\n        >\n          Female\n        </span>\n      </label>,\n    ]\n  ");
});