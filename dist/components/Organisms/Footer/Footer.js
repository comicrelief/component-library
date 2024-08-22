"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Logo = _interopRequireDefault(require("../../Atoms/Logo/Logo"));
var _Nav = _interopRequireDefault(require("./Nav/Nav"));
var _SocialIcons = _interopRequireDefault(require("../../Atoms/SocialIcons/SocialIcons"));
var _Footer = require("./Footer.style");
const Footer = _ref => {
  let {
    navItems = {},
    footerCopy = '',
    campaign = 'Comic Relief',
    additionalLegalLine = '',
    overrideallowList = false,
    ...rest
  } = _ref;
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Footer.FooterWrapper, Object.assign({
    overrideallowList: overrideallowList,
    navItems: true
  }, rest), /*#__PURE__*/_react.default.createElement(_Footer.InnerWrapper, null, additionalLegalLine && /*#__PURE__*/_react.default.createElement(_Footer.FooterLegalLine, {
    tag: "p",
    color: "grey"
  }, additionalLegalLine), /*#__PURE__*/_react.default.createElement(_Footer.FooterBranding, null, /*#__PURE__*/_react.default.createElement(_Footer.SocialIconWrapper, null, /*#__PURE__*/_react.default.createElement(_SocialIcons.default, {
    campaign: campaignName
  })), /*#__PURE__*/_react.default.createElement(_Footer.Brand, {
    href: "/",
    title: "Go to ".concat(campaign, " homepage")
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    sizeSm: "48px",
    sizeMd: "72px",
    rotate: false,
    campaign: campaign
  }))), /*#__PURE__*/_react.default.createElement(_Nav.default, Object.assign({
    navItems: navItems
  }, rest)), /*#__PURE__*/_react.default.createElement(_Footer.FooterCopyright, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: "grey"
  }, footerCopy)))));
};
var _default = exports.default = Footer;