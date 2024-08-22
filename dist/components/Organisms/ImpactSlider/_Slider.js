"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("react-range-slider-input/dist/style.css");
var _Slider = require("./Slider.style");
const Slider = _ref => {
  let {
    min,
    max,
    currentAmount,
    handleChange,
    steps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Slider.SliderWrapper, null, /*#__PURE__*/_react.default.createElement(_Slider.SliderLabel, {
    htmlFor: "ImpactSlider"
  }, "Slider label to be hidden"), /*#__PURE__*/_react.default.createElement(_Slider.StyledRangerSlider, {
    id: "ImpactSlider",
    name: "ImpactSlider",
    min: min,
    max: max,
    width: "100%",
    value: [0, currentAmount],
    onInput: handleChange,
    step: steps,
    thumbsDisabled: [true, false],
    rangeSlideDisabled: true
  }));
};
var _default = exports.default = Slider;