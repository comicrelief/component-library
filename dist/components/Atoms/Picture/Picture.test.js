"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Picture = _interopRequireDefault(require("./Picture"));
var _data = require("../../../styleguide/data/data");
it("renders correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Picture.default, {
    images: _data.defaultData.images,
    image: _data.defaultData.image,
    alt: "Test images"
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      display: block;\n      width: 100%;\n      height: auto;\n      position: relative;\n    }\n\n    .c1 {\n      width: 100%;\n      height: auto;\n      display: block;\n      object-fit: none;\n    }\n\n    <div\n      className=\"c0 lazyload\"\n      height=\"auto\"\n      width=\"100%\"\n    >\n      <img\n        alt=\"Test images\"\n        className=\"c1 lazyload\"\n        data-lowsrc={null}\n        data-sizes=\"auto\"\n        data-src=\"http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg\"\n        data-srcset=\"//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w\"\n        height=\"auto\"\n        src=\"http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg\"\n        srcSet=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\n        width=\"100%\"\n      />\n    </div>\n  ");
});
it("renders correctly with custom props", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Picture.default, {
    images: _data.defaultData.images,
    image: _data.defaultData.image,
    objectFit: "cover",
    width: "200px",
    height: "100px",
    alt: "Test images"
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      display: block;\n      width: 200px;\n      height: 100px;\n      position: relative;\n    }\n\n    .c1 {\n      width: 200px;\n      height: 100px;\n      display: block;\n      object-fit: cover;\n    }\n\n    <div\n      className=\"c0 lazyload\"\n      height=\"100px\"\n      width=\"200px\"\n    >\n      <img\n        alt=\"Test images\"\n        className=\"c1 lazyload\"\n        data-lowsrc={null}\n        data-sizes=\"auto\"\n        data-src=\"http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg\"\n        data-srcset=\"//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w\"\n        height=\"100px\"\n        src=\"http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg\"\n        srcSet=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\n        width=\"200px\"\n      />\n    </div>\n  ");
});