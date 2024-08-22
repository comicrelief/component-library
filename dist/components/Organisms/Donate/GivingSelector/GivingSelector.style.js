"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Switch = exports.MoneyBox = exports.Label = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../../theme/shared/zIndex"));
var _hideVisually = _interopRequireDefault(require("../../../../theme/shared/hideVisually"));
const Switch = exports.Switch = _styledComponents.default.span.withConfig({
  displayName: "GivingSelectorstyle__Switch",
  componentId: "sc-5ktn9c-0"
})(["width:50%;height:48px;border-radius:2rem;", ";display:block;position:absolute;transition:left 0.15s ease-out;background-color:", ";left:2px;box-shadow:0px 0px 16px rgba(0,0,0,0.3);"], (0, _zIndex.default)('low'), _ref => {
  let {
    theme
  } = _ref;
  return theme.color('blue_donate');
});
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "GivingSelectorstyle__Wrapper",
  componentId: "sc-5ktn9c-1"
})(["display:flex;margin:", " 0;"], (0, _spacing.default)('md'));
const MoneyBox = exports.MoneyBox = _styledComponents.default.div.withConfig({
  displayName: "GivingSelectorstyle__MoneyBox",
  componentId: "sc-5ktn9c-2"
})(["width:100%;padding:2px;position:relative;display:flex;flex-direction:row;margin:", " 0;border-radius:2rem;background:", ";@media ", "{width:450px;margin:0 auto;}.give-monthly:checked ~ ", "{left:calc(50% - 2px);}input{", "}input:focus:not(:checked) + label{box-shadow:inset 0 0 0 4px ", ";}"], (0, _spacing.default)('md'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('blue_light');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, Switch, _hideVisually.default, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('blue_donate');
});
const Label = exports.Label = _styledComponents.default.label.withConfig({
  displayName: "GivingSelectorstyle__Label",
  componentId: "sc-5ktn9c-3"
})(["font-size:", ";font-family:", ";font-weight:bold;min-height:48px;align-items:center;justify-content:center;display:flex;flex-basis:50%;border:none;transition:color 0.15s ease-out;", ";cursor:", ";border-radius:2rem;color:", ";&:active:focus{box-shadow:none;}&:focus{border:none;outline:none;box-shadow:inset 0 0 0 4px ", ";}"], _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.fontSize('s');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.fontFamilies('Montserrat');
}, (0, _zIndex.default)('medium'), _ref7 => {
  let {
    active
  } = _ref7;
  return active === true ? 'default' : 'pointer';
}, _ref8 => {
  let {
    active,
    theme
  } = _ref8;
  return active === true ? theme.color('white') : theme.color('black');
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.color('blue_donate');
});