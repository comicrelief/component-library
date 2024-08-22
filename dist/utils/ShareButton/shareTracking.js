"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const shareTracking = channel => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event: 'btn_social-share',
    action: channel
  });
};
var _default = exports.default = shareTracking;