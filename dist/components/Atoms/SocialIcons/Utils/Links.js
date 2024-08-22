"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Get social media links by campaign
 * @param  {string} campaign
 * @return {object}
 */
var _default = campaign => ({
  facebook: {
    url: "https://www.facebook.com/".concat(campaign),
    title: 'Check out our Facebook page'
  },
  twitter: {
    url: "https://twitter.com/".concat(campaign),
    title: 'Check out our Twitter account'
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw',
    title: 'Check out our YouTube channel'
  },
  instagram: {
    url: "https://www.instagram.com/".concat(campaign),
    title: 'Check out our Instagram account'
  }
});
exports.default = _default;