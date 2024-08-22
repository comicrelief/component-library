"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var _RichText = _interopRequireDefault(require("../../Atoms/RichText/RichText"));
var _EmailSignUp = require("./_EmailSignUp");
const EmailSignUpForm = () => {
  const validationSchema = (0, _EmailSignUp.buildEsuValidationSchema)({});
  const formMethods = (0, _reactHookForm.useForm)({
    mode: 'onBlur',
    resolver: (0, _yup.yupResolver)(validationSchema)
  });
  const {
    handleSubmit,
    trigger,
    setError
  } = formMethods;
  async function handleSubscribe(data) {
    const valid = await trigger([_EmailSignUp.ESU_FIELDS.EMAIL, _EmailSignUp.ESU_FIELDS.FIRST_NAME, _EmailSignUp.ESU_FIELDS.LAST_NAME]);
    if (valid) {
      // eslint-disable-next-line no-console
      console.log(data);
    } else {
      setError('formError', {
        message: 'Error'
      });
    }
  }
  const title = 'Stay in the know!';
  const topCopy = /*#__PURE__*/_react.default.createElement(_RichText.default, {
    markup: "<p>Get regular email updates and info on what we're up to!</p>"
  });
  const privacyCopy = /*#__PURE__*/_react.default.createElement(_RichText.default, {
    markup: '<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>'
  });
  const successCopy = /*#__PURE__*/_react.default.createElement(_RichText.default, {
    markup: "<p>Thanks! Your first email will be with you shortly</p>"
  });
  return /*#__PURE__*/_react.default.createElement(_reactHookForm.FormProvider, formMethods, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(handleSubscribe),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_EmailSignUp.EmailSignUp, {
    id: "default",
    title: title,
    topCopy: topCopy,
    successCopy: successCopy,
    privacyCopy: privacyCopy,
    formContext: formMethods
  })));
};
var _default = exports.default = EmailSignUpForm;