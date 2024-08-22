"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Chip = require("./Chip.style");
const Chip = _ref => {
  let {
    category,
    handleToggle,
    color = 'purple',
    checked = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Chip.CheckLabel, null, /*#__PURE__*/_react.default.createElement(_Chip.CheckInput, {
    onChange: handleToggle,
    type: "checkbox",
    value: category,
    color: color,
    checked: checked
  }), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement(_Chip.Overlay, null), category);
};
var _default = exports.default = Chip;