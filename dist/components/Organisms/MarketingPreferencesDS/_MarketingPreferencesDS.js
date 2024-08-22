"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarketingPreferencesDS = void 0;
Object.defineProperty(exports, "buildValidationSchema", {
  enumerable: true,
  get: function () {
    return _MarketingPrefsConfig.buildValidationSchema;
  }
});
Object.defineProperty(exports, "setInitialValues", {
  enumerable: true,
  get: function () {
    return _MarketingPrefsConfig.setInitialValues;
  }
});
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHookForm = require("react-hook-form");
var _CheckAnswer = _interopRequireDefault(require("./_CheckAnswer"));
var _DefaultCopy = require("./_DefaultCopy");
var _MarketingPreferencesDS = require("./MarketingPreferencesDS.style");
var _MarketingPrefsConfig = require("./_MarketingPrefsConfig");
const MarketingPreferencesDS = _ref => {
  let {
    copyTop = _DefaultCopy.defaultCopyTop,
    copyBottom = _DefaultCopy.defaultCopyBottom,
    mpValidationOptions,
    id = null,
    formContext = null
  } = _ref;
  const {
    formState: {
      errors
    },
    control
  } = formContext;

  // For brevity
  const emailChoice = (0, _reactHookForm.useWatch)({
    control,
    name: 'mp_permissionEmail',
    defaultValue: null
  });
  const postChoice = (0, _reactHookForm.useWatch)({
    control,
    name: 'mp_permissionPost',
    defaultValue: null
  });
  const phoneChoice = (0, _reactHookForm.useWatch)({
    control,
    name: 'mp_permissionPhone',
    defaultValue: null
  });
  const smsChoice = (0, _reactHookForm.useWatch)({
    control,
    name: 'mp_permissionSMS',
    defaultValue: null
  });
  const {
    // eslint-disable-next-line camelcase
    mp_permissionEmail,
    mp_permissionSMS,
    mp_permissionPhone,
    mp_permissionPost
  } = mpValidationOptions;

  // If the field is not required for each No/Yes choice, remove it from the DOM entirely
  const disableEmailInput = mp_permissionEmail.yes === false && emailChoice.includes('yes');
  const disableSMSInput = mp_permissionSMS.yes === false && smsChoice.includes('yes');
  const disablePhoneInput = mp_permissionPhone.yes === false && phoneChoice.includes('yes');
  const disablePostInput = mp_permissionPost.yes === false && postChoice.includes('yes');

  // Required to track multiple errors to determine whether to show/hide the fieldset
  const isAddressErroring = () => {
    if ((0, _isEmpty2.default)(errors)) {
      return null;
    }
    return errors.mp_address1 || errors.mp_address2 || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode;
  };
  /* Only show the field if config hasn't hidden it (to pass in parent values)
    or if a choice has been made */
  const showEmailField = !mp_permissionEmail.hideInput && (emailChoice || errors.mp_email);
  const showSMSField = !mp_permissionSMS.hideInput && (smsChoice || errors.mp_mobile);
  const showPhoneField = !mp_permissionPhone.hideInput && (phoneChoice || errors.mp_phone);
  const showPostFields = !mp_permissionPost.hideInput && (postChoice || isAddressErroring());
  const customId = id ? "marketing-preferences--".concat(id) : 'marketing-preferences';
  return /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.OuterWrapper, {
    id: customId
  }, copyTop && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.TopCopyWrapper, null, copyTop), !mp_permissionEmail.disableOption && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.FormField, {
    className: "field-email"
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.Head, null, /*#__PURE__*/_react.default.createElement(_CheckAnswer.default, {
    mpValidationOptions: mpValidationOptions,
    name: "mp_permissionEmail",
    id: "mp_permissionEmail",
    userSelection: emailChoice,
    formContext: formContext
  })), /*#__PURE__*/_react.default.createElement(MaybeDisabled, {
    disabled: disableEmailInput
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ShowHideInputWrapper, {
    show: showEmailField
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ExtraInfo, null, "Please confirm the email address we will use to", /*#__PURE__*/_react.default.createElement("b", null, " email "), "you:"), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_email",
    label: "Please enter your email address"
    // Dynamically update the field attr based on config for current choice
    ,
    optional: !mp_permissionEmail[emailChoice],
    type: "email",
    id: "mp_email",
    formContext: formContext
  })))), !mp_permissionPost.disableOption && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.FormField, {
    className: "field-post"
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.Head, null, /*#__PURE__*/_react.default.createElement(_CheckAnswer.default, {
    name: "mp_permissionPost",
    mpValidationOptions: mpValidationOptions,
    id: "mp_permissionPost",
    userSelection: postChoice,
    formContext: formContext
  })), /*#__PURE__*/_react.default.createElement(MaybeDisabled, {
    disabled: disablePostInput
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ShowHideInputWrapper, {
    show: showPostFields
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ExtraInfo, null, "Please confirm the address we will use to", /*#__PURE__*/_react.default.createElement("b", null, " post "), "to you:"), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_address1",
    label: "Address Line 1",
    optional: !mp_permissionPost[postChoice],
    id: "mp_address1",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_address2",
    label: "Address Line 2",
    optional: true,
    id: "mp_address2",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_address3",
    label: "Address Line 3",
    optional: true,
    id: "mp_address3",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_town",
    label: "Town/City",
    optional: !mp_permissionPost[postChoice],
    id: "mp_town",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_postcode",
    label: "Postcode",
    optional: !mp_permissionPost[postChoice],
    id: "mp_postcode",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_country",
    label: "Country",
    optional: !mp_permissionPost[postChoice],
    id: "mp_country",
    formContext: formContext
  })))), !mp_permissionSMS.disableOption && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.FormField, {
    className: "field-sms"
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.Head, null, /*#__PURE__*/_react.default.createElement(_CheckAnswer.default, {
    name: "mp_permissionSMS",
    id: "mp_permissionSMS",
    mpValidationOptions: mpValidationOptions,
    userSelection: smsChoice,
    formContext: formContext
  })), /*#__PURE__*/_react.default.createElement(MaybeDisabled, {
    disabled: disableSMSInput
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ShowHideInputWrapper, {
    show: showSMSField
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ExtraInfo, null, "Please confirm the mobile number we will use to", /*#__PURE__*/_react.default.createElement("b", null, " text "), "you on:"), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_mobile",
    label: "Please enter your mobile no.",
    optional: !mp_permissionSMS[smsChoice],
    id: "mp_mobile",
    formContext: formContext
  })))), !mp_permissionPhone.disableOption && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.FormField, {
    className: "field-phone"
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.Head, null, /*#__PURE__*/_react.default.createElement(_CheckAnswer.default, {
    name: "mp_permissionPhone",
    mpValidationOptions: mpValidationOptions,
    id: "mp_permissionPhone",
    userSelection: phoneChoice,
    formContext: formContext
  })), /*#__PURE__*/_react.default.createElement(MaybeDisabled, {
    disabled: disablePhoneInput
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ShowHideInputWrapper, {
    show: showPhoneField
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.ExtraInfo, null, "Please confirm the telephone number we will use to", /*#__PURE__*/_react.default.createElement("b", null, " phone "), "you on:"), /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MPTextInput, {
    placeholder: "",
    fieldName: "mp_phone",
    label: "Please enter your phone no.",
    optional: !mp_permissionPhone[phoneChoice],
    id: "mp_phone",
    formContext: formContext
  })))), copyBottom && /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.BottomCopyWrapper, null, copyBottom));
};

// removes from DOM completely
exports.MarketingPreferencesDS = MarketingPreferencesDS;
const MaybeDisabled = _ref2 => {
  let {
    children = null,
    disabled = false
  } = _ref2;
  if (disabled) return null;
  return children;
};
MaybeDisabled.propTypes = {
  children: _propTypes.default.node,
  disabled: _propTypes.default.bool
};