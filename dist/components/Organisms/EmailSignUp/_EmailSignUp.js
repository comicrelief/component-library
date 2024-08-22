"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ESU_FIELDS", {
  enumerable: true,
  get: function () {
    return _EmailSignUpConfig.ESU_FIELDS;
  }
});
exports.EmailSignUp = void 0;
Object.defineProperty(exports, "buildEsuValidationSchema", {
  enumerable: true,
  get: function () {
    return _EmailSignUpConfig.buildEsuValidationSchema;
  }
});
var _react = _interopRequireDefault(require("react"));
var _EmailSignUp = require("./EmailSignUp.style");
var _ButtonWithStates = _interopRequireDefault(require("../../Atoms/ButtonWithStates/ButtonWithStates"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _EmailSignUpConfig = require("./_EmailSignUpConfig");
var _ErrorText = _interopRequireDefault(require("../../Atoms/ErrorText/ErrorText"));
var _Confetti = _interopRequireDefault(require("../../Atoms/Confetti/Confetti"));
const EmailSignUp = _ref => {
  let {
    title,
    topCopy,
    successCopy,
    privacyCopy,
    backgroundColour = 'deep_violet_dark',
    buttonColour = 'red',
    formContext,
    columnLayout = false,
    ...rest
  } = _ref;
  const {
    formState: {
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      errors
    }
  } = formContext;
  return /*#__PURE__*/_react.default.createElement(_EmailSignUp.ESUWrapper, Object.assign({
    backgroundColour: backgroundColour
  }, rest), /*#__PURE__*/_react.default.createElement(_EmailSignUp.Title, {
    tag: "h2",
    size: "xxl",
    weight: "400",
    family: "Anton",
    uppercase: true
  }, title), !isSubmitted ? /*#__PURE__*/_react.default.createElement(_EmailSignUp.TopCopyWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, null, topCopy)) : isSubmitSuccessful && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Confetti.default, {
    trigger: isSubmitSuccessful
  }), /*#__PURE__*/_react.default.createElement(_EmailSignUp.TopCopyWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, null, successCopy))), !isSubmitSuccessful && /*#__PURE__*/_react.default.createElement(_EmailSignUp.FormInner, null, /*#__PURE__*/_react.default.createElement(_EmailSignUp.NameWrapper, {
    columnLayout: columnLayout
  }, /*#__PURE__*/_react.default.createElement(_EmailSignUp.InputField, {
    fieldName: _EmailSignUpConfig.ESU_FIELDS.FIRST_NAME,
    id: "first-name",
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_EmailSignUp.InputField, {
    fieldName: _EmailSignUpConfig.ESU_FIELDS.LAST_NAME,
    id: "last-name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    formContext: formContext
  })), /*#__PURE__*/_react.default.createElement(_EmailSignUp.InputField, {
    fieldName: _EmailSignUpConfig.ESU_FIELDS.EMAIL,
    id: "email",
    type: "email",
    label: "Email Address",
    placeholder: "example@youremail.com",
    formContext: formContext
  }), /*#__PURE__*/_react.default.createElement(_EmailSignUp.ButtonWrapper, {
    buttonColour: buttonColour
  }, /*#__PURE__*/_react.default.createElement(_ButtonWithStates.default, {
    type: "submit",
    disabled: !isValid || isSubmitting,
    loading: isSubmitting,
    loadingText: "Submitting...",
    "data-test": "subscribe-button"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, null, "Subscribe")))), isSubmitted && !isSubmitSuccessful && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, errors.formError !== undefined && /*#__PURE__*/_react.default.createElement(_ErrorText.default, null, errors.formError.message)), /*#__PURE__*/_react.default.createElement(_EmailSignUp.PrivacyCopyWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, null, privacyCopy)));
};
exports.EmailSignUp = EmailSignUp;