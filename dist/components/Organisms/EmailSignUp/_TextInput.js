"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("../../Atoms/Input/Input"));
// TODO: This is a copy paste of the RHF friendly `TextInput` from Marketing Prefs.
// Perhaps it would be worthwhile refactoring this into a new `Atom` as a seperate PR.
const TextInput = _ref => {
  let {
    fieldName,
    label,
    optional = null,
    fieldType = 'text',
    formContext = null,
    ...rest
  } = _ref;
  const {
    formState: {
      errors
    },
    register
  } = formContext;
  const props = {
    name: fieldName,
    type: fieldType,
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName] && errors[fieldName].message,
    optional,
    'aria-required': !optional,
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement(_Input.default, Object.assign({}, props, register(fieldName)));
};
var _default = exports.default = TextInput;