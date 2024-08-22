"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRangerSlider = exports.SliderWrapper = exports.SliderLabel = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRangeSliderInput = _interopRequireDefault(require("react-range-slider-input"));
const thumbSize = 30;
const outlineSize = thumbSize / 2.5;
const sizeMultiplier = 1.4;
const StyledRangerSlider = exports.StyledRangerSlider = (0, _styledComponents.default)(_reactRangeSliderInput.default).withConfig({
  displayName: "Sliderstyle__StyledRangerSlider",
  componentId: "sc-pyds3x-0"
})(["background:white;height:16px;border-radius:16px;border:1px solid ", ";.range-slider__range{height:14px;border-radius:10px;background-color:", ";z-index:2;}.range-slider__thumb[data-upper]{&:after{background-color:white;width:", "px;height:", "px;content:\"\";position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:50%;border:", "px solid ", ";transition-property:width,height,border-width;transition-duration:0.15s;}&:hover{&:after{width:", "px;height:", "px;border-width:", "px;}}}.range-slider__thumb[data-lower]{width:0;}"], props => props.theme.color('black'), props => props.theme.color('red'), thumbSize, thumbSize, outlineSize, props => props.theme.color('red'), thumbSize * sizeMultiplier, thumbSize * sizeMultiplier, outlineSize);
const SliderWrapper = exports.SliderWrapper = _styledComponents.default.div.withConfig({
  displayName: "Sliderstyle__SliderWrapper",
  componentId: "sc-pyds3x-1"
})(["width:100%;margin-top:25px;"]);
const SliderLabel = exports.SliderLabel = _styledComponents.default.label.withConfig({
  displayName: "Sliderstyle__SliderLabel",
  componentId: "sc-pyds3x-2"
})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;"]);