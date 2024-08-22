"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TriggerConfetti;
var _react = _interopRequireWildcard(require("react"));
var _Confetti = _interopRequireDefault(require("./Confetti"));
function TriggerConfetti() {
  const [isConfetti, setIsConfetti] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Confetti.default, {
    trigger: isConfetti
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: () => setIsConfetti(!isConfetti)
  }, "trigger confetti"));
}