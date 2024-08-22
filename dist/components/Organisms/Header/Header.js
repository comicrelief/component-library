"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Logos = _interopRequireDefault(require("../../Molecules/Logos/Logos"));
var _Nav = _interopRequireDefault(require("./Nav/Nav"));
var _Header = require("./Header.style");
const Header = _ref => {
  let {
    navItems = {},
    metaIcons,
    campaign = 'Comic Relief',
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Header.HeaderWrapper, Object.assign({
    navItems: true
  }, rest), /*#__PURE__*/_react.default.createElement(_Header.InnerWrapper, null, /*#__PURE__*/_react.default.createElement(_Header.Brand, null, /*#__PURE__*/_react.default.createElement(_Logos.default, {
    campaign: campaign
  })), /*#__PURE__*/_react.default.createElement(_Nav.default, {
    navItems: navItems
  }), /*#__PURE__*/_react.default.createElement(_Header.MetaIcons, null, metaIcons)));
};
var _default = exports.default = Header;