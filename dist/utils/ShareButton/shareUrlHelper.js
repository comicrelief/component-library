"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* Determine where to grab the URL, depending on the component type and values supplied */
const shareUrlHelper = (urlToShare, typeOfShare) => {
  // Encode the URL so we can happily pass it as a parameter, fragments and all
  const urlToShareEncoded = encodeURIComponent(urlToShare);

  // Construct all share urls
  const shareURLs = {
    Twitter: "http://www.twitter.com/intent/tweet?url=".concat(urlToShareEncoded),
    Facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(urlToShareEncoded)
  };
  return shareURLs[typeOfShare];
};
var _default = exports.default = shareUrlHelper;