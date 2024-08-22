"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _srLogo = _interopRequireDefault(require("../../Atoms/Logo/assets/sr-logo.svg"));
var _crLogo = _interopRequireDefault(require("../../Atoms/Logo/assets/cr-logo.svg"));
var _RND = _interopRequireDefault(require("./assets/RND.png"));
/**
 * Article Teaser
 */
const Wrapper = _styledComponents.default.article.withConfig({
  displayName: "ArticleTeaser__Wrapper",
  componentId: "sc-1r8ed89-0"
})(["width:100%;height:100%;display:flex;background-color:", ";border-radius:1rem;box-shadow:0px 0px 20px rgba(0,0,0,0.15);transition:all 0.2s;&:hover{box-shadow:0px 0px 20px rgba(0,0,0,0.3);transform:translateY(-4px);}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('white');
});
const Link = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "ArticleTeaser__Link",
  componentId: "sc-1r8ed89-1"
})(["padding:0;display:flex;height:100%;flex-direction:", ";align-items:", ";text-decoration:none;color:inherit;width:100%;@media ", "{flex-direction:row;}@media ", "{flex-direction:", ";}"], _ref2 => {
  let {
    category
  } = _ref2;
  return category || category === '' ? 'row' : 'column';
}, _ref3 => {
  let {
    category
  } = _ref3;
  return (category || category === '') && 'center';
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('L');
}, _ref6 => {
  let {
    category
  } = _ref6;
  return !category && category !== '' && 'column';
});
const ImageWrapper = _styledComponents.default.div.withConfig({
  displayName: "ArticleTeaser__ImageWrapper",
  componentId: "sc-1r8ed89-2"
})(["display:flex;align-items:center;justify-content:center;position:relative;", ";", ";"], _ref7 => {
  let {
    category
  } = _ref7;
  return (category || category === '') && (0, _styledComponents.css)(["padding-left:", ";img{border-radius:0;}"], (0, _spacing.default)('md'));
}, _ref8 => {
  let {
    category
  } = _ref8;
  return !category && category !== '' && (0, _styledComponents.css)(["img{border-radius:1rem 1rem 0 0;}@media ", "{width:45%;img{border-radius:1rem 0 0 1rem;}}@media ", "{width:100%;img{border-radius:1rem 1rem 0 0;}}"], _ref9 => {
    let {
      theme
    } = _ref9;
    return theme.allBreakpoints('M');
  }, _ref10 => {
    let {
      theme
    } = _ref10;
    return theme.allBreakpoints('L');
  });
});
const CopyWrapper = _styledComponents.default.div.withConfig({
  displayName: "ArticleTeaser__CopyWrapper",
  componentId: "sc-1r8ed89-3"
})(["padding:", ";height:100%;display:flex;flex-direction:column;", ";@media ", "{width:100%;}"], (0, _spacing.default)('l'), _ref11 => {
  let {
    category
  } = _ref11;
  return !category && category !== '' && (0, _styledComponents.css)(["@media ", "{width:55%;}"], _ref12 => {
    let {
      theme
    } = _ref12;
    return theme.allBreakpoints('M');
  });
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('L');
});
const Title = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ArticleTeaser__Title",
  componentId: "sc-1r8ed89-4"
})(["margin:", ";"], _ref14 => {
  let {
    time
  } = _ref14;
  return time ? "0 0 ".concat((0, _spacing.default)('md')) : '0';
});
const Date = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ArticleTeaser__Date",
  componentId: "sc-1r8ed89-5"
})(["display:block;margin-bottom:", ";"], (0, _spacing.default)('md'));
const Time = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "ArticleTeaser__Time",
  componentId: "sc-1r8ed89-6"
})(["display:block;margin-top:auto;"]);
const Image = (0, _styledComponents.default)(_Picture.default).withConfig({
  displayName: "ArticleTeaser__Image",
  componentId: "sc-1r8ed89-7"
})(["display:flex;"]);
const handleCampaignLogo = category => {
  switch (category) {
    case 'Comic Relief':
      return _crLogo.default;
    case 'Sport Relief':
      return _srLogo.default;
    case 'Red Nose Day':
      return _RND.default;
    default:
      return _crLogo.default;
  }
};

/**
 * Article teaser component
 */
const ArticleTeaser = _ref15 => {
  let {
    href,
    date,
    title,
    imageLow = null,
    image = null,
    images = null,
    alt = '',
    category = null,
    logoSize = null,
    family = 'Anton',
    time = null
  } = _ref15;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Link, {
    href: href,
    type: "standard",
    category: category,
    underline: false
  }, /*#__PURE__*/_react.default.createElement(ImageWrapper, {
    category: category
  }, /*#__PURE__*/_react.default.createElement(Image, {
    imageLow: !category && category !== '' ? imageLow : handleCampaignLogo(category),
    images: !category && category !== '' ? images : handleCampaignLogo(category),
    image: !category && category !== '' ? image : handleCampaignLogo(category),
    alt: alt,
    objectFit: "cover",
    width: category || category === '' ? logoSize : '100%',
    height: category || category === '' ? logoSize : '100%'
  })), /*#__PURE__*/_react.default.createElement(CopyWrapper, {
    category: category
  }, /*#__PURE__*/_react.default.createElement(Date, {
    size: "xs",
    weight: "bold"
  }, date), /*#__PURE__*/_react.default.createElement(Title, {
    time: time,
    size: "xl",
    tag: "h3",
    height: "2rem",
    weight: "normal",
    uppercase: true,
    family: family
  }, title), time && /*#__PURE__*/_react.default.createElement(Time, {
    size: "xs",
    weight: "400",
    color: "grey_dark"
  }, time))));
};
var _default = exports.default = ArticleTeaser;