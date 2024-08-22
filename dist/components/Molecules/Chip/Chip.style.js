"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.LabelGroup = exports.ClearButton = exports.CheckLabel = exports.CheckInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _CR_RedShed = _interopRequireDefault(require("./assets/CR_RedShed.svg"));
var _CR_Funding = _interopRequireDefault(require("./assets/CR_Funding.svg"));
var _CR_MentalHealth = _interopRequireDefault(require("./assets/CR_MentalHealth.svg"));
var _CR_SocialTech = _interopRequireDefault(require("./assets/CR_SocialTech.svg"));
var _CR_Sport = _interopRequireDefault(require("./assets/CR_Sport.svg"));
var _CR_Justice = _interopRequireDefault(require("./assets/CR_Justice.svg"));
var _CR_SafePlace = _interopRequireDefault(require("./assets/CR_SafePlace.svg"));
var _CR_Partnerships = _interopRequireDefault(require("./assets/CR_Partnerships.svg"));
var _CR_Children = _interopRequireDefault(require("./assets/CR_Children.svg"));
var _clear = _interopRequireDefault(require("./assets/clear.svg"));
const selectIcon = name => {
  switch (name) {
    case 'How we Fund':
      return _CR_Funding.default;
    case 'Red Shed':
      return _CR_RedShed.default;
    case 'Mental Health':
      return _CR_MentalHealth.default;
    case 'Social Tech':
      return _CR_SocialTech.default;
    case 'Gender Justice':
      return _CR_Justice.default;
    case 'Sport for Change':
      return _CR_Sport.default;
    case 'Safe Place to Be':
      return _CR_SafePlace.default;
    case 'Partnerships':
      return _CR_Partnerships.default;
    case 'Children Survive & Thrive':
      return _CR_Children.default;
    default:
      return null;
  }
};
const LabelGroup = exports.LabelGroup = _styledComponents.default.div.withConfig({
  displayName: "Chipstyle__LabelGroup",
  componentId: "sc-6s9oo3-0"
})(["display:flex;flex-wrap:wrap;"]);
const CheckLabel = exports.CheckLabel = _styledComponents.default.label.withConfig({
  displayName: "Chipstyle__CheckLabel",
  componentId: "sc-6s9oo3-1"
})(["display:flex;align-items:center;width:auto;height:48px;border-radius:2rem;background-color:#d5d5d5;margin:", " ", " 0 0;padding:4px;padding-right:1rem;flex:0 0 auto;position:relative;@media ", "{margin:", " ", " 0 0;}"], (0, _spacing.default)('sm'), (0, _spacing.default)('sm'), _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('md'), (0, _spacing.default)('md'));
const Overlay = exports.Overlay = _styledComponents.default.span.withConfig({
  displayName: "Chipstyle__Overlay",
  componentId: "sc-6s9oo3-2"
})(["display:block;position:absolute;width:100%;height:100%;opacity:0.2;border-radius:2rem;left:0;top:0;right:0;bottom:0;", ";:hover{background:", ";}"], (0, _zIndex.default)('low'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('grey_medium');
});
const CheckInput = exports.CheckInput = _styledComponents.default.input.withConfig({
  displayName: "Chipstyle__CheckInput",
  componentId: "sc-6s9oo3-3"
})(["font-size:", ";display:block;box-sizing:border-box;opacity:0;position:absolute;left:0px;width:40px;height:40px;margin:0;border:1px solid ", ";+ span{background:url(", ") no-repeat center;background-size:24px;margin-right:", ";width:40px;height:40px;border-radius:50%;background-color:", ";float:left;", ";}:checked ~ span{background-size:24px;background-color:", ";}:focus + span{border-color:", ";border-width:3px;}:focus + span{border-color:", ";border-width:3px;}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.fontSize('sm');
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('grey_for_forms');
}, _ref5 => {
  let {
    value
  } = _ref5;
  return selectIcon(value);
}, (0, _spacing.default)('md'), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.color('grey');
}, (0, _zIndex.default)('medium'), _ref7 => {
  let {
    theme,
    color
  } = _ref7;
  return theme.color(color);
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.color('grey_for_forms');
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.color('grey_for_forms');
});
const ClearButton = exports.ClearButton = _styledComponents.default.button.withConfig({
  displayName: "Chipstyle__ClearButton",
  componentId: "sc-6s9oo3-4"
})(["border-radius:2rem;background:none;padding:", " ", ";margin:", " 0 0 0;border:1px solid ", ";outline:none;padding-left:3rem;position:relative;height:48px;:focus{border-color:", ";}:before{content:'';background:url(", ") no-repeat center;width:20px;height:20px;display:block;position:absolute;left:1rem;}"], (0, _spacing.default)('sm'), (0, _spacing.default)('md'), (0, _spacing.default)('md'), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.color('grey_medium');
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.color('grey_for_forms');
}, _clear.default);