"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hideVisually = _interopRequireDefault(require("../../../../theme/shared/hideVisually"));
const StyledLink = _styledComponents.default.a.withConfig({
  displayName: "Icon__StyledLink",
  componentId: "sc-no6fx6-0"
})(["text-decoration:none;cursor:pointer;display:block;transition:opacity 0.2s;&:hover,&:focus{opacity:0.6;}"]);
const StyledImage = _styledComponents.default.img.withConfig({
  displayName: "Icon__StyledImage",
  componentId: "sc-no6fx6-1"
})(["width:100%;"]);
const HelperText = _styledComponents.default.span.withConfig({
  displayName: "Icon__HelperText",
  componentId: "sc-no6fx6-2"
})(["", ";"], _hideVisually.default);
const Icon = _ref => {
  let {
    href,
    target,
    icon,
    brand,
    title,
    ...restProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledLink, Object.assign({
    href: href,
    target: "_".concat(target)
  }, restProps, {
    title: title,
    rel: "noopener noreferrer",
    "data-test": "header-esu-icon"
  }), /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: icon,
    alt: brand
  }), title !== 'Sign up for emails' && /*#__PURE__*/_react.default.createElement(HelperText, null, "(opens in new window)"));
};
var _default = exports.default = Icon;