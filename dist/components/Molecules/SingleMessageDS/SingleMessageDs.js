"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactModal = _interopRequireDefault(require("react-modal"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Link = _interopRequireDefault(require("../../Atoms/Link/Link"));
var _index = require("../../Atoms/Icons/index");
var _SingleMessageDs = require("./SingleMessageDs.style");
var _play = _interopRequireDefault(require("./assets/play.png"));
const SingleMessageDs = _ref => {
  let {
    backgroundColor = 'white',
    imageLow = null,
    images = null,
    image = null,
    link = null,
    ctaBgColor = 'red',
    linkLabel = null,
    target = null,
    imageAltText = '',
    width = '100%',
    height = '100%',
    linkIcon = null,
    youTubeId = null,
    imageLeft,
    subtitle,
    children,
    ...rest
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const closeModal = () => setIsOpen(false);
  const Media = /*#__PURE__*/_react.default.createElement(_SingleMessageDs.Image, null, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    alt: imageAltText,
    imageLow: imageLow,
    images: images,
    image: image,
    objectFit: "cover",
    width: width,
    height: height
  }));
  const hasLink = () => {
    if (imageLow && link) {
      return /*#__PURE__*/_react.default.createElement(_SingleMessageDs.MediaLink, Object.assign({
        imageLeft: imageLeft,
        "aria-hidden": "true",
        tabIndex: "-1",
        href: link,
        target: target,
        "data-image-cta-copy": linkLabel
      }, rest), Media);
    }
    if (imageLow && youTubeId) {
      return /*#__PURE__*/_react.default.createElement(_SingleMessageDs.MediaLink, Object.assign({
        imageLeft: imageLeft,
        "aria-hidden": "true",
        tabIndex: "-1",
        href: youTubeId,
        target: target,
        "data-image-cta-copy": linkLabel
      }, rest, {
        onClick: e => {
          setIsOpen(true);
          e.preventDefault();
        }
      }), /*#__PURE__*/_react.default.createElement(_SingleMessageDs.PlayHolder, null, /*#__PURE__*/_react.default.createElement(_SingleMessageDs.PlayImage, {
        src: _play.default,
        alt: ""
      }), Media));
    }
    if (imageLow) {
      return Media;
    }
    return null;
  };
  const icon = linkIcon || (target === 'blank' ? /*#__PURE__*/_react.default.createElement(_index.External, null) : /*#__PURE__*/_react.default.createElement(_index.Internal, null));
  const external = target === 'blank' ? 'noopener' : null;
  const videoStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 5
    },
    content: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: '#000',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      width: '100%',
      maxWidth: '854px',
      height: '480px',
      margin: 'auto',
      borderRadius: '0',
      border: '0',
      padding: '0',
      overflow: 'visible',
      cursor: 'pointer'
    }
  };
  return /*#__PURE__*/_react.default.createElement(_SingleMessageDs.Container, Object.assign({}, rest, {
    imageLeft: imageLeft
  }), hasLink(), /*#__PURE__*/_react.default.createElement(_SingleMessageDs.Copy, {
    hasImage: imageLow,
    hasLink: link,
    backgroundColor: backgroundColor,
    imageLeft: imageLeft
  }, /*#__PURE__*/_react.default.createElement(_SingleMessageDs.Subtitle, {
    color: ctaBgColor,
    size: "s",
    weight: "bold",
    family: "Montserrat"
  }, subtitle), children, link && /*#__PURE__*/_react.default.createElement(_SingleMessageDs.CTA, {
    hasImage: imageLow
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    rel: external,
    color: ctaBgColor,
    href: link,
    target: target,
    type: "button",
    icon: icon,
    "data-button-cta-copy": linkLabel
  }, linkLabel))), /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: isOpen,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    parentSelector: () => document.querySelector('body'),
    style: videoStyle
  }, /*#__PURE__*/_react.default.createElement(_SingleMessageDs.CloseButton, {
    type: "button",
    onClick: closeModal,
    "aria-label": "Close the modal by clicking here"
  }), /*#__PURE__*/_react.default.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/".concat(youTubeId, "?&autoplay=1&enablejsapi=1"),
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
    allowFullScreen: true,
    title: "Embedded youtube"
  })));
};
var _default = exports.default = SingleMessageDs;