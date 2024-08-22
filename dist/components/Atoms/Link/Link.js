"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Link = _interopRequireWildcard(require("./Link.style"));
var _allowListed = _interopRequireDefault(require("../../../utils/allowListed"));
var _internalLinkHelper = require("../../../utils/internalLinkHelper");
let window = '';
const Link = _ref => {
  let {
    children,
    color = 'red',
    mobileColour = null,
    href,
    target = null,
    type = 'standard',
    home = false,
    underline = true,
    icon = null,
    iconFirst = false,
    ...rest
  } = _ref;
  const [documentHost, setDocumentHost] = (0, _react.useState)('');
  /**
   * If we haven't specifically set the target via props, check if
   * this is an internal link OR on our allowList before making it a '_self' link
   */
  if (target === null) {
    // Use our helper function to determine the raw domains to compare
    const currentDomain = (0, _internalLinkHelper.getDomain)(documentHost);
    const linkDomain = (0, _internalLinkHelper.getDomain)(href);

    // Additional check for applications that need more control
    const isallowListOverridden = rest.overrideallowList === true;

    /**
     * If the link has no domain supplied (likely '/' or '#')
     * OR has the same domain as the current page, don't open
     * in a new tab
     */
    const isExternalLink = linkDomain !== '' && currentDomain !== linkDomain;
    const isallowListed = (0, _allowListed.default)(href);
    window = isExternalLink && (isallowListOverridden || !isallowListed) ? '_blank' : '_self';
  } else {
    window = target === 'blank' ? '_blank' : '_self';
  }
  const hasIcon = icon !== null;
  (0, _react.useEffect)(() => {
    setDocumentHost(document.location.host);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Link.default, Object.assign({}, rest, {
    color: color,
    mobileColour: mobileColour,
    href: href,
    target: window,
    type: type,
    home: home,
    iconFirst: iconFirst,
    underline: underline
  }), children, window === '_blank' && /*#__PURE__*/_react.default.createElement(_Link.HelperText, null, "(opens in new window)"), hasIcon && /*#__PURE__*/_react.default.createElement(_Link.IconWrapper, {
    type: type
  }, icon));
};
var _default = exports.default = Link;