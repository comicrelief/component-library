"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Input = _interopRequireDefault(require("../../../Atoms/Input/Input"));
const MoneyBox = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "MoneyBox",
  componentId: "sc-18hf1f8-0"
})(["display:block;input{border:2px solid ", ";font-size:", ";font-weight:800;letter-spacing:-2px;height:auto;", "}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('grey_medium');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontSize('l');
}, _ref3 => {
  let {
    boxBorderColor,
    isInputMatchBox,
    isSelected
  } = _ref3;
  return (boxBorderColor === isInputMatchBox || isSelected) && (0, _styledComponents.css)(["border-color:", ";background-color:", ";color:", ";"], _ref4 => {
    let {
      theme
    } = _ref4;
    return theme.color('red');
  }, _ref5 => {
    let {
      theme
    } = _ref5;
    return theme.color('red');
  }, _ref6 => {
    let {
      theme
    } = _ref6;
    return theme.color('white');
  });
});
const MoneyBuy = _ref7 => {
  let {
    setOtherAmount,
    amount = '10',
    currency = '£',
    description = 'description',
    ...rest
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement(MoneyBox, Object.assign({}, rest, {
    "aria-label": description,
    value: "".concat(currency, " ").concat(amount),
    type: "button",
    label: "",
    errorMsg: "",
    onClick: setOtherAmount
  }));
};
var _default = exports.default = MoneyBuy;