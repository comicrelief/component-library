"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.TitleWrapperOuter = exports.TitleWrapperInner = exports.PopUp = exports.OuterFieldset = exports.MoneyBuys = exports.Legend = exports.Label = exports.FormWrapper = exports.FormFieldset = exports.Form = exports.Error = exports.Copy = exports.Container = exports.Button = exports.BgImage = exports.AmountField = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Input = _interopRequireDefault(require("../../Atoms/Input/Input"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _utils = _interopRequireDefault(require("../../../utils/_utils"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__Container",
  componentId: "sc-8rjm3t-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;height:auto;background-color:", ";@media ", "{flex-direction:row;align-items:center;justify-content:inherit;background-color:", ";}"], _ref => {
  let {
    theme,
    mobileBackgroundColor
  } = _ref;
  return theme.color(mobileBackgroundColor);
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('L');
}, _ref3 => {
  let {
    theme,
    desktopOverlayColor
  } = _ref3;
  return theme.color(desktopOverlayColor);
});
const PopUp = exports.PopUp = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__PopUp",
  componentId: "sc-8rjm3t-1"
})(["background:green;height:100px;"]);
const BgImage = exports.BgImage = (0, _styledComponents.default)(_Picture.default).withConfig({
  displayName: "Donatestyle__BgImage",
  componentId: "sc-8rjm3t-2"
})(["display:block;position:absolute;bottom:0;left:0;right:0;height:100%;", ""], _ref4 => {
  let {
    backgroundColor
  } = _ref4;
  return backgroundColor !== 'transparent' && "\n    opacity: 0.4;\n  ";
});
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__Wrapper",
  componentId: "sc-8rjm3t-3"
})(["position:relative;text-align:center;padding:", " ", ";flex-direction:row;align-items:center;display:block;width:100%;flex-direction:", ";", ";@media ", "{padding:", " ", ";}@media ", "{display:flex;padding:", " 0;", ";}"], (0, _spacing.default)('l'), (0, _spacing.default)('md'), _ref5 => {
  let {
    formAlignRight
  } = _ref5;
  return formAlignRight === true ? 'row-reverse' : 'row';
}, _ref6 => {
  let {
    noTitlesAtAll
  } = _ref6;
  return noTitlesAtAll === true && (0, _styledComponents.css)(["justify-content:center;"]);
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('xl'), (0, _spacing.default)('md'), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('xl'), _ref9 => {
  let {
    paddingOption
  } = _ref9;
  return (0, _utils.default)(paddingOption);
});
const TitleWrapperOuter = exports.TitleWrapperOuter = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__TitleWrapperOuter",
  componentId: "sc-8rjm3t-4"
})(["width:100%;display:flex;font-family:", ";@media ", "{width:50%;padding:", ";align-items:center;}"], _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.fontFamilies(theme.font.regular);
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('L');
}, (0, _spacing.default)('xl'));
const TitleWrapperInner = exports.TitleWrapperInner = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__TitleWrapperInner",
  componentId: "sc-8rjm3t-5"
})(["position:relative;text-align:left;"]);
const FormWrapper = exports.FormWrapper = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__FormWrapper",
  componentId: "sc-8rjm3t-6"
})(["position:relative;font-family:", ";@media ", "{width:50%;}"], _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.fontFamilies(theme.font.regular);
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('L');
});
const Error = exports.Error = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Donatestyle__Error",
  componentId: "sc-8rjm3t-7"
})(["color:", ";font-size:", ";font-weight:500;margin-top:", ";"], _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.color('red');
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.fontSize('s');
}, (0, _spacing.default)('l'));
const Form = exports.Form = _styledComponents.default.form.withConfig({
  displayName: "Donatestyle__Form",
  componentId: "sc-8rjm3t-8"
})(["position:relative;width:100%;background-color:", ";box-shadow:0px 0px 16px rgba(0,0,0,0.15);border-radius:10px;margin-top:", ";h3{margin-top:", ";}input{max-width:100%;margin:0;}input[type='submit']{margin:", " 0;}@media ", "{width:450px;margin-right:auto;margin-left:auto;}"], _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.color('white');
}, (0, _spacing.default)('md'), (0, _spacing.default)('md'), (0, _spacing.default)('l'), _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.allBreakpoints('M');
});
const OuterFieldset = exports.OuterFieldset = _styledComponents.default.fieldset.withConfig({
  displayName: "Donatestyle__OuterFieldset",
  componentId: "sc-8rjm3t-9"
})(["padding:0 ", " ", ";margin:0;border:none;@media ", "{padding:0 ", " ", ";}input[type='submit']{margin-bottom:0;}"], (0, _spacing.default)('md'), (0, _spacing.default)('md'), _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('l'), (0, _spacing.default)('l'));
const Legend = exports.Legend = _styledComponents.default.legend.withConfig({
  displayName: "Donatestyle__Legend",
  componentId: "sc-8rjm3t-10"
})(["margin:0;padding:", " ", ";display:block;width:100%;"], (0, _spacing.default)('l'), (0, _spacing.default)('sm'));
const MoneyBuys = exports.MoneyBuys = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__MoneyBuys",
  componentId: "sc-8rjm3t-11"
})(["display:flex;justify-content:space-between;flex-direction:column;margin-bottom:", ";@media ", "{flex-direction:row;}label{flex:0 0 30%;margin-bottom:", ";@media ", "{margin-bottom:0;}input{cursor:pointer;padding:", "  ", ";}}"], (0, _spacing.default)('l'), _ref19 => {
  let {
    theme
  } = _ref19;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('sm'), _ref20 => {
  let {
    theme
  } = _ref20;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('m'), (0, _spacing.default)('sm'));
const FormFieldset = exports.FormFieldset = _styledComponents.default.div.withConfig({
  displayName: "Donatestyle__FormFieldset",
  componentId: "sc-8rjm3t-12"
})(["display:flex;align-items:center;justify-content:center;"]);
const Label = exports.Label = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Donatestyle__Label",
  componentId: "sc-8rjm3t-13"
})(["margin-right:", ";"], (0, _spacing.default)('sm'));
const AmountField = exports.AmountField = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "Donatestyle__AmountField",
  componentId: "sc-8rjm3t-14"
})(["position:relative;flex-basis:50%;flex-shrink:0;flex-grow:0;font-weight:400;display:block;@media ", "{flex-basis:60%;}span{position:absolute;font-size:20px;top:50%;transform:translateY(-50%);left:0px;font-weight:500;padding:0px 15px;", ";}input{height:48px;border:2px solid ", ";background:", ";border-radius:10px;padding:", " ", " ", " ", ";&:focus{outline:none;border:2px solid ", ";}}"], _ref21 => {
  let {
    theme
  } = _ref21;
  return theme.allBreakpoints('M');
}, (0, _zIndex.default)('high'), _ref22 => {
  let {
    theme
  } = _ref22;
  return theme.color('grey');
}, _ref23 => {
  let {
    theme
  } = _ref23;
  return theme.color('grey_light');
}, (0, _spacing.default)('sm'), (0, _spacing.default)('md'), (0, _spacing.default)('sm'), (0, _spacing.default)('l'), _ref24 => {
  let {
    theme
  } = _ref24;
  return theme.color('grey');
});
const Copy = exports.Copy = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Donatestyle__Copy",
  componentId: "sc-8rjm3t-15"
})(["line-height:1.5;margin-top:", ";"], (0, _spacing.default)('l'));
const Button = exports.Button = _styledComponents.default.button.withConfig({
  displayName: "Donatestyle__Button",
  componentId: "sc-8rjm3t-16"
})(["width:100%;margin:", " 0 ", ";color:", ";font-size:", ";font-weight:bold;cursor:pointer;min-height:48px;background:", ";text-decoration:none;border-radius:2rem;border:none;box-shadow:0px 0px 16px rgba(0,0,0,0.15);appearance:none;:active,:focus,:hover{outline:none;background-color:", ";}@media ", "{padding:", " ", ";}"], (0, _spacing.default)('l'), (0, _spacing.default)('l'), _ref25 => {
  let {
    theme
  } = _ref25;
  return theme.color('white');
}, _ref26 => {
  let {
    theme
  } = _ref26;
  return theme.fontSize('s');
}, _ref27 => {
  let {
    theme,
    color
  } = _ref27;
  return theme.color(color);
}, _ref28 => {
  let {
    theme
  } = _ref28;
  return theme.color('coral_dark');
}, _ref29 => {
  let {
    theme
  } = _ref29;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('md'), (0, _spacing.default)('l'));