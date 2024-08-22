"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProgressRing = _interopRequireDefault(require("./_ProgressRing"));
var _PromoVideoButton = require("./_PromoVideoButton.style");
const PromoVideoButton = _ref => {
  let {
    togglePlay,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_PromoVideoButton.PlayButtonWrapper, {
    className: "weewee"
  }, /*#__PURE__*/_react.default.createElement(_PromoVideoButton.PlayButton, Object.assign({
    onClick: () => {
      togglePlay();
    }
  }, rest), /*#__PURE__*/_react.default.createElement(_PromoVideoButton.Icon, rest), /*#__PURE__*/_react.default.createElement(_ProgressRing.default, rest)));
};
var _default = exports.default = PromoVideoButton;