"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _allowListed = _interopRequireDefault(require("./allowListed"));
it('link is allowListed', () => {
  expect((0, _allowListed.default)('https://www.comicrelief.com/home')).toBe(true);
});
it('link is not allowListed', () => {
  expect((0, _allowListed.default)('https://www.google.co.uk/')).toBe(false);
});