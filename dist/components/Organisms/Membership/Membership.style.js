"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.OuterFieldset = exports.MoneyBuys = exports.Legend = exports.Label = exports.Header = exports.FormWrapper = exports.FormFieldset = exports.Form = exports.Error = exports.Copy = exports.Container = exports.Button = exports.BgImage = exports.AmountField = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Input = _interopRequireDefault(require("../../Atoms/Input/Input"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__Container",
  componentId: "sc-13acbel-0"
})(["background-color:", ";position:relative;display:flex;justify-content:center;min-height:100vh;@media ", "{align-items:center;justify-content:inherit;min-height:750px;height:100vh;max-height:900px;flex-direction:", ";}"], _ref => {
  let {
    theme,
    backgroundColor
  } = _ref;
  return theme.color(backgroundColor);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
}, _ref3 => {
  let {
    formAligntRight
  } = _ref3;
  return formAligntRight ? 'row-reverse' : 'row';
});
const BgImage = exports.BgImage = (0, _styledComponents.default)(_Picture.default).withConfig({
  displayName: "Membershipstyle__BgImage",
  componentId: "sc-13acbel-1"
})(["position:absolute;bottom:0;left:0;right:0;height:auto;:before{color:", ";content:'';position:absolute;width:100%;height:100%;box-shadow:inset 0px ", " ", " -", ";}@media ", "{height:100%;:before{content:none;}}"], _ref4 => {
  let {
    theme,
    backgroundColor
  } = _ref4;
  return theme.color(backgroundColor);
}, (0, _spacing.default)('xl'), (0, _spacing.default)('l'), (0, _spacing.default)('l'), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
});
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__Wrapper",
  componentId: "sc-13acbel-2"
})(["position:relative;max-width:320px;text-align:center;margin-bottom:50%;@media ", "{margin:0 ", ";max-width:420px;}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('xxl'));
const Header = exports.Header = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__Header",
  componentId: "sc-13acbel-3"
})(["padding:", " ", " 0;margin-bottom:", ";"], (0, _spacing.default)('l'), (0, _spacing.default)('md'), (0, _spacing.default)('l'));
const FormWrapper = exports.FormWrapper = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__FormWrapper",
  componentId: "sc-13acbel-4"
})(["background-color:", ";box-shadow:0px ", " ", " rgba(0,0,0,0.3);height:450px;@media ", "{height:430px;}"], _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color('white');
}, (0, _spacing.default)('md'), (0, _spacing.default)('xl'), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('L');
});
const Error = exports.Error = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Membershipstyle__Error",
  componentId: "sc-13acbel-5"
})(["color:", ";font-size:", ";font-weight:500;"], _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.color('red');
}, (0, _spacing.default)('md'));
const Form = exports.Form = _styledComponents.default.form.withConfig({
  displayName: "Membershipstyle__Form",
  componentId: "sc-13acbel-6"
})(["padding:", ";h3{margin-top:", ";}input{max-width:100%;margin:0;}"], (0, _spacing.default)('md'), (0, _spacing.default)('md'));
const OuterFieldset = exports.OuterFieldset = _styledComponents.default.fieldset.withConfig({
  displayName: "Membershipstyle__OuterFieldset",
  componentId: "sc-13acbel-7"
})(["padding:0;margin:0;border:none;> :not(:last-child):not(legend){margin-bottom:", ";}"], (0, _spacing.default)('l'));
const Legend = exports.Legend = _styledComponents.default.legend.withConfig({
  displayName: "Membershipstyle__Legend",
  componentId: "sc-13acbel-8"
})(["margin:0;padding:0;"]);
const MoneyBuys = exports.MoneyBuys = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__MoneyBuys",
  componentId: "sc-13acbel-9"
})(["display:flex;justify-content:space-between;label{flex:0 0 30%;input{cursor:pointer;padding:", ";}:hover input{border-color:", ";}}"], (0, _spacing.default)('md'), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.color('red');
});
const FormFieldset = exports.FormFieldset = _styledComponents.default.div.withConfig({
  displayName: "Membershipstyle__FormFieldset",
  componentId: "sc-13acbel-10"
})(["display:flex;align-items:center;"]);
const Label = exports.Label = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Membershipstyle__Label",
  componentId: "sc-13acbel-11"
})(["margin-right:auto;"]);
const AmountField = exports.AmountField = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "Membershipstyle__AmountField",
  componentId: "sc-13acbel-12"
})(["position:relative;flex:0 0 50%;font-weight:400;display:block;@media ", "{flex:0 0 60%;}span{position:absolute;padding:0px 15px;font-size:20px;top:50%;transform:translateY(-50%);left:0px;font-weight:500;}input{border:2px solid ", ";background:transparent;padding:", " ", " ", " ", ";", " :focus{border:2px solid ", ";}}"], _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('L');
}, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.color('grey_medium');
}, (0, _spacing.default)('sm'), (0, _spacing.default)('md'), (0, _spacing.default)('sm'), (0, _spacing.default)('l'), _ref13 => {
  let {
    inputBorderColor,
    theme
  } = _ref13;
  return inputBorderColor && "border: 2px solid ".concat(theme.color('red'), ";");
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.color('red');
});
const Copy = exports.Copy = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Membershipstyle__Copy",
  componentId: "sc-13acbel-13"
})(["line-height:1.5;"]);
const Button = exports.Button = _styledComponents.default.button.withConfig({
  displayName: "Membershipstyle__Button",
  componentId: "sc-13acbel-14"
})(["width:100%;color:", ";font-size:", ";font-weight:bold;cursor:pointer;padding:", " ", ";background:", ";border:none;border-radius:100px;:active,:focus,:hover{background-color:", ";}@media ", "{width:auto;padding:", " ", ";margin:0 auto ", ";}"], _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.color('white');
}, _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.fontSize('s');
}, (0, _spacing.default)('md'), (0, _spacing.default)('sm'), _ref17 => {
  let {
    theme,
    color
  } = _ref17;
  return color ? theme.color(color) : theme.color('red');
}, _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.color('coral_dark');
}, _ref19 => {
  let {
    theme
  } = _ref19;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('md'), (0, _spacing.default)('l'), (0, _spacing.default)('l'));