"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const StyledButton = _styledComponents.default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1gm5vj0-0"
})(["display:inline-flex;position:relative;padding:0.5rem 1.25rem;text-decoration:none;font-weight:700;font-size:", ";border-radius:2rem;transition:all 0.3s;height:3.125rem;width:100%;justify-content:center;align-items:center;border:none;cursor:pointer;> a{text-decoration:none;}", ";@media ", "{width:auto;}@media ", "{width:auto;padding:", " ", ";margin:0 auto ", ";}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.fontSize('s');
}, _ref2 => {
  let {
    color,
    theme
  } = _ref2;
  return color ? theme.buttonColors(color) : theme.buttonColors('red');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('md'), (0, _spacing.default)('l'), (0, _spacing.default)('l'));
const Button = /*#__PURE__*/_react.default.forwardRef((_ref5, ref) => {
  let {
    children,
    wrapper = false,
    ...rest
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(StyledButton, Object.assign({}, rest, {
    as: wrapper ? 'span' : 'button',
    ref: ref
  }), children);
});
Button.propTypes = {
  children: _propTypes.default.node.isRequired,
  wrapper: _propTypes.default.bool // Buttons as span
};
var _default = exports.default = Button;