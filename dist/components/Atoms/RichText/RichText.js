"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Inner = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
const Inner = exports.Inner = _styledComponents.default.div.withConfig({
  displayName: "RichText__Inner",
  componentId: "sc-sqyfgj-0"
})(["text-align:", ";"], props => props.align);
const RichText = _ref => {
  let {
    align = 'left',
    markup = '',
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Inner, Object.assign({
    align: align,
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
};
var _default = exports.default = RichText;