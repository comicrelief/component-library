"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Form = _interopRequireDefault(require("./Form/Form"));
var _Membership = require("./Membership.style");
const Membership = _ref => {
  let {
    alt = '',
    data = {},
    formAligntRight = true,
    imageLow = null,
    image = null,
    images = null,
    backgroundColor = null,
    mbshipID = null,
    cartID,
    donateLink,
    title,
    subtitle,
    otherDescription
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Membership.Container, {
    formAligntRight: formAligntRight,
    backgroundColor: backgroundColor,
    id: mbshipID
  }, /*#__PURE__*/_react.default.createElement(_Membership.BgImage, {
    backgroundColor: backgroundColor,
    image: image,
    images: images,
    imageLow: imageLow,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    alt: alt
  }), /*#__PURE__*/_react.default.createElement(_Membership.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Membership.Header, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h2",
    size: "l",
    weight: "800"
  }, title), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p"
  }, subtitle)), /*#__PURE__*/_react.default.createElement(_Form.default, {
    data: data,
    otherDescription: otherDescription,
    cartID: cartID,
    mbshipID: mbshipID,
    donateLink: donateLink
  })));
};
var _default = exports.default = Membership;