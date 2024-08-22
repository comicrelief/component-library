"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCopyTop = exports.defaultCopyBottom = void 0;
var _react = _interopRequireDefault(require("react"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
const defaultCopyTop = exports.defaultCopyTop = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.default, {
  tag: "h3",
  size: "xl",
  family: "Anton",
  uppercase: true,
  weight: "400",
  color: "grey_dark"
}, "Stay up to date with Comic Relief?"), /*#__PURE__*/_react.default.createElement(_Text.default, {
  tag: "p",
  size: "md",
  color: "grey_dark"
}, "We\u2019d like to send you updates on the work we\u2019re funding and how your support makes a difference in the UK and around the world."), /*#__PURE__*/_react.default.createElement(_Text.default, {
  tag: "p",
  size: "md",
  color: "grey_dark"
}, "Please tick the relevant boxes below if you would like to hear from us."));
const defaultCopyBottom = exports.defaultCopyBottom = /*#__PURE__*/_react.default.createElement(_Text.default, {
  tag: "p",
  color: "grey_dark"
}, "Update your preferences at any time by visiting our", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
  type: "standard",
  href: "https://www.comicrelief.com/update-your-preferences"
}, "preferences centre"), ". Your details will be kept safe, see our", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
  type: "standard",
  href: "https://www.comicrelief.com/privacy-policy"
}, "privacy policy"), ' ', "for more information.");