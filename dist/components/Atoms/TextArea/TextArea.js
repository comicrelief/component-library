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
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Label = _interopRequireDefault(require("../Label/Label"));
var _ErrorText = _interopRequireDefault(require("../ErrorText/ErrorText"));
const StyledTextArea = _styledComponents.default.textarea.withConfig({
  displayName: "TextArea__StyledTextArea",
  componentId: "sc-8tw0zq-0"
})(["", ""], _ref => {
  let {
    theme,
    error
  } = _ref;
  return (0, _styledComponents.css)(["box-sizing:border-box;width:100%;margin:0;padding:", " ", ";font-size:", ";background-color:", ";border:1px solid;border-radius:0.5rem;border-color:", ";box-shadow:none;appearance:none;color:", ";font-family:", ";resize:vertical;&:focus{border:1px solid ", ";&::placeholder{visibility:hidden;}}"], (0, _spacing.default)('md'), (0, _spacing.default)('m'), theme.fontSize('m'), theme.color('grey_light'), error ? theme.color('red') : theme.color('grey_medium'), theme.color('black'), theme.fontFamilies(theme.font.regular), theme.color('grey_for_forms'));
});
const TextArea = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    id,
    label,
    placeholder = '',
    hideLabel = false,
    errorMsg = undefined,
    rows = 4,
    className = '',
    ...rest
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_Label.default, {
    htmlFor: id,
    label: label,
    hideLabel: hideLabel,
    errorMsg: errorMsg,
    className: className
  }, /*#__PURE__*/_react.default.createElement(StyledTextArea, Object.assign({}, rest, {
    placeholder: placeholder,
    rows: rows,
    error: !!errorMsg,
    "aria-describedby": id,
    ref: ref
  })), errorMsg && /*#__PURE__*/_react.default.createElement(_ErrorText.default, {
    size: "sm",
    weight: "bold",
    "data-test": "error-message"
  }, errorMsg));
});
TextArea.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  rows: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  errorMsg: _propTypes.default.string,
  hideLabel: _propTypes.default.bool,
  // className is needed so that styled(`TextArea`) will work
  // (as `rest` is not spread on the outermost component)
  className: _propTypes.default.string
};
var _default = exports.default = TextArea;