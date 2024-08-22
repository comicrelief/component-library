"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerWrapper = exports.BurgerHiddenText = exports.BurgerBar = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hideVisually = _interopRequireDefault(require("../../../../theme/shared/hideVisually"));
var _Link = _interopRequireDefault(require("../../../Atoms/Link/Link"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _zIndex = _interopRequireDefault(require("../../../../theme/shared/zIndex"));
/**
 * Burger hidden text
 */
const BurgerHiddenText = exports.BurgerHiddenText = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "BurgerMenustyle__BurgerHiddenText",
  componentId: "sc-dtfwej-0"
})(["", ";"], _hideVisually.default);

/**
 * Burger menu bar
 */

const BurgerBar = exports.BurgerBar = _styledComponents.default.span.withConfig({
  displayName: "BurgerMenustyle__BurgerBar",
  componentId: "sc-dtfwej-1"
})(["background-color:", ";margin:0 auto;"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('deep_violet_dark');
});

/**
 * Burger wrapper
 */
const BurgerWrapper = exports.BurgerWrapper = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "BurgerMenustyle__BurgerWrapper",
  componentId: "sc-dtfwej-2"
})(["", ";order:50;display:flex;align-items:center;position:relative;text-indent:-9999px;background-color:transparent;height:100%;width:45px;left:5px;cursor:pointer;transition:all 0.2s;:hover{border:none;font-weight:inherit;}", "{position:relative;&,::before,::after{width:25px;height:3px;display:inline-block;}", ";::before,::after{content:'';position:absolute;left:0;background-color:currentColor;transition:all 0.2s;}::before{top:-0.5rem;", ";}::after{top:0.5rem;", ";}}:hover ", "{&,::before,::after{background-color:", ";}::before{", ";}::after{", ";}}@media ", "{display:none;}"], (0, _zIndex.default)('medium'), BurgerBar, _ref2 => {
  let {
    isExpandable
  } = _ref2;
  return isExpandable && ' background-color: transparent';
}, _ref3 => {
  let {
    isExpandable
  } = _ref3;
  return isExpandable && ' transform:rotate(135deg); top: 0;';
}, _ref4 => {
  let {
    isExpandable
  } = _ref4;
  return isExpandable && ' transform:rotate(-135deg); top: 0;';
}, BurgerBar, _ref5 => {
  let {
    theme,
    isExpandable
  } = _ref5;
  return !isExpandable && theme.color('grey');
}, _ref6 => {
  let {
    isExpandable
  } = _ref6;
  return !isExpandable && 'top: -0.6rem;';
}, _ref7 => {
  let {
    isExpandable
  } = _ref7;
  return !isExpandable && 'top: 0.6rem;';
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('Nav');
});