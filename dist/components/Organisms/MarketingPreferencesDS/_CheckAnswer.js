"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _AssociatedFields = _interopRequireDefault(require("./_AssociatedFields"));
var _MarketingPreferencesDS = require("./MarketingPreferencesDS.style");
const CheckAnswer = _ref => {
  let {
    name,
    mpValidationOptions,
    userSelection = null,
    formContext = null
  } = _ref;
  const {
    setValue,
    clearErrors,
    register
  } = formContext;
  const onChange = e => {
    let newVal;
    if (e.target.checked) {
      newVal = e.target.value;
    } else {
      newVal = '';

      // To ensure we're not letting invalid values get passed, reset any associated fields
      // but only when it's not a hidden "passed values behind the scenes" field:
      if (!mpValidationOptions[name].hideInput) {
        const theseFields = _AssociatedFields.default[name].fieldNames;
        theseFields.forEach(fieldName => {
          setValue(fieldName, '');
        });
      }
    }

    // Update the checkbox field itself
    setValue(name, newVal);

    /* If the click represents either a 'none selected' or a 'not required' option
      (set in config), reset errors for all fields associated with this checkbox */
    const reValidate = !mpValidationOptions[name][newVal];
    if (reValidate) {
      const theseFields = _AssociatedFields.default[name].fieldNames;
      theseFields.forEach(fieldName => {
        clearErrors(fieldName);
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.CheckContainer, null, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.CheckLabel, {
    htmlFor: "".concat(name, "-yes"),
    userSelection: userSelection
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.CheckInput, Object.assign({
    type: "checkbox",
    name: name,
    id: "".concat(name, "-yes"),
    value: "yes"
  }, register(name), {
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement("span", null), _AssociatedFields.default[name].label));
};
var _default = exports.default = CheckAnswer;