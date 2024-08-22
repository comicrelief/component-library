"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Link = _interopRequireDefault(require("./Link"));
var _index = require("../Icons/index");
it("renders a standard styled link correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/test",
    type: "standard"
  }, "A standard link")).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      position: relative;\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      display: inline;\n      line-height: 1.5rem;\n      color: #000000;\n      border-bottom: 2px solid #000000;\n      font-weight: normal;\n    }\n\n    .c0:hover {\n      color: #000000;\n      border-bottom: 2px solid #000000;\n    }\n\n    <a\n      className=\"c0\"\n      color=\"red\"\n      href=\"/test\"\n      target=\"_self\"\n      type=\"standard\"\n    >\n      A standard link\n    </a>\n  ");
});
it("renders a button with an icon", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/test",
    type: "standard",
    color: "red",
    icon: /*#__PURE__*/_react.default.createElement(_index.Internal, {
      colour: "white"
    })
  }, "Internal link")).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c1 {\n      display: -webkit-inline-box;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      margin-left: 1rem;\n      -webkit-align-self: center;\n      -ms-flex-item-align: center;\n      align-self: center;\n      right: 1.5rem;\n      position: absolute;\n      right: -2rem;\n      top: 0;\n      bottom: 0;\n    }\n\n    .c0 {\n      position: relative;\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      display: inline;\n      line-height: 1.5rem;\n      color: #000000;\n      border-bottom: 2px solid #000000;\n      font-weight: normal;\n    }\n\n    .c0:hover {\n      color: #000000;\n      border-bottom: 2px solid #000000;\n    }\n\n    .c2 {\n      fill: #FFFFFF;\n    }\n\n    @media (min-width:740px) {\n      .c1 {\n        width: auto;\n        right: auto;\n        position: relative;\n        position: absolute;\n        right: -2rem;\n        top: 0;\n        bottom: 0;\n      }\n    }\n\n    @media (min-width:1024px) {\n      .c2 {\n        fill: #FFFFFF;\n      }\n    }\n\n    <a\n      className=\"c0\"\n      color=\"red\"\n      href=\"/test\"\n      target=\"_self\"\n      type=\"standard\"\n    >\n      Internal link\n      <span\n        className=\"c1\"\n        type=\"standard\"\n      >\n        <svg\n          className=\"c2\"\n          fill=\"#FFFFFF\"\n          height={24}\n          viewBox=\"0 0 96 96\"\n          width={24}\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M90.871 50.776c-.016.016-.026.036-.043.052l-32 32C58.047 83.609 57.024 84 56 84s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 52H8a4 4 0 010-8h70.343L53.171 18.829a4 4 0 015.657-5.657l32 32c.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327a4.017 4.017 0 010 1.568c-.023.113-.065.217-.097.327-.041.141-.074.283-.13.42-.053.128-.126.243-.191.364-.059.109-.107.221-.176.325a4.035 4.035 0 01-.455.555z\"\n          />\n        </svg>\n      </span>\n    </a>\n  ");
});
it("renders a standard styled link correctly with target blank and assistive text", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/test",
    type: "standard",
    target: "blank"
  }, "A standard link")).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      position: relative;\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      display: inline;\n      line-height: 1.5rem;\n      color: #000000;\n      border-bottom: 2px solid #000000;\n      font-weight: normal;\n    }\n\n    .c0:hover {\n      color: #000000;\n      border-bottom: 2px solid #000000;\n    }\n\n    .c1 {\n      border: 0;\n      -webkit-clip: rect(0 0 0 0);\n      clip: rect(0 0 0 0);\n      -webkit-clip-path: inset(50%);\n      clip-path: inset(50%);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      white-space: nowrap;\n      width: 1px;\n    }\n\n    <a\n      className=\"c0\"\n      color=\"red\"\n      href=\"/test\"\n      target=\"_blank\"\n      type=\"standard\"\n    >\n      A standard link\n      <span\n        className=\"c1\"\n      >\n        (opens in new window)\n      </span>\n    </a>\n  ");
});
it("renders link styled as button correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "/test",
    type: "button",
    color: "yellow"
  }, "A yellow button")).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      display: -webkit-inline-box;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      position: relative;\n      padding: 0.5rem 1.25rem;\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      font-weight: 700;\n      font-size: 1rem;\n      border-radius: 2rem;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n      height: 3.125rem;\n      width: 100%;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      cursor: pointer;\n      background-color: #FFE400;\n      color: #000000;\n    }\n\n    .c0:hover {\n      background-color: #FEFD5A;\n      color: #000000;\n    }\n\n    @media (min-width:740px) {\n      .c0 {\n        width: auto;\n      }\n    }\n\n    @media (min-width:1024px) {\n      .c0 {\n        background-color: #FFE400;\n        color: #000000;\n      }\n\n      .c0:hover {\n        background-color: #FEFD5A;\n        color: #000000;\n      }\n    }\n\n    <a\n      className=\"c0\"\n      color=\"yellow\"\n      href=\"/test\"\n      target=\"_self\"\n      type=\"button\"\n    >\n      A yellow button\n    </a>\n  ");
});