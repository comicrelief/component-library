"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zIndex = _interopRequireDefault(require("../../../theme/shared/zIndex"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _crLogo = _interopRequireDefault(require("./assets/cr-logo.svg"));
var _srLogo = _interopRequireDefault(require("./assets/sr-logo.svg"));
var _srGameonLogo = _interopRequireDefault(require("./assets/sr-gameon-logo.svg"));
var _CR_LOGO_PRIDE_KEY_RGB = _interopRequireDefault(require("./assets/CR_LOGO_PRIDE_KEY_RGB.svg"));
const Image = _styledComponents.default.img.withConfig({
  displayName: "Logo__Image",
  componentId: "sc-18yiye8-0"
})(["object-fit:cover;width:100%;display:block;height:auto;margin-right:", ";"], (0, _spacing.default)('md'));

/**
 * Logo wrapper
 */

const LogoWrapper = _styledComponents.default.div.withConfig({
  displayName: "Logo__LogoWrapper",
  componentId: "sc-18yiye8-1"
})(["display:inline-block;", " width:", ";transform:", ";vertical-align:bottom;@media ", "{width:", ";}"], (0, _zIndex.default)('high'), props => props.sizeSm, props => props.rotate ? 'rotate(-14deg)' : 'inherit', _ref => {
  let {
    theme
  } = _ref;
  return theme.allBreakpoints('Nav');
}, props => props.sizeMd);
const themeSwitcher = theme => {
  switch (theme) {
    case 'Sport Relief':
      return _srLogo.default;
    case 'Sport Relief Gameon':
      return _srGameonLogo.default;
    case 'Pride':
      return _CR_LOGO_PRIDE_KEY_RGB.default;
    default:
      return _crLogo.default;
  }
};
const Logo = _ref2 => {
  let {
    rotate = false,
    sizeSm = '51px',
    sizeMd = '70px',
    campaign = 'Comic Relief'
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(LogoWrapper, {
    rotate: rotate ? 1 : 0,
    sizeSm: sizeSm,
    sizeMd: sizeMd
  }, /*#__PURE__*/_react.default.createElement(Image, {
    src: themeSwitcher(campaign),
    alt: campaign === 'Comic Relief' || campaign === 'Pride' ? 'Comic Relief logo' : 'Sport Relief logo'
  }));
};
var _default = exports.default = Logo;