"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const allowList = ['https://giftaid.comicrelief.com', 'https://donation.comicrelief.com', 'https://www.comicrelief.com', 'https://www.sportrelief.com', 'https://app.beapplied.com/org/comic-relief', 'stories.comicrelief.com', 'https://form.typeform.com'];
const allowListed = url => {
  if (url !== undefined && url !== null && allowList.some(v => url.indexOf(v) >= 0)) {
    return true;
  }
  return false;
};
var _default = exports.default = allowListed;