"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Digits = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Countdownstyle__Wrapper",
  componentId: "sc-zj2fle-0"
})(["display:flex;"]);
const Digits = exports.Digits = _styledComponents.default.div.withConfig({
  displayName: "Countdownstyle__Digits",
  componentId: "sc-zj2fle-1"
})(["display:flex;flex-direction:column;align-items:center;margin:0 ", ";&:first-child{margin-left:0;}"], (0, _spacing.default)('sm'));