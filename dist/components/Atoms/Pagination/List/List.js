"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
const StyledList = _styledComponents.default.ul.withConfig({
  displayName: "List__StyledList",
  componentId: "sc-vcfyaz-0"
})(["display:flex;padding-left:0;justify-content:center;flex-wrap:wrap;list-style-type:none;"]);
const StyledItem = _styledComponents.default.li.withConfig({
  displayName: "List__StyledItem",
  componentId: "sc-vcfyaz-1"
})(["padding:10px;"]);
const List = _ref => {
  let {
    PageComponent,
    pages,
    createURL,
    onSelect,
    pageComponentProps,
    ...restProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledList, null, pages.map(_ref2 => {
    let {
      selected,
      disabled,
      label,
      ariaLabel,
      value
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(StyledItem, {
      key: "".concat(ariaLabel, " ").concat(value)
    }, /*#__PURE__*/_react.default.createElement(PageComponent, Object.assign({
      selected: selected,
      disabled: disabled,
      "aria-label": ariaLabel,
      href: selected || disabled ? null : createURL(value),
      onClick: event => {
        if (selected || disabled) {
          return event.preventDefault();
        }
        return onSelect(event, value);
      }
    }, restProps, pageComponentProps), label));
  }));
};
var _default = exports.default = List;