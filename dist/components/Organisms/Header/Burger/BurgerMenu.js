"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _BurgerMenu = require("./BurgerMenu.style");
/* eslint-disable jsx-a11y/anchor-is-valid */

const BurgerMenu = _ref => {
  let {
    toggle,
    isExpandable
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_BurgerMenu.BurgerWrapper, {
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-label": "Open and close Navigation Menu",
    inline: true,
    underline: false,
    onClick: toggle,
    isExpandable: isExpandable
  }, /*#__PURE__*/_react.default.createElement(_BurgerMenu.BurgerHiddenText, null, "Open and close nav menu"), /*#__PURE__*/_react.default.createElement(_BurgerMenu.BurgerBar, null));
};
var _default = exports.default = BurgerMenu;