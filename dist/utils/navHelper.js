"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* Determine where to grab the URL, depending on the component type and values supplied */
const NavHelper = navItem => {
  /* Default url path location for 'Pages' */
  let thisUrl = navItem.path;
  if (navItem.internal.type === 'ContentfulComponentLink') {
    thisUrl = navItem.reference && navItem.reference.path ? navItem.reference.path : navItem.url;
  }
  return thisUrl;
};
var _default = exports.default = NavHelper;