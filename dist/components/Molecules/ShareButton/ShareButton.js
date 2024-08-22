"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icon = _interopRequireDefault(require("../../Atoms/SocialIcons/Icon/Icon"));
var _sharePopUpHelper = _interopRequireDefault(require("../../../utils/ShareButton/sharePopUpHelper"));
var _shareUrlHelper = _interopRequireDefault(require("../../../utils/ShareButton/shareUrlHelper"));
var _shareTracking = _interopRequireDefault(require("../../../utils/ShareButton/shareTracking"));
var _ShareIcons = _interopRequireDefault(require("./assets/ShareIcons"));
var _ShareButton = require("./ShareButton.style");
const handleShare = (e, typeOfShare, urlToShare) => {
  e.preventDefault();
  (0, _shareTracking.default)(typeOfShare.toLowerCase());

  // Pass the current page's URL and the type of share to our helper function
  const shareUrl = (0, _shareUrlHelper.default)(urlToShare, typeOfShare);

  // Use our helper function for pop-up position issues on dual-screen setups
  (0, _sharePopUpHelper.default)(shareUrl, 550, 420);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = _ref => {
  let {
    campaign = 'comicrelief',
    copy = 'Share with:',
    urlToShare = null,
    ...restProps
  } = _ref;
  let checkedUrl = '';

  /* Window obj isn't available during server-side rendering AND we don't have
   * access to componentDidMount etc. in functional components, so add this check first */
  if (typeof window === 'undefined') {
    checkedUrl = 'http://www.some-other-domain.com';
  } else {
    // Else, assign the value based on the props passed
    checkedUrl = urlToShare !== null ? urlToShare : window.location.href;
  }
  return /*#__PURE__*/_react.default.createElement(_ShareButton.Wrapper, null, /*#__PURE__*/_react.default.createElement(_ShareButton.Copy, null, copy), /*#__PURE__*/_react.default.createElement(_ShareButton.ShareButtonList, null, Object.keys(_ShareIcons.default).map(shareType => /*#__PURE__*/_react.default.createElement(_ShareButton.ShareButtonItem, {
    key: "share-button--".concat(shareType)
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, Object.assign({
    onClick: e => handleShare(e, shareType, checkedUrl),
    icon: _ShareIcons.default[shareType],
    title: "Share on ".concat(shareType),
    brand: campaign,
    target: "_blank",
    role: "button",
    href: "#"
  }, restProps))))));
};
var _default = exports.default = ShareButton;