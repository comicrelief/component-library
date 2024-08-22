"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
/**
 * Search Result
 */
const Wrapper = _styledComponents.default.article.withConfig({
  displayName: "SearchResult__Wrapper",
  componentId: "sc-wp0ln2-0"
})(["width:100%;height:100%;background-color:", ";"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
});
const Item = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "SearchResult__Item",
  componentId: "sc-wp0ln2-1"
})(["display:flex;height:100%;border:0;flex-direction:column;text-decoration:none;color:inherit;width:100%;@media ", "{flex-direction:row;}:hover{border:0;font-weight:normal;}"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.allBreakpoints('M');
});
const ImageWrapper = _styledComponents.default.div.withConfig({
  displayName: "SearchResult__ImageWrapper",
  componentId: "sc-wp0ln2-2"
})(["height:auto;@media ", "{width:", ";}@media ", "{width:", ";}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.allBreakpoints('M');
}, _ref4 => {
  let {
    smallImageWidth
  } = _ref4;
  return smallImageWidth;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('XL');
}, _ref6 => {
  let {
    largeImageWidth
  } = _ref6;
  return largeImageWidth;
});
const CopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "SearchResult__CopyWrapper",
  componentId: "sc-wp0ln2-3"
})(["display:flex;flex-direction:column;justify-content:center;padding:", ";width:100%;"], (0, _spacing.default)('md'));
const Title = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "SearchResult__Title",
  componentId: "sc-wp0ln2-4"
})(["margin:0;"]);

/**
 * Search Result component
 */
const SearchResult = _ref7 => {
  let {
    imageLow = null,
    images = null,
    type = '',
    date = '',
    copy = '',
    smallImageWidth = '45%',
    largeImageWidth = '100%',
    href,
    title,
    alt
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Item, {
    href: href,
    type: "standard"
  }, /*#__PURE__*/_react.default.createElement(ImageWrapper, {
    smallImageWidth: smallImageWidth,
    largeImageWidth: largeImageWidth
  }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    imageLow: imageLow,
    images: images,
    objectFit: "cover",
    alt: alt
  })), /*#__PURE__*/_react.default.createElement(CopyWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    size: "xs",
    uppercase: true
  }, "".concat(type ? " ".concat(type, " |") : '', " ").concat(date)), /*#__PURE__*/_react.default.createElement(Title, {
    size: "xl",
    tag: "h3",
    uppercase: true
  }, title), copy && /*#__PURE__*/_react.default.createElement(_Text.default, {
    size: "m",
    tag: "p"
  }, copy))));
};
var _default = exports.default = SearchResult;