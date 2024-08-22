"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactResponsive = require("react-responsive");
var _allBreakpoints = require("../../../theme/shared/allBreakpoints");
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Picture = _interopRequireDefault(require("../../Atoms/Picture/Picture"));
var _Form = _interopRequireDefault(require("./Form/Form"));
var _utils = require("./_utils");
var _Donate = require("./Donate.style");
const Donate = _ref => {
  let {
    alt = '',
    data = {},
    formAlignRight = true,
    imageLow = null,
    image = null,
    images = null,
    mobileImageLow = null,
    mobileImage = null,
    mobileImages = null,
    mobileAlt = '',
    desktopOverlayColor = 'transparent',
    mobileBackgroundColor = 'blue_dark',
    submitButtonColor = 'red',
    textColor = 'white',
    mbshipID = null,
    otherAmountText = 'will help us fund amazing projects in the UK and around the world.',
    subtitle = '',
    noMoneyBuys = false,
    PopUpText = 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
    chooseAmountText = '',
    isDesktopOverride = null,
    otherAmountValue = null,
    title = null,
    additionalSingleCopy = null,
    additionalMonthlyCopy = null,
    defaultGivingType = null,
    monthlyTitle = '',
    monthlySubtitle = '',
    cartID,
    clientID,
    paddingOption = null,
    donateLink,
    monthlyChooseAmountText: monthlyChoose = '',
    monthlyOtherAmountText: monthlyOther = ''
  } = _ref;
  let isDesktop = (0, _reactResponsive.useMediaQuery)({
    query: "(min-width: ".concat(_allBreakpoints.breakpointValues.L, "px)")
  });

  // To let us store any updated override, and force a re-render
  const [overrideValue, setOverrideValue] = (0, _react.useState)(null);
  const [givingType, setGivingType] = (0, _react.useState)();

  // Store the updated override value
  (0, _react.useEffect)(() => {
    setOverrideValue(isDesktopOverride);
  }, [isDesktopOverride]);

  // If a boolean value has been passed, let it replace our 'internal' value
  isDesktop = overrideValue !== null ? overrideValue : isDesktop;

  // Handy helper functions to process copy, based on givingType
  const {
    showCopy,
    thisTitle,
    thisSubtitle,
    noTitlesAtAll
  } = (0, _utils.handleTitles)(givingType, title, subtitle, monthlyTitle, monthlySubtitle);
  const {
    thisOtherAmountText,
    thisChooseAmountText
  } = (0, _utils.handleCopy)(givingType, otherAmountText, chooseAmountText, monthlyOther, monthlyChoose);
  return /*#__PURE__*/_react.default.createElement(_Donate.Container, {
    mobileBackgroundColor: mobileBackgroundColor,
    desktopOverlayColor: desktopOverlayColor,
    id: mbshipID,
    key: overrideValue
  }, !isDesktop && mobileImages ? /*#__PURE__*/_react.default.createElement(_Picture.default, {
    backgroundColor: mobileBackgroundColor,
    image: mobileImage,
    images: mobileImages,
    imageLow: mobileImageLow,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    alt: mobileAlt
  }) : null, isDesktop && images ? /*#__PURE__*/_react.default.createElement(_Donate.BgImage, {
    backgroundColor: desktopOverlayColor,
    image: image,
    images: images,
    imageLow: imageLow,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    alt: alt,
    isBackgroundImage: true
  }) : null, /*#__PURE__*/_react.default.createElement(_Donate.Wrapper, {
    formAlignRight: formAlignRight,
    "aria-live": "polite",
    noTitlesAtAll: noTitlesAtAll,
    paddingOption: paddingOption
  }, !noTitlesAtAll && /*#__PURE__*/_react.default.createElement(_Donate.TitleWrapperOuter, {
    formAlignRight: formAlignRight,
    "data-test": "this-one-here"
  }, /*#__PURE__*/_react.default.createElement(_Donate.TitleWrapperInner, null, showCopy && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h2",
    color: textColor,
    size: "big",
    family: "Anton",
    weight: "normal",
    uppercase: true
  }, thisTitle), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    color: textColor,
    size: "m"
  }, thisSubtitle)))), /*#__PURE__*/_react.default.createElement(_Form.default, {
    data: data,
    otherAmountText: thisOtherAmountText,
    cartID: cartID,
    clientID: clientID,
    mbshipID: mbshipID,
    donateLink: donateLink,
    noMoneyBuys: noMoneyBuys,
    PopUpText: PopUpText,
    chooseAmountText: thisChooseAmountText,
    submitButtonColor: submitButtonColor,
    otherAmountValue: otherAmountValue,
    additionalSingleCopy: additionalSingleCopy,
    additionalMonthlyCopy: additionalMonthlyCopy,
    defaultGivingType: defaultGivingType,
    givingType: givingType,
    changeGivingType: setGivingType
  })));
};
var _default = exports.default = Donate;