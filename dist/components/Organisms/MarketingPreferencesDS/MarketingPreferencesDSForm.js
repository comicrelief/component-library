"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _MarketingPreferencesDS = require("./_MarketingPreferencesDS");
/**
 * Normal usage would be a single instance of the Marketing Preferences, but we're creating two here
 * to illustrate the difference in config options; see _MarketingPrefsConfig.js for more details.
 */
/* Create default validation and initial values by not passing any override
 parameters into the functions: */
const mpValidation = (0, _MarketingPreferencesDS.buildValidationSchema)();
const initialValues = (0, _MarketingPreferencesDS.setInitialValues)();
const {
  mpValidationSchema,
  mpValidationOptions
} = mpValidation;

// Or customise and override the config to suit the destination app's requirements:
const initalValueOverrides = {
  mp_email: 'user@website.com' // Potentially provided earlier in the journey
};

const validationOverrides = {
  mp_permissionEmail: {
    hideInput: true
  },
  // As we're passing a value above, hide the user input
  mp_permissionSMS: {
    disableOption: true
  },
  // Remove this option entirely
  mp_permissionPost: {
    no: false
  } // Make Post fields non-req (so not shown) when 'No' selected
};

// Pass these override objects in as parameters
const mpValidationCustom = (0, _MarketingPreferencesDS.buildValidationSchema)(validationOverrides);
const initialValuesCustom = (0, _MarketingPreferencesDS.setInitialValues)(initalValueOverrides);
const {
  mpValidationSchema: mpValidationSchemaCustom,
  mpValidationOptions: mpValidationOptionsCustom
} = mpValidationCustom;
const MarketingPreferencesDSForm = () => {
  function customSubmitHandler(formData) {
    // eslint-disable-next-line no-console
    console.log('Successful submission', formData);
  }

  // For our default instance:
  const formMethods = (0, _reactHookForm.useForm)({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: (0, _yup.yupResolver)(mpValidationSchema)
  });
  const {
    handleSubmit
  } = formMethods;

  // For our customised-instance:
  const formMethodsCustom = (0, _reactHookForm.useForm)({
    mode: 'onBlur',
    defaultValues: initialValuesCustom,
    resolver: (0, _yup.yupResolver)(mpValidationSchemaCustom)
  });
  const {
    handleSubmit: handleSubmitCustom
  } = formMethodsCustom;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    weight: "bold"
  }, "Our default instance:"), /*#__PURE__*/_react.default.createElement(_reactHookForm.FormProvider, formMethods, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(customSubmitHandler),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MarketingPreferencesDS, {
    mpValidationOptions: mpValidationOptions,
    id: "default",
    formContext: formMethods
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit"
  }))), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3",
    size: "xl"
  }, "- - - - - - - - - - - - - "), /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p",
    weight: "bold"
  }, "Our customised instance:"), /*#__PURE__*/_react.default.createElement(_reactHookForm.FormProvider, formMethodsCustom, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmitCustom(customSubmitHandler),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_MarketingPreferencesDS.MarketingPreferencesDS, {
    mpValidationOptions: mpValidationOptionsCustom,
    id: "custom",
    formContext: formMethodsCustom
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit"
  }))));
};
var _default = exports.default = MarketingPreferencesDSForm;