"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactCurrencyFormat = _interopRequireDefault(require("react-currency-format"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Container = _styledComponents.default.section.withConfig({
  displayName: "InfoBanner__Container",
  componentId: "sc-1fa63jn-0"
})(["display:flex;flex-wrap:wrap;flex-direction:column;position:relative;@media ", "{flex-direction:row;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
});
const Info = _styledComponents.default.div.withConfig({
  displayName: "InfoBanner__Info",
  componentId: "sc-1fa63jn-1"
})(["display:flex;align-items:start;width:100%;margin-bottom:", ";flex-direction:column;@media ", "{width:calc(100% / 3);}"], (0, _spacing.default)('l'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});

/**
 * Info Banner for landing pages.
 */

const InfoBanner = _ref3 => {
  let {
    title,
    theme,
    themeLink,
    startDate,
    endDate,
    country,
    amount
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "Project Name"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, title)), /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "End Date"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, endDate)), /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "Funding theme"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: themeLink,
    target: "self",
    type: "standard"
  }, theme))), /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "Amount Awarded"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, /*#__PURE__*/_react.default.createElement(_reactCurrencyFormat.default, {
    value: amount,
    displayType: "text",
    thousandSeparator: true,
    prefix: "\xA3",
    renderText: value => value
  }))), /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "Start Date"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, startDate)), /*#__PURE__*/_react.default.createElement(Info, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "md",
    uppercase: true
  }, "Beneficiary Country"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    size: "sm"
  }, country)));
};
var _default = exports.default = InfoBanner;