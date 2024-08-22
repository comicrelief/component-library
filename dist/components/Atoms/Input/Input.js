"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Label = _interopRequireDefault(require("../Label/Label"));
var _ErrorText = _interopRequireDefault(require("../ErrorText/ErrorText"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
// This seems to get a decent approximation of the necessary width (without resorting to measuring
//  the element with JS)
const getPrefixWidth = prefixLength => "calc(".concat((0, _spacing.default)('m'), " + (").concat(prefixLength, " * ").concat((0, _spacing.default)('sm'), "))");
const InputField = _styledComponents.default.input.withConfig({
  displayName: "Input__InputField",
  componentId: "sc-bcqy1o-0"
})(["", ""], _ref => {
  let {
    theme,
    error,
    prefixLength
  } = _ref;
  return (0, _styledComponents.css)(["position:relative;box-sizing:border-box;width:100%;height:48px;padding:", " ", ";", " background-color:", ";border:1px solid;border-color:", ";box-shadow:none;appearance:none;color:", ";border-radius:", ";font-size:inherit;z-index:2;font-family:", ";:focus{border:1px solid ", ";}@media ", "{max-width:290px;}"], (0, _spacing.default)('md'), (0, _spacing.default)('m'), prefixLength > 0 ? "padding-left: ".concat(getPrefixWidth(prefixLength), ";") : '', theme.color('grey_light'), error ? theme.color('red') : theme.color('grey_medium'), theme.color('black'), (0, _spacing.default)('sm'), theme.fontFamilies(theme.font.regular), theme.color('grey_for_forms'), theme.allBreakpoints('M'));
});
const InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-bcqy1o-1"
})(["position:relative;font-size:", ";"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontSize('m');
});
const Prefix = _styledComponents.default.div.withConfig({
  displayName: "Input__Prefix",
  componentId: "sc-bcqy1o-2"
})(["position:absolute;left:0;top:0;", " display:flex;height:100%;width:", ";justify-content:center;align-items:center;color:", ";font-weight:700;font-size:inherit;margin-left:2px;"], (0, _zIndex.default)('high'), _ref3 => {
  let {
    length
  } = _ref3;
  return getPrefixWidth(length);
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('grey_dark');
});
const Input = /*#__PURE__*/_react.default.forwardRef((_ref5, ref) => {
  let {
    errorMsg = '',
    id,
    label,
    showLabel = true,
    type,
    hasAria = true,
    className = '',
    placeholder = '',
    labelProps = {},
    prefix = '',
    optional = null,
    ...rest
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(_Label.default, Object.assign({
    className: className,
    htmlFor: id,
    label: label,
    hideLabel: !showLabel,
    errorMsg: errorMsg,
    optional: optional
  }, labelProps), /*#__PURE__*/_react.default.createElement(InputWrapper, null, prefix && /*#__PURE__*/_react.default.createElement(Prefix, {
    length: prefix.length
  }, prefix), /*#__PURE__*/_react.default.createElement(InputField, Object.assign({
    id: id,
    type: type,
    placeholder: placeholder,
    error: !!errorMsg,
    "aria-describedby": hasAria ? id : undefined,
    ref: ref,
    prefixLength: prefix.length,
    required: optional === false
  }, rest))), errorMsg && /*#__PURE__*/_react.default.createElement(_ErrorText.default, {
    size: "sm",
    weight: "bold",
    "data-test": "error-message"
  }, errorMsg));
});
Input.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  placeholder: _propTypes.default.string,
  errorMsg: _propTypes.default.string,
  // This prop allows us to _visually_ hide the label if we want (even if we
  //  don't want to display a label, it should be present for screen readers).
  // todo: convert this to 'hideLabel' to make it consistent with other components
  showLabel: _propTypes.default.bool,
  hasAria: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  /** text, email, number, date, search, tel, url, password */
  type: _propTypes.default.string.isRequired,
  labelProps: _propTypes.default.objectOf(_propTypes.default.string),
  // className is needed so that styled(`Input`) will work
  // (as `rest` is not spread on the outermost component)
  className: _propTypes.default.string,
  prefix: _propTypes.default.string,
  optional: _propTypes.default.bool
};
var _default = exports.default = Input;