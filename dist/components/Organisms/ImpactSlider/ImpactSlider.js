"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Slider = _interopRequireDefault(require("./_Slider"));
var _ImpactMoneybuys = _interopRequireDefault(require("./_ImpactMoneybuys"));
var _utils = _interopRequireDefault(require("./_utils"));
var _ImpactSlider = require("./ImpactSlider.style");
const ImpactSlider = _ref => {
  let {
    heading,
    cartID,
    donateLink,
    rowID,
    items,
    step,
    max,
    backgroundColour = 'grey_extra_light',
    opacityAnimation = false,
    children,
    defaultSliderValue = null
  } = _ref;
  // Use the lowest possible amount as our default:
  const [currentAmount, setCurrentAmount] = (0, _react.useState)(defaultSliderValue || step);
  const handleChange = thisValue => {
    if (thisValue) {
      // Return the value of the 'thumb' we care about:
      setCurrentAmount(thisValue[1]);
    }
  };
  const handleSubmit = () => {
    (0, _utils.default)(currentAmount, donateLink, cartID, rowID);
  };
  return /*#__PURE__*/_react.default.createElement(_ImpactSlider.OuterWrapper, {
    backgroundColour: backgroundColour,
    id: rowID
  }, /*#__PURE__*/_react.default.createElement(_ImpactSlider.InnerWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h1",
    family: "Anton",
    uppercase: true,
    weight: "normal",
    size: "xl"
  }, heading), /*#__PURE__*/_react.default.createElement(_ImpactSlider.Copy, null, children), /*#__PURE__*/_react.default.createElement(_ImpactSlider.CurrentAmountCopy, {
    tag: "p",
    size: "s"
  }, "A donation of", ' ', "\xA3", currentAmount, ' ', "could help pay for:"), /*#__PURE__*/_react.default.createElement(_Slider.default, {
    currentAmount: currentAmount,
    min: step,
    max: max,
    handleChange: handleChange,
    steps: step
  }), /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.default, {
    items: items,
    currentAmount: currentAmount,
    opacityAnimation: opacityAnimation
  }), /*#__PURE__*/_react.default.createElement(_ImpactSlider.SubmitButton, {
    type: "submit",
    onClick: handleSubmit,
    disabled: currentAmount === 0
  }, "Donate \xA3", currentAmount, ' ', "now")));
};
var _default = exports.default = ImpactSlider;