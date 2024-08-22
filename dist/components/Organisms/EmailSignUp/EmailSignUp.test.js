"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _EmailSignUp = require("./_EmailSignUp");
var _RichText = _interopRequireDefault(require("../../Atoms/RichText/RichText"));
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
const DummyForm = () => {
  const formMethods = (0, _reactHookForm.useForm)({
    mode: "onBlur",
    resolver: (0, _yup.yupResolver)(_EmailSignUp.validationSchema)
  });
  const {
    handleSubmit
  } = formMethods;
  const top = "<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
  const success = "<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
  const privacy = 'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';
  return /*#__PURE__*/_react.default.createElement(_reactHookForm.FormProvider, formMethods, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(() => true),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_EmailSignUp.EmailSignUp, {
    title: "sign up letter",
    topCopy: /*#__PURE__*/_react.default.createElement(_RichText.default, {
      markup: top
    }),
    successCopy: /*#__PURE__*/_react.default.createElement(_RichText.default, {
      markup: success
    }),
    privacyCopy: /*#__PURE__*/_react.default.createElement(_RichText.default, {
      markup: privacy
    }),
    formContext: formMethods
  })));
};
it("renders correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(DummyForm, null)).toJSON();
  expect(tree).toMatchSnapshot();
});