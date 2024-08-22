"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _react = _interopRequireWildcard(require("react"));
var _TextInputWithDropdown = _interopRequireDefault(require("../../Atoms/TextInputWithDropdown/TextInputWithDropdown"));
// These just felt about right to me but could be changed.
const DELAY_DURATION = 300;
const MIN_CHARS_FOR_FETCH = 2;
const Typeahead = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    optionFetcher,
    optionParser = null,
    onSelect,
    id,
    label,
    name,
    dropdownInstruction = null,
    notFoundMessage,
    fetchErrorHandler = () => 'Sorry, there was an unexpected error. Please try again',
    ...rest
  } = _ref;
  const [options, setOptions] = (0, _react.useState)([]);
  const [errorMsg, setErrorMsg] = (0, _react.useState)('');
  const handleChange = async query => {
    // Resetting options / errorMsg as soon as the input changes seemed to me to be the nicest UX
    // (but happy to take advice on this!)
    setOptions([]);
    setErrorMsg('');
    const queryTrimmed = query.trim();
    if (queryTrimmed.length < MIN_CHARS_FOR_FETCH) {
      return;
    }
    try {
      const newOptions = await optionFetcher(query);
      if (newOptions.length > 0) {
        setOptions(newOptions);
      } else {
        setErrorMsg(notFoundMessage);
      }
    } catch (err) {
      const newErrorMessage = fetchErrorHandler(err);
      setErrorMsg(newErrorMessage || '');
    }
  };

  // useCallback is needed so that the debounced function is not recreated on each render.
  // (Dependency array needs to be empty to ensure that this is the case).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = (0, _react.useCallback)((0, _debounce2.default)(handleChange, DELAY_DURATION), []);
  return /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.default, Object.assign({
    defaultValue: "",
    options: optionParser ? options.map(optionParser) : options,
    errorMsg: errorMsg,
    onChange: e => {
      const newValue = e.currentTarget.value;
      debouncedHandleChange(newValue);
    },
    onSelect: (parsedOption, optionIndex) => {
      // return the original option, not the parsed value
      const selectedOption = options[optionIndex];

      // pass the selected value up to the parent via callback
      onSelect(selectedOption);

      // reset
      setOptions([]);
      setErrorMsg('');
    },
    id: id,
    label: label,
    name: name,
    dropdownInstruction: dropdownInstruction
  }, rest, {
    ref: ref
  }));
});
var _default = exports.default = Typeahead;