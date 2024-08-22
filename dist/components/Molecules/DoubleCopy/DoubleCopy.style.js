"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = exports.CopyWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
const Section = exports.Section = _styledComponents.default.section.withConfig({
  displayName: "DoubleCopystyle__Section",
  componentId: "sc-1kf782d-0"
})(["width:100%;@media ", "{display:flex;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('M');
});
const CopyWrapper = exports.CopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "DoubleCopystyle__CopyWrapper",
  componentId: "sc-1kf782d-1"
})(["display:flex;padding:", ";"], (0, _spacing.default)('xl'));