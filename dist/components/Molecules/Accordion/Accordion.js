"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _index = require("../../Atoms/Icons/index");
const Container = _styledComponents.default.div.withConfig({
  displayName: "Accordion__Container",
  componentId: "sc-19u0s0h-0"
})(["border-radius:1rem;background:", ";box-shadow:0px 0px 20px rgba(0,0,0,0.15);"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
});
const ChevronKeyframes = (0, _styledComponents.keyframes)(["0%{margin-top:0rem;}50%{margin-top:0.5rem;}100%{margin-top:0rem;}"]);
const Button = _styledComponents.default.button.withConfig({
  displayName: "Accordion__Button",
  componentId: "sc-19u0s0h-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;background:none;border:none;transition:bottom 0.1s linear;cursor:pointer;text-align:left;&:focus,&:hover{color:inherit;outline:none;> div{animation-name:", ";animation-duration:0.4s;}}padding:", ";@media ", "{padding:", " ", ";}"], props => props.ChevronKeyframes, (0, _spacing.default)('l'), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('l'), (0, _spacing.default)('lg'));
const Icon = _styledComponents.default.div.withConfig({
  displayName: "Accordion__Icon",
  componentId: "sc-19u0s0h-2"
})(["display:flex;justify-content:center;align-content:center;"]);
const Copy = _styledComponents.default.div.withConfig({
  displayName: "Accordion__Copy",
  componentId: "sc-19u0s0h-3"
})(["overflow:hidden;height:0;visibility:none;transition:all 0.2s cubic-bezier(0.21,1.7,0.83,0.68) 0s;padding:0 ", ";@media ", "{padding:0 ", ";}", ""], (0, _spacing.default)('l'), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, (0, _spacing.default)('lg'), _ref4 => {
  let {
    isOpen
  } = _ref4;
  return isOpen && (0, _styledComponents.css)(["height:auto;visibility:visible;transition:all 0.2s cubic-bezier(0.21,1.7,0.83,0.68) 0s;padding:0 ", " ", ";@media ", "{padding:0 ", " ", ";}"], (0, _spacing.default)('l'), (0, _spacing.default)('l'), _ref5 => {
    let {
      theme
    } = _ref5;
    return theme.allBreakpoints('M');
  }, (0, _spacing.default)('lg'), (0, _spacing.default)('l'));
});
const Accordion = _ref6 => {
  let {
    children,
    title,
    ...rest
  } = _ref6;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react.default.createElement(Container, rest, /*#__PURE__*/_react.default.createElement(Button, {
    onClick: handleOpen,
    "aria-expanded": isOpen ? 'true' : 'false',
    ChevronKeyframes: ChevronKeyframes
  }, title, /*#__PURE__*/_react.default.createElement(Icon, null, /*#__PURE__*/_react.default.createElement(_index.Chevron, {
    colour: "black",
    direction: isOpen ? 'up' : 'down'
  }))), /*#__PURE__*/_react.default.createElement(Copy, {
    isOpen: isOpen
  }, children));
};
var _default = exports.default = Accordion;