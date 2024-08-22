"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Donate = _interopRequireDefault(require("./Donate"));
var _data = _interopRequireDefault(require("./dev-data/data"));
var _dataSingle = _interopRequireDefault(require("./dev-data/data-single"));
const defaultData = require('../../../styleguide/data/data').defaultData;
it('Monthly donation renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Donate.default, {
    alt: "Background image",
    backgroundColor: "blue_dark",
    formAlignRight: true,
    imageLow: defaultData.pictures.imageLow,
    images: defaultData.pictures.images,
    data: _data.default,
    mbshipID: "mship-1",
    donateLink: "https://donation.comicrelief.com/",
    clientID: "donate",
    cartID: "default-comicrelief",
    title: "Donate Now",
    subtitle: "Please help us fund life-changing projects in the UK and around the world.",
    otherDescription: "will help us fund amazing projects in the UK and around the world."
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('Single donation renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Donate.default, {
    backgroundColor: "blue_dark",
    formAlignRight: false,
    imageLow: defaultData.pictures.imageLow,
    images: defaultData.pictures.images,
    data: _dataSingle.default,
    mbshipID: "mship-1",
    donateLink: "https://donation.comicrelief.com/",
    clientID: "donate",
    cartID: "default-comicrelief",
    title: "Donate Now",
    subtitle: "Please help us fund life-changing projects in the UK and around the world.",
    otherDescription: "will help us fund amazing projects in the UK and around the world."
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('Single donation with no Money Buys renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Donate.default, {
    backgroundColor: "blue_dark",
    formAlignRight: false,
    imageLow: defaultData.pictures.imageLow,
    images: defaultData.pictures.images,
    data: _dataSingle.default,
    mbshipID: "mship-1",
    donateLink: "https://donation.comicrelief.com/",
    clientID: "donate",
    cartID: "default-comicrelief",
    title: "Donate Now",
    noMoneyBuys: true,
    subtitle: "Please help us fund life-changing projects in the UK and around the world.",
    otherDescription: "will help us fund amazing projects in the UK and around the world.",
    chooseAmountText: "Overridden via the 'choose amount text' props"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('"Single Giving, No Money Buys, with overridden manual input value" renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Donate.default, {
    mobileBackgroundColor: "blue_dark",
    desktopOverlayColor: "blue_dark",
    formAlignRight: false,
    imageLow: defaultData.pictures.imageLow,
    images: defaultData.pictures.images,
    data: _data.default,
    mbshipID: "mship-4",
    donateLink: "https://donation.comicrelief.com/",
    clientID: "donate",
    cartID: "default-comicrelief",
    title: "Donate Now",
    noMoneyBuys: true,
    subtitle: "Please help us fund life-changing projects in the UK and around the world.",
    otherAmountValue: 345.67
  })).toJSON();
  expect(tree).toMatchSnapshot();
});