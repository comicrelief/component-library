"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Item = _interopRequireDefault(require("./Item.style"));
const Item = _ref => {
  let {
    children,
    target,
    ...restProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Item.default, Object.assign({
    target: "_".concat(target)
  }, restProps), children);
};
var _default = exports.default = Item;