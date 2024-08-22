"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../Text/Text"));
/**
 * Input radio component
 */
const StyledRadioInput = _styledComponents.default.input.withConfig({
  displayName: "RadioButton__StyledRadioInput",
  componentId: "sc-2c24wq-0"
})(["background-color:", ";font-size:", ";z-index:1;top:0;margin:5px 10px;width:30px;height:30px;opacity:0;left:0;right:0;flex-shrink:0;+ span{left:2px;border-radius:30px;background-clip:padding-box;position:absolute;top:0px;width:30px;height:30px;border:1px solid ", ";}:checked + span{background-color:", ";border:1px solid ", ";:before{position:absolute;content:'';top:8px;left:0;right:0;background-color:", ";border-radius:30px;width:12px;height:12px;z-index:1;margin:0 auto;opacity:1;}}"], _ref => {
  let {
    color,
    theme
  } = _ref;
  return color ? theme.color(color) : theme.color('white');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontSize('sm');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('grey_for_forms');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('purple');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.color('purple');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.color('white');
});

/**
 * Label component
 */
const Label = _styledComponents.default.label.withConfig({
  displayName: "RadioButton__Label",
  componentId: "sc-2c24wq-1"
})(["display:flex;align-items:center;position:relative;"]);
const RadioButton = /*#__PURE__*/_react.default.forwardRef((_ref7, ref) => {
  let {
    label,
    name,
    value,
    ...rest
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: value
  }, /*#__PURE__*/_react.default.createElement(StyledRadioInput, Object.assign({
    type: "radio"
  }, rest, {
    name: name,
    value: value,
    id: value,
    ref: ref
  })), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement(_Text.default, {
    weight: "bold"
  }, label));
});
RadioButton.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};
var _default = exports.default = RadioButton;