"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Label = _interopRequireDefault(require("../Label/Label"));
var _ErrorText = _interopRequireDefault(require("../ErrorText/ErrorText"));
var _dropDownDarkPurple = _interopRequireDefault(require("./assets/drop-down-dark-purple.svg"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const StyledSelect = _styledComponents.default.select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "sc-1atp8e3-0"
})(["width:100%;font-size:", ";display:block;box-sizing:border-box;padding:0 ", ";padding-right:", ";margin:0;position:relative;height:48px;font-weight:400;font-family:", ";background:", " url(", ") calc(100% - 1.5rem) 14px/20px 1.5rem no-repeat;border:1px solid;border-color:", ";box-shadow:none;appearance:none;color:", ";border-radius:0.5rem;cursor:pointer;:focus{border:1px solid ", ";}@media ", "{max-width:290px;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.fontSize('m');
}, (0, _spacing.default)('m'), (0, _spacing.default)('xl'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontFamilies(theme.font.regular);
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('grey_light');
}, _dropDownDarkPurple.default, _ref4 => {
  let {
    theme,
    error
  } = _ref4;
  return error ? theme.color('red') : theme.color('grey_medium');
}, _ref5 => {
  let {
    theme,
    greyDescription,
    hasValue
  } = _ref5;
  return greyDescription && !hasValue ? 'grey' : theme.color('black');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.color('grey_for_forms');
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.allBreakpoints('M');
});
const Select = /*#__PURE__*/_react.default.forwardRef((_ref8, ref) => {
  let {
    errorMsg,
    description,
    label,
    options,
    hideLabel = false,
    defaultValue = '',
    onChange = null,
    greyDescription = false,
    className = '',
    optional = false,
    ...rest
  } = _ref8;
  const [value, setValue] = (0, _react.useState)('');
  return /*#__PURE__*/_react.default.createElement(_Label.default, {
    label: label,
    hideLabel: hideLabel,
    errorMsg: errorMsg,
    className: className,
    optional: optional
  }, /*#__PURE__*/_react.default.createElement(StyledSelect, Object.assign({
    onChange: e => {
      setValue(e.currentTarget.value);
      if (onChange) {
        onChange(e);
      }
    }
  }, rest, {
    error: errorMsg,
    defaultValue: defaultValue,
    required: optional === false,
    hasValue: !!value,
    greyDescription: greyDescription,
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    value: ""
  }, description), options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.value,
    value: option.value
  }, option.displayValue))), errorMsg && /*#__PURE__*/_react.default.createElement(_ErrorText.default, {
    size: "sm",
    weight: "bold",
    "data-test": "error-message"
  }, errorMsg));
});
var _default = exports.default = Select;