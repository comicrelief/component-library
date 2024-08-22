"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextItalic = exports.DropdownList = exports.DropdownItemSelectable = exports.DropdownItem = exports.Dropdown = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _Text = _interopRequireDefault(require("../Text/Text"));
const Container = exports.Container = _styledComponents.default.div.withConfig({
  displayName: "TextInputWithDropdownstyle__Container",
  componentId: "sc-1s4bv7m-0"
})(["position:relative;"]);
const Dropdown = exports.Dropdown = _styledComponents.default.div.withConfig({
  displayName: "TextInputWithDropdownstyle__Dropdown",
  componentId: "sc-1s4bv7m-1"
})(["", " font-family:", ";position:absolute;left:0;max-height:300px;overflow:auto;background-color:", ";border:1px solid;margin-top:-1px;width:100%;@media ", "{max-width:500px;}"], (0, _zIndex.default)('high'), _ref => {
  let {
    theme
  } = _ref;
  return theme.fontFamilies('Montserrat');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('white');
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
});
const DropdownList = exports.DropdownList = _styledComponents.default.ul.withConfig({
  displayName: "TextInputWithDropdownstyle__DropdownList",
  componentId: "sc-1s4bv7m-2"
})(["list-style:none;padding:0;margin:0;"]);
const DropdownItem = exports.DropdownItem = _styledComponents.default.li.withConfig({
  displayName: "TextInputWithDropdownstyle__DropdownItem",
  componentId: "sc-1s4bv7m-3"
})(["padding:", ";"], (0, _spacing.default)('sm'));
const DropdownItemSelectable = exports.DropdownItemSelectable = (0, _styledComponents.default)(DropdownItem).withConfig({
  displayName: "TextInputWithDropdownstyle__DropdownItemSelectable",
  componentId: "sc-1s4bv7m-4"
})(["cursor:pointer;border-top:1px solid ", ";&:hover,&:focus{background-color:", ";}"], _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.color('grey_light');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.color('grey_light');
});
const TextItalic = exports.TextItalic = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "TextInputWithDropdownstyle__TextItalic",
  componentId: "sc-1s4bv7m-5"
})(["font-style:italic;"]);