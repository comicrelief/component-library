"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _RichText = _interopRequireDefault(require("./RichText"));
const htmlContent = "<p>Here's some copy</p><span>More copy</span>";
it('It sanitises markup and renders properly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_RichText.default, {
    align: "right",
    markup: htmlContent
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      text-align: right;\n    }\n    \n    <div\n      className=\"c0\"\n      dangerouslySetInnerHTML={\n        Object {\n          \"__html\": \"<p>Here's some copy</p><span>More copy</span>\",\n        }\n      }\n    />\n  ");
});