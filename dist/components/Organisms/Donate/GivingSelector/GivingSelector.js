"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _GivingSelector = require("./GivingSelector.style");
const GivingSelector = _ref => {
  let {
    givingType = null,
    changeGivingType,
    setPopOpen,
    mbshipID
  } = _ref;
  // Only updates giving type and popup status when appropriate
  const handleGivingTypeChange = (thisButtonType, currentGivingType) => {
    if (currentGivingType !== thisButtonType) {
      changeGivingType(thisButtonType);
      setPopOpen(thisButtonType === 'single');
    }
  };
  return /*#__PURE__*/_react.default.createElement(_GivingSelector.Wrapper, null, /*#__PURE__*/_react.default.createElement(_GivingSelector.MoneyBox, null, /*#__PURE__*/_react.default.createElement("input", {
    className: "give-once",
    "aria-label": "Single",
    id: "give-once--".concat(mbshipID),
    value: "Single",
    type: "radio",
    label: "",
    checked: givingType === 'single',
    onClick: () => handleGivingTypeChange('single', givingType)
  }), /*#__PURE__*/_react.default.createElement(_GivingSelector.Label, {
    active: givingType === 'single',
    htmlFor: "give-once--".concat(mbshipID)
  }, "Single"), /*#__PURE__*/_react.default.createElement("input", {
    className: "give-monthly",
    "aria-label": "Monthly",
    id: "give-monthly--".concat(mbshipID),
    value: "Monthly",
    type: "radio",
    label: "",
    checked: givingType === 'monthly',
    onClick: () => handleGivingTypeChange('monthly', givingType)
  }), /*#__PURE__*/_react.default.createElement(_GivingSelector.Label, {
    active: givingType === 'monthly',
    htmlFor: "give-monthly--".concat(mbshipID)
  }, "Monthly"), /*#__PURE__*/_react.default.createElement(_GivingSelector.Switch, null)));
};
var _default = exports.default = GivingSelector;