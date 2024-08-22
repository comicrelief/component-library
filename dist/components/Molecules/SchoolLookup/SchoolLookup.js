"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _Typeahead = _interopRequireDefault(require("../Typeahead/Typeahead"));
const optionFetcher = async query => {
  const response = await _axios.default.get('https://lookups.sls.comicrelief.com/schools/lookup', {
    params: {
      query
    },
    timeout: 3000
  });
  return response.data.data.schools;
};
const optionParser = school => "".concat(school.name, ", ").concat(school.post_code);
const SchoolLookup = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    label = 'Enter the name or postcode of your school or nursery',
    placeholder = 'Type to start search',
    dropdownInstruction = 'Please select a school from the list below',
    notFoundMessage = "Sorry, we can't find this school",
    onSelect,
    ...rest
  } = _ref;
  const props = {
    optionFetcher,
    optionParser,
    onSelect,
    id: 'school-lookup',
    name: 'school-lookup',
    label,
    placeholder,
    notFoundMessage,
    dropdownInstruction,
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement(_Typeahead.default, Object.assign({}, props, {
    ref: ref
  }));
});
var _default = exports.default = SchoolLookup;