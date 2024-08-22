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
var _tick = _interopRequireDefault(require("./assets/tick.svg"));
const StyledCheckboxInput = _styledComponents.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Checkbox__StyledCheckboxInput",
  componentId: "sc-ngak0-0"
})(["font-size:", ";display:block;box-sizing:border-box;opacity:0;position:absolute;left:0px;width:24px;height:24px;margin:0;border:1px solid ", ";+ span{margin-right:12px;width:24px;height:24px;border-radius:4px;background-color:", ";border:1px solid ", ";float:left;flex-shrink:0;}:checked + span{background:url(", ") no-repeat center;background-color:", ";border-color:", ";background-size:contain;}:focus + span{border-color:", ";border-width:1px;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.fontSize('sm');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('grey');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('white');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('grey');
}, _tick.default, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.color('red');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.color('red');
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color('red');
});
const Label = _styledComponents.default.label.withConfig({
  displayName: "Checkbox__Label",
  componentId: "sc-ngak0-1"
})(["display:flex;", " margin-bottom:8px;"], _ref8 => {
  let {
    hasLabelAsString
  } = _ref8;
  return hasLabelAsString && 'align-items: center;';
});
const Checkbox = /*#__PURE__*/_react.default.forwardRef((_ref9, ref) => {
  let {
    label = undefined,
    value,
    children = undefined,
    ...rest
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement(Label, {
    hasLabelAsString: !!label
  }, /*#__PURE__*/_react.default.createElement(StyledCheckboxInput, Object.assign({}, rest, {
    value: value,
    ref: ref
  })), /*#__PURE__*/_react.default.createElement("span", null), label ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    weight: "bold"
  }, label) : children);
});
Checkbox.propTypes = {
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = exports.default = Checkbox;