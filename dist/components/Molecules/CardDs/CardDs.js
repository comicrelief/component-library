"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _CardDs = require("./CardDs.style");
const CardDs = _ref => {
  let {
    backgroundColor = 'white',
    imageLow = null,
    images = null,
    image = null,
    link = null,
    linkLabel = null,
    target = null,
    imageAltText = '',
    width = '100%',
    height = '100%',
    icon = null,
    children,
    ...rest
  } = _ref;
  const Media = /*#__PURE__*/_react.default.createElement(_CardDs.Image, {
    hasLink: link
  }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    alt: imageAltText,
    imageLow: imageLow,
    images: images,
    image: image,
    objectFit: "cover",
    width: width,
    height: height
  }));
  const hasMedia = () => {
    if (imageLow && link) {
      return /*#__PURE__*/_react.default.createElement(_CardDs.MediaLink, Object.assign({
        "aria-hidden": "true",
        tabIndex: "-1",
        href: link,
        target: target,
        "data-image-cta-copy": linkLabel
      }, rest), Media);
    }
    if (imageLow) {
      return Media;
    }
    return null;
  };
  const external = target === 'blank' ? 'noopener' : null;
  return /*#__PURE__*/_react.default.createElement(_CardDs.Container, rest, hasMedia(), /*#__PURE__*/_react.default.createElement(_CardDs.Copy, {
    hasImage: imageLow,
    hasLink: link,
    backgroundColor: backgroundColor
  }, children), link && /*#__PURE__*/_react.default.createElement(_CardDs.CTA, {
    hasImage: imageLow
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    rel: external,
    color: "red",
    href: link,
    target: target,
    type: "button",
    icon: icon,
    "data-button-cta-copy": linkLabel
  }, linkLabel)));
};
var _default = exports.default = CardDs;