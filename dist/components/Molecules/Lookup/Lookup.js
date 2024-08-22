"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _TextInputWithDropdown = _interopRequireDefault(require("../../Atoms/TextInputWithDropdown/TextInputWithDropdown"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _ButtonWithStates = _interopRequireDefault(require("../../Atoms/ButtonWithStates/ButtonWithStates"));
const StyledButton = (0, _styledComponents.default)(_ButtonWithStates.default).withConfig({
  displayName: "Lookup__StyledButton",
  componentId: "sc-uu5bpv-0"
})(["", ""], _ref => {
  let {
    theme
  } = _ref;
  return (0, _styledComponents.css)(["color:", ";border:2px solid ", ";background-color:", ";padding-left:", ";padding-right:", ";&:hover{color:", ";background-color:", ";}"], theme.color('grey_dark'), theme.color('grey_dark'), theme.color('white'), (0, _spacing.default)('lg'), (0, _spacing.default)('lg'), theme.color('grey_dark'), theme.color('white'));
});
const KEY_CODE_ENTER = 13;

/**
 * A simple lookup component
 *
 * The `lookupHandler` should be an async function which is called when a lookup is triggered
 *  (either by hitting enter or clicking the button)
 *
 * It will receive the current search term and should:
 * - take care of any validation on the search term
 * - perform the actual lookup request
 * - return an array of options (or an empty array if none were found)
 * - only throw errors with user-friendly messages
 *
 * Any errors thrown will be caught and the message will be displayed to the user.
 *
 * The `onSelect` function will receive the chosen option.
 *
 * @param name
 * @param label
 * @param placeholder
 * @param buttonText
 * @param lookupHandler
 * @param mapOptionToString
 * @param onSelect
 * @param noResultsMessage
 * @param dropdownInstruction
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Lookup = _ref2 => {
  let {
    name,
    label,
    placeholder,
    buttonText,
    lookupHandler,
    mapOptionToString,
    onSelect,
    noResultsMessage = 'Sorry, could not find any results for your search',
    dropdownInstruction = '',
    ...rest
  } = _ref2;
  const [query, setQuery] = (0, _react.useState)('');
  const [errorMessage, setErrorMessage] = (0, _react.useState)('');
  const [options, setOptions] = (0, _react.useState)([]);
  const [isSearching, setIsSearching] = (0, _react.useState)(false);
  const handler = (0, _react.useCallback)(async () => {
    setErrorMessage('');
    setIsSearching(true);
    try {
      // If lookupHandler throws an error, the message will be displayed to the user
      const results = await lookupHandler(query);
      setOptions(results);
      if (results.length === 0) {
        setErrorMessage(noResultsMessage);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSearching(false);
  }, [query, setOptions, setErrorMessage, noResultsMessage, lookupHandler]);
  return /*#__PURE__*/_react.default.createElement("div", rest, /*#__PURE__*/_react.default.createElement(_StyledTextInputWithDropdown, {
    name: name,
    id: name,
    value: query,
    options: options.map(mapOptionToString),
    label: label,
    placeholder: placeholder,
    onChange: e => {
      setQuery(e.target.value);
      setErrorMessage('');
      setOptions([]);
    },
    onKeyPress: e => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === KEY_CODE_ENTER) {
        e.preventDefault();
        return handler();
      }
      return null;
    },
    onSelect: (text, index) => {
      const selection = options[index];
      onSelect(selection);
      setQuery('');
      setErrorMessage('');
      setOptions([]);
    },
    errorMsg: errorMessage,
    dropdownInstruction: dropdownInstruction,
    $_css: (0, _spacing.default)('md')
  }), /*#__PURE__*/_react.default.createElement(StyledButton, {
    type: "button",
    onClick: () => handler(),
    loading: isSearching,
    disabled: isSearching,
    loadingText: "Searching"
  }, buttonText));
};
var _default = exports.default = Lookup;
var _StyledTextInputWithDropdown = (0, _styledComponents.default)(_TextInputWithDropdown.default).withConfig({
  displayName: "Lookup___StyledTextInputWithDropdown",
  componentId: "sc-uu5bpv-1"
})(p => ({
  marginBottom: p.$_css
}));