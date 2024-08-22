"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _CR_ErrorRed = _interopRequireDefault(require("../Input/assets/CR_Error--red.svg"));
const ErrorIcon = _styledComponents.default.span.withConfig({
  displayName: "ErrorText__ErrorIcon",
  componentId: "sc-19bj17r-0"
})(["display:inline-block;padding:", " ", " ", ";width:100%;z-index:1;margin-top:-10px;background-color:", ";border-radius:", ";font-weight:bold;:before{position:relative;content:'';top:1px;margin-right:3px;background:url(", ") left 0/100% no-repeat;width:18px;height:19px;display:inline-block;vertical-align:top;color:", ";}"], (0, _spacing.default)('m'), (0, _spacing.default)('md'), (0, _spacing.default)('md'), _ref => {
  let {
    theme
  } = _ref;
  return theme.color('error_pink');
}, (0, _spacing.default)('sm'), _CR_ErrorRed.default, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('red');
});
const ErrorText = _ref3 => {
  let {
    children,
    ...rest
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_Text.default, Object.assign({}, rest, {
    color: "red"
  }), /*#__PURE__*/_react.default.createElement(ErrorIcon, null, children));
};
var _default = exports.default = ErrorText;