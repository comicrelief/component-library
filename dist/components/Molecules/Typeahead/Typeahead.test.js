"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _axios = _interopRequireDefault(require("axios"));
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Typeahead = _interopRequireDefault(require("./Typeahead"));
const schoolsLookup = async query => {
  const response = await _axios.default.get('https://lookups.sls.comicrelief.com/schools/lookup', {
    params: {
      query
    }
  });
  return response.data.data.schools.map(school => school.name);
};
it('renders correctly', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Typeahead.default, {
    optionFetcher: schoolsLookup,
    onSelect: () => {},
    id: "typeahead-test",
    label: "Typeahead test",
    name: "q",
    placeholder: "Type to start searching...",
    notFoundMessage: "Sorry, we couldn't find anything"
  }));
  expect(renderer.toJSON()).toMatchSnapshot();
});