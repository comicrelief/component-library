"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DoubleCopy = require("./DoubleCopy.style");
const DoubleCopy = _ref => {
  let {
    leftCopy,
    rightCopy
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_DoubleCopy.Section, null, /*#__PURE__*/_react.default.createElement(_DoubleCopy.CopyWrapper, null, leftCopy), /*#__PURE__*/_react.default.createElement(_DoubleCopy.CopyWrapper, null, rightCopy));
};
var _default = exports.default = DoubleCopy;