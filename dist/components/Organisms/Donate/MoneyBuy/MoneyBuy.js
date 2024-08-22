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
var _spacing = _interopRequireDefault(require("../../../../theme/shared/spacing"));
const MoneyBuyButton = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "MoneyBuy__MoneyBuyButton",
  componentId: "sc-38g5hn-0"
})(["display:block;input{border:none;background-color:", ";color:", ";font-size:", ";font-family:", ";font-weight:normal;border-radius:10px;padding:", ";box-shadow:0px 0px 16px rgba(0,0,0,0.15);height:auto;@media ", "{font-size:", ";padding:", ";}&:focus{border:none;outline:none;box-shadow:inset 0 0 0 4px ", ";}&:active:focus{box-shadow:0px 0px 16px rgba(0,0,0,0.3);}", "}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('blue_light');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('black');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.fontSize('l');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.fontFamilies('Anton');
}, (0, _spacing.default)('s'), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('M');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.fontSize('xl');
}, (0, _spacing.default)('m'), _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color('blue_donate');
}, _ref8 => {
  let {
    isSelected
  } = _ref8;
  return isSelected && (0, _styledComponents.css)(["background-color:", ";box-shadow:0px 0px 16px rgba(0,0,0,0.3);color:", ";&:focus{box-shadow:0px 0px 16px rgba(0,0,0,0.3);}"], _ref9 => {
    let {
      theme
    } = _ref9;
    return theme.color('blue_donate');
  }, _ref10 => {
    let {
      theme
    } = _ref10;
    return theme.color('white');
  });
});
const MoneyBuy = _ref11 => {
  let {
    setOtherAmount,
    amount = '10',
    currency = '£',
    description = 'description',
    ...rest
  } = _ref11;
  return /*#__PURE__*/_react.default.createElement(MoneyBuyButton, Object.assign({}, rest, {
    "aria-label": description,
    value: "".concat(currency, " ").concat(amount),
    type: "button",
    label: "",
    errorMsg: "",
    onClick: setOtherAmount
  }));
};
var _default = exports.default = MoneyBuy;