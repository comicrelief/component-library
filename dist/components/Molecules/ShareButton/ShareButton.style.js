"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.ShareButtonList = exports.ShareButtonItem = exports.Copy = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Wrapper = exports.Wrapper = _styledComponents.default.div.withConfig({
  displayName: "ShareButtonstyle__Wrapper",
  componentId: "sc-18d8mc8-0"
})(["display:flex;align-items:center;justify-content:center;"]);
const Copy = exports.Copy = _styledComponents.default.p.withConfig({
  displayName: "ShareButtonstyle__Copy",
  componentId: "sc-18d8mc8-1"
})(["width:auto;margin:0 ", " 0 0;&:first-child{margin-bottom:0;}"], (0, _spacing.default)('md'));
const ShareButtonList = exports.ShareButtonList = _styledComponents.default.ul.withConfig({
  displayName: "ShareButtonstyle__ShareButtonList",
  componentId: "sc-18d8mc8-2"
})(["width:auto;margin:0;padding:0;list-style:none;"]);
const ShareButtonItem = exports.ShareButtonItem = _styledComponents.default.li.withConfig({
  displayName: "ShareButtonstyle__ShareButtonItem",
  componentId: "sc-18d8mc8-3"
})(["width:40px;height:40px;display:inline-block;margin:", ";"], (0, _spacing.default)('sm'));