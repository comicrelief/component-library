"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ImpactMoneybuys = require("./ImpactMoneybuys.style");
const Moneybuys = _ref => {
  let {
    items,
    currentAmount,
    opacityAnimation
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.MoneybuyWrapper, null, items.map((item, index) => {
    const thisAmount = Math.floor(currentAmount / item.poundsPerItem);
    const isInactive = !(!opacityAnimation || currentAmount >= item.poundsPerItem);
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: item.poundsPerItem
    }, /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.Moneybuy, {
      isInactive: isInactive,
      "data-testid": "impact-slider--moneybuy-".concat(index + 1)
    }, /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.MoneybuyImage, {
      imageURL: item.imageURL
    }), /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.MoneybuyAmount, {
      tag: "p",
      family: "Anton",
      uppercase: true,
      weight: "normal",
      size: "xl",
      "data-testid": "moneybuy-amount"
    }, thisAmount), /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.MoneybuyDescription, {
      tag: "p",
      size: "sm",
      "data-testid": "moneybuy-description"
    }, item.description)), index < items.length - 1 && /*#__PURE__*/_react.default.createElement(_ImpactMoneybuys.OrLabel, {
      tag: "span"
    }, "Or"));
  }));
};
var _default = exports.default = Moneybuys;