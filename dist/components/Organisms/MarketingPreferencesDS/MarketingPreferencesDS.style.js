"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopCopyWrapper = exports.ShowHideInputWrapper = exports.OuterWrapper = exports.MPTextInput = exports.Head = exports.FormField = exports.ExtraInfo = exports.CheckLabel = exports.CheckInput = exports.CheckContainer = exports.BottomCopyWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _CR_Tick_black = _interopRequireDefault(require("./assets/CR_Tick_black.svg"));
var _TextInput = _interopRequireDefault(require("./_TextInput"));
const OuterWrapper = exports.OuterWrapper = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__OuterWrapper",
  componentId: "sc-68n85q-0"
})(["display:flex;flex-direction:column;@media ", "{flex-direction:row;flex-wrap:wrap;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
});
const TopCopyWrapper = exports.TopCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__TopCopyWrapper",
  componentId: "sc-68n85q-1"
})(["margin:", " 0;display:flex;width:100%;@media ", "{padding:10px;}"], (0, _spacing.default)('l'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});
const BottomCopyWrapper = exports.BottomCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__BottomCopyWrapper",
  componentId: "sc-68n85q-2"
})(["margin:", " 0;"], (0, _spacing.default)('md'));
const Head = exports.Head = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__Head",
  componentId: "sc-68n85q-3"
})(["display:flex;justify-content:space-between;flex-direction:column;"]);
const FormField = exports.FormField = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__FormField",
  componentId: "sc-68n85q-4"
})(["", ""], _ref3 => {
  let {
    theme
  } = _ref3;
  return (0, _styledComponents.css)(["position:relative;margin-bottom:", ";width:100%;display:flex;flex-direction:column;@media ", "{width:50%;padding:10px;}label{position:relative;margin-bottom:", ";width:100%;color:", ";}h3{position:relative;margin-bottom:", ";&:before{position:absolute;top:0;left:0;width:24px;height:24px;content:'';}}"], (0, _spacing.default)('md'), theme.allBreakpoints('M'), (0, _spacing.default)('md'), theme.color('grey_dark'), (0, _spacing.default)('md'));
});
const CheckContainer = exports.CheckContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__CheckContainer",
  componentId: "sc-68n85q-5"
})(["", ""], _ref4 => {
  let {
    theme
  } = _ref4;
  return (0, _styledComponents.css)(["width:100%;display:flex;justify-content:space-between;font-size:", ";font-family:", ";"], theme.fontSize('md'), theme.fontFamilies(theme.font.regular));
});
const CheckLabel = exports.CheckLabel = _styledComponents.default.label.withConfig({
  displayName: "MarketingPreferencesDSstyle__CheckLabel",
  componentId: "sc-68n85q-6"
})(["", ""], _ref5 => {
  let {
    theme
  } = _ref5;
  return (0, _styledComponents.css)(["display:flex;align-items:center;font-size:", ";@media ", "{font-size:", ";}"], theme.fontSize('xs'), theme.allBreakpoints('M'), theme.fontSize('s'));
});
const CheckInput = exports.CheckInput = _styledComponents.default.input.withConfig({
  displayName: "MarketingPreferencesDSstyle__CheckInput",
  componentId: "sc-68n85q-7"
})(["font-size:", ";display:block;box-sizing:border-box;opacity:0;position:absolute;width:100%;height:100%;left:0;top:0;margin:0;border:1px solid ", ";+ span{margin-right:10px;width:30px;height:30px;background-color:", ";border:1px solid ", ";float:left;border-radius:8px;@media ", "{margin-right:15px;}}:checked + span{background:url(", ") no-repeat center;background-color:", ";background-size:contain;}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.fontSize('sm');
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color('grey_for_forms');
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.color('grey_light');
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.color('black');
}, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('M');
}, _CR_Tick_black.default, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.color('grey_light');
});
const ShowHideInputWrapper = exports.ShowHideInputWrapper = _styledComponents.default.div.withConfig({
  displayName: "MarketingPreferencesDSstyle__ShowHideInputWrapper",
  componentId: "sc-68n85q-8"
})(["display:", ";width:100%;label{width:100%;border:none;padding:0;}"], _ref12 => {
  let {
    show
  } = _ref12;
  return show ? 'block' : 'none';
});
const ExtraInfo = exports.ExtraInfo = _styledComponents.default.span.withConfig({
  displayName: "MarketingPreferencesDSstyle__ExtraInfo",
  componentId: "sc-68n85q-9"
})(["display:block;width:100%;font-size:1rem;text-transform:inherit;font-weight:normal;line-height:normal;font-family:'Montserrat',Helvetica,Arial,sans-serif;margin-bottom:0.5rem;color:", ";+ label{margin-top:20px;&[for=\"mp_email\"],&[for=\"mp_mobile\"],&[for=\"mp_phone\"]{> span:first-child{position:absolute;margin:-1px;padding:0;width:1px;height:1px;border:0;overflow:hidden;clip:rect(1px 1px 1px 1px);word-wrap:normal;}}"], _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.color('grey_dark');
});
const MPTextInput = exports.MPTextInput = (0, _styledComponents.default)(_TextInput.default).withConfig({
  displayName: "MarketingPreferencesDSstyle__MPTextInput",
  componentId: "sc-68n85q-10"
})(["input{border:1px solid  ", ";;@media ", "{max-width:none;}}"], _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.color('black');
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.allBreakpoints('M');
});