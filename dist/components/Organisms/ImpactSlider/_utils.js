"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const getUrlParameter = name => {
  const text = name.replace(/\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp("[\\?&]".concat(text, "=([^&#]*)"));
  const results = regex.exec(window.location.search);
  const param = results === null ? 'generic' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  return param;
};
const handleSubmission = (amount, donateLink, cartID, rowID) => {
  let currentpageUrl = window.location.href;
  const affiliateValue = getUrlParameter(currentpageUrl);
  const reg = /[#?|[\]\\]/g;
  if (currentpageUrl.match(reg) !== null) {
    const thisMatch = currentpageUrl.match(reg)[0];
    currentpageUrl = currentpageUrl.substring(0, currentpageUrl.indexOf(thisMatch));
  }
  const forwardingUrl = "".concat(donateLink, "/?cartId=").concat(cartID, "&amount=").concat(amount, "&clientOverride=donate&currency=GBP&givingType=single&affiliate=").concat(affiliateValue, "&siteurl=").concat(currentpageUrl, "&rowID=").concat(rowID);
  window.location.href = forwardingUrl;
};
var _default = exports.default = handleSubmission;