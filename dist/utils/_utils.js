"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const handlePadding = paddingOption => {
  switch (paddingOption) {
    case 'upper_off':
      return 'padding-top: 0;';
    case 'lower_off':
      return 'padding-bottom: 0;';
    case 'both_off':
      return 'padding-top: 0; padding-bottom: 0';
    // To leave pre-existing styles untouched
    case 'both_on':
      return null;
    // Just in case
    default:
      return null;
  }
};
var _default = exports.default = handlePadding;