"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopCopyWrapper = exports.Title = exports.PrivacyCopyWrapper = exports.NameWrapper = exports.InputField = exports.FormInner = exports.ESUWrapper = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _TextInput = _interopRequireDefault(require("./_TextInput"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
const ESUWrapper = exports.ESUWrapper = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__ESUWrapper",
  componentId: "sc-w2b8yk-0"
})(["display:flex;flex-direction:column;font-size:", ";color:", ";background-color:", ";padding:", ";"], _ref => {
  let {
    theme
  } = _ref;
  return theme.fontSize('s');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('white');
}, _ref3 => {
  let {
    theme,
    backgroundColour
  } = _ref3;
  return theme.color(backgroundColour);
}, (0, _spacing.default)('m'));
const TopCopyWrapper = exports.TopCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__TopCopyWrapper",
  componentId: "sc-w2b8yk-1"
})(["display:flex;margin-bottom:", ";"], (0, _spacing.default)('md'));
const ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__ButtonWrapper",
  componentId: "sc-w2b8yk-2"
})(["margin-top:", ";button{background-color:", ";}"], (0, _spacing.default)('md'), _ref4 => {
  let {
    theme,
    buttonColour
  } = _ref4;
  return theme.color(buttonColour);
});
const PrivacyCopyWrapper = exports.PrivacyCopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__PrivacyCopyWrapper",
  componentId: "sc-w2b8yk-3"
})(["display:flex;flex-direction:column;margin-top:", ";p{font-size:", ";line-height:", ";a{font-size:", ";color:", ";}}"], (0, _spacing.default)('md'), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.fontSize('s');
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.fontSize('xl');
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.fontSize('s');
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.color('white');
});
const FormInner = exports.FormInner = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__FormInner",
  componentId: "sc-w2b8yk-4"
})(["display:flex;flex-direction:column;margin:", " 0;"], (0, _spacing.default)('md'));
const NameWrapper = exports.NameWrapper = _styledComponents.default.div.withConfig({
  displayName: "EmailSignUpstyle__NameWrapper",
  componentId: "sc-w2b8yk-5"
})(["display:flex;flex-direction:column;gap:0;@media ", "{justify-content:start;flex-direction:", ";gap:", ";)};}"], _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.allBreakpoints('L');
}, _ref10 => {
  let {
    columnLayout
  } = _ref10;
  return columnLayout ? 'column' : 'row';
}, _ref11 => {
  let {
    columnLayout
  } = _ref11;
  return columnLayout ? 0 : (0, _spacing.default)('md');
});
const InputField = exports.InputField = (0, _styledComponents.default)(_TextInput.default).withConfig({
  displayName: "EmailSignUpstyle__InputField",
  componentId: "sc-w2b8yk-6"
})(["width:100%;margin-bottom:", ";& > span:first-child{color:", ";}@media ", "{max-width:290px;}"], (0, _spacing.default)('md'), _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.color('white');
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('L');
});
const Title = exports.Title = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "EmailSignUpstyle__Title",
  componentId: "sc-w2b8yk-7"
})(["margin-bottom:", ";"], (0, _spacing.default)('m'));