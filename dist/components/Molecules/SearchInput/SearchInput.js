"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchInput = require("./SearchInput.style");
const SearchInput = _ref => {
  let {
    onChange,
    placeholder = '',
    value,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_SearchInput.Wrapper, null, /*#__PURE__*/_react.default.createElement(_SearchInput.InnerWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchInput.SearchBox, {
    role: "search"
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchInput.SearchField, Object.assign({
    role: "searchbox",
    value: value,
    onChange: onChange,
    name: "search",
    showLabel: false,
    type: "text",
    label: "Search",
    id: "search",
    placeholder: placeholder,
    errorMsg: ""
  }, rest))))));
};
var _default = exports.default = SearchInput;