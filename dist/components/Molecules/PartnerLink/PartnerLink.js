"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PartnerLink = require("./PartnerLink.style");
const PartnerLink = _ref => {
  let {
    children,
    link,
    ...rest
  } = _ref;
  const childrenWithProps = _react.default.Children.map(children, child => /*#__PURE__*/_react.default.cloneElement(child, {
    ...rest
  }));
  return /*#__PURE__*/_react.default.createElement(_PartnerLink.Item, {
    href: link,
    type: "standard"
  }, childrenWithProps, /*#__PURE__*/_react.default.createElement(_PartnerLink.MoreInfo, {
    color: "white",
    size: "xxs"
  }, "Find out more"));
};
var _default = exports.default = PartnerLink;