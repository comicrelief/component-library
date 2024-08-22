"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _CR__Funding = _interopRequireDefault(require("./assets/CR__Funding.svg"));
var _CR__Justice = _interopRequireDefault(require("./assets/CR__Justice.svg"));
var _CR__MentalHealth = _interopRequireDefault(require("./assets/CR__MentalHealth.svg"));
var _CR__Shed = _interopRequireDefault(require("./assets/CR__Shed.svg"));
var _CR__SocialTech = _interopRequireDefault(require("./assets/CR__SocialTech.svg"));
var _CR__Sport = _interopRequireDefault(require("./assets/CR__Sport.svg"));
var _CR__Children = _interopRequireDefault(require("./assets/CR__Children.svg"));
var _CR__Home = _interopRequireDefault(require("./assets/CR__Home.svg"));
var _CR__Learning = _interopRequireDefault(require("./assets/CR__Learning.svg"));
var _CR__World = _interopRequireDefault(require("./assets/CR__World.svg"));
var _CR__SafePlace = _interopRequireDefault(require("./assets/CR__SafePlace.svg"));
var _CR__Environment = _interopRequireDefault(require("./assets/CR__Environment.svg"));
var _CR__Partnerships = _interopRequireDefault(require("./assets/CR__Partnerships.svg"));
const Wrapper = _styledComponents.default.article.withConfig({
  displayName: "Descriptor__Wrapper",
  componentId: "sc-1np5gzw-0"
})(["position:relative;width:100%;height:100%;display:flex;background-color:", ";border-radius:", ";box-shadow:0px 0px 20px rgba(0,0,0,0.15);"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
}, (0, _spacing.default)('md'));
const InnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "Descriptor__InnerWrapper",
  componentId: "sc-1np5gzw-1"
})(["padding:", ";height:100%;display:flex;flex-direction:column;width:100%;"], (0, _spacing.default)('l'));
const Header = _styledComponents.default.div.withConfig({
  displayName: "Descriptor__Header",
  componentId: "sc-1np5gzw-2"
})(["display:block;"]);
const Date = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Descriptor__Date",
  componentId: "sc-1np5gzw-3"
})(["display:inline-block;margin-bottom:", ";"], (0, _spacing.default)('md'));
const IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "Descriptor__IconWrapper",
  componentId: "sc-1np5gzw-4"
})(["display:flex;position:absolute;top:0;right:0;margin-right:", ";margin-top:", ";img:not(:last-child){margin-right:8px;}"], (0, _spacing.default)('l'), (0, _spacing.default)('m'));
const Image = _styledComponents.default.img.withConfig({
  displayName: "Descriptor__Image",
  componentId: "sc-1np5gzw-5"
})(["object-fit:cover;width:24px;height:24px;"]);
const themeSwitcher = theme => {
  switch (theme) {
    case 'Partnerships':
      return _CR__Partnerships.default;
    case 'Environment':
      return _CR__Environment.default;
    case 'Safe Place to Be':
      return _CR__SafePlace.default;
    case 'World':
      return _CR__World.default;
    case 'Learning':
      return _CR__Learning.default;
    case 'Home':
      return _CR__Home.default;
    case 'How We Fund':
      return _CR__Funding.default;
    case 'Social Tech':
      return _CR__SocialTech.default;
    case 'Red Shed':
      return _CR__Shed.default;
    case 'Mental Health':
      return _CR__MentalHealth.default;
    case 'Sport for Change':
      return _CR__Sport.default;
    case 'Gender Justice':
      return _CR__Justice.default;
    case 'Children Survive & Thrive':
      return _CR__Children.default;
    default:
      return _CR__Funding.default;
  }
};
const Title = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Descriptor__Title",
  componentId: "sc-1np5gzw-6"
})(["margin:0 0 ", ";"], (0, _spacing.default)('m'));
const TagWrapper = _styledComponents.default.div.withConfig({
  displayName: "Descriptor__TagWrapper",
  componentId: "sc-1np5gzw-7"
})(["margin:0 0 ", " 0;display:flex;flex-wrap:wrap;span:not(:first-child){margin-left:", ";}span:not(:first-child)::before{content:'';position:absolute;left:-9px;bottom:5px;width:3px;height:3px;background-color:currentColor;border-radius:50%;}"], (0, _spacing.default)('md'), (0, _spacing.default)('md'));
const Tag = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Descriptor__Tag",
  componentId: "sc-1np5gzw-8"
})(["position:relative;text-transform:uppercase;"]);
const Description = _styledComponents.default.div.withConfig({
  displayName: "Descriptor__Description",
  componentId: "sc-1np5gzw-9"
})(["font-family:", ";"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fontFamilies('Montserrat');
});

/**
 * Descriptor component
 */

const Descriptor = _ref3 => {
  let {
    date,
    title,
    categories,
    tags,
    children
  } = _ref3;
  const tagItems = tags.map((tag, index) => {
    const key = tag + index;
    return /*#__PURE__*/_react.default.createElement(Tag, {
      size: "xs",
      weight: "normal",
      color: "grey_dark",
      family: "Montserrat",
      key: key
    }, tag);
  });
  const icons = categories.map((theme, index) => {
    const key = theme + index;
    return /*#__PURE__*/_react.default.createElement(Image, {
      src: themeSwitcher(theme),
      alt: "".concat(theme, " icon"),
      key: key
    });
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(InnerWrapper, null, /*#__PURE__*/_react.default.createElement(Header, null, /*#__PURE__*/_react.default.createElement(Date, {
    size: "s",
    weight: "bold",
    color: "grey_dark",
    family: "Montserrat"
  }, date), /*#__PURE__*/_react.default.createElement(IconWrapper, null, icons)), /*#__PURE__*/_react.default.createElement(Title, {
    size: "xl",
    tag: "h3",
    height: "2rem",
    weight: "normal",
    uppercase: true,
    family: "Anton"
  }, title), /*#__PURE__*/_react.default.createElement(TagWrapper, null, tagItems), /*#__PURE__*/_react.default.createElement(Description, null, children)));
};
var _default = exports.default = Descriptor;