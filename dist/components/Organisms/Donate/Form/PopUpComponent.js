"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _close = _interopRequireDefault(require("../assets/close.svg"));
const closeDuration = 0.6;
const fadeClose = (0, _styledComponents.keyframes)(["0%{opacity:1;max-height:350px;}100%{opacity:0;max-height:0px;display:none;margin-top:-16px;}"]);
const fadeOpen = (0, _styledComponents.keyframes)(["0%{opacity:0;max-height:0px;display:none;margin-top:-16px;}100%{opacity:1;max-height:350px;}"]);
const StyledPopUp = _styledComponents.default.div.withConfig({
  displayName: "PopUpComponent__StyledPopUp",
  componentId: "sc-1d7imlo-0"
})(["display:grid;overflow:hidden;max-height:350px;opacity:1;animation:0.4s ", " ease;", " background-color:", ";box-shadow:0px 0px 16px rgba(0,0,0,0.15);border-radius:10px;@media ", "{width:450px;margin-right:auto;margin-left:auto;}"], props => props.fadeOpen, props => props.isClosed && (0, _styledComponents.css)(["animation:", "s ", " ease forwards;"], closeDuration, props.fadeClose), _ref => {
  let {
    theme
  } = _ref;
  return theme.color('blue_light');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});
const TextWrapper = _styledComponents.default.div.withConfig({
  displayName: "PopUpComponent__TextWrapper",
  componentId: "sc-1d7imlo-1"
})(["margin:0 32px 32px;"]);
const Button = _styledComponents.default.button.withConfig({
  displayName: "PopUpComponent__Button",
  componentId: "sc-1d7imlo-2"
})(["justify-self:end;background-color:transparent;border:0;cursor:pointer;width:30px;height:30px;margin:3px;:active,:focus,:hover{outline:none;border:1px solid ", ";}img{width:15px;height:15px;vertical-align:middle;}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.color('grey');
});
const PopUpComponent = _ref4 => {
  let {
    PopUpText,
    setPopOpen
  } = _ref4;
  const [isClosed, setIsClosed] = (0, _react.useState)(false);

  // Only update centralised state - which renders
  // this component - once the closing animation is complete
  const handleCloser = () => {
    setIsClosed(true);
    setTimeout(() => {
      setPopOpen(false);
    }, closeDuration * 1000);
  };
  return /*#__PURE__*/_react.default.createElement(StyledPopUp, {
    isClosed: isClosed,
    fadeOpen: fadeOpen,
    fadeClose: fadeClose
  }, /*#__PURE__*/_react.default.createElement(Button, {
    onClick: () => handleCloser(),
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    alt: "Close cross icon"
  })), /*#__PURE__*/_react.default.createElement(TextWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, null, PopUpText)));
};
var _default = exports.default = PopUpComponent;