"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CookieBanner = require("./CookieBanner.style");
const CookieBanner = _ref => {
  let {
    acceptCookie,
    denyCookie,
    cookiePolicyUrl
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_CookieBanner.CookieWrapper, null, /*#__PURE__*/_react.default.createElement(_CookieBanner.CookieText, {
    tag: "p",
    color: "white"
  }, "Hello! Comic Relief uses cookies to help make this website better and improve our services. You can learn more about", /*#__PURE__*/_react.default.createElement(_CookieBanner.LinkStyle, {
    href: cookiePolicyUrl,
    type: "standard_white"
  }, "our use of cookies"), ". We also use optional cookies for marketing purposes:"), /*#__PURE__*/_react.default.createElement(_CookieBanner.CookieText, {
    tag: "p",
    color: "white"
  }, /*#__PURE__*/_react.default.createElement(_CookieBanner.AcceptCookieBtn, {
    href: "/comic",
    type: "button",
    color: "white",
    onClick: acceptCookie
  }, "Accept"), "Or click", /*#__PURE__*/_react.default.createElement(_CookieBanner.LinkStyle, {
    href: "",
    type: "standard_white",
    onClick: denyCookie
  }, "here"), "to deny these."));
};
var _default = exports.default = CookieBanner;