"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("../Input/Input"));
var _Text = _interopRequireDefault(require("../Text/Text"));
var _TextInputWithDropdown = require("./TextInputWithDropdown.style");
const KEY_CODE_ENTER = 13;
const KEY_CODE_SPACE = 32;
const KEY_CODE_UP = 38;
const KEY_CODE_DOWN = 40;
const KEY_CODE_ESCAPE = 27;

/**
 * This component deals with the visual aspect of a text input with typeahead-style functionality
 *
 * API querying and state management (aside from that related to keyboard usage/accessibility) are
 *  handled by the parent component (options, onChange and onSelect props)
 *
 * See the Typeahead and SchoolLookup molecules for the full implementation
 */
const TextInputWithDropdown = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    options,
    onChange,
    onSelect,
    id,
    name,
    label,
    dropdownInstruction = null,
    className = '',
    ...otherInputProps
  } = _ref;
  const [activeOption, setActiveOption] = (0, _react.useState)(-1);
  const [forceClosed, setForceClosed] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // reset if options change
    setActiveOption(-1);
    setForceClosed(false);
  }, [options]);
  const down = () => activeOption < options.length - 1 ? setActiveOption(activeOption + 1) : setActiveOption(0);
  const up = () => activeOption < 1 ? setActiveOption(options.length - 1) : setActiveOption(activeOption - 1);
  const navigateOptions = e => {
    if (options.length === 0) {
      return;
    }
    const keyCode = e.keyCode || e.which;
    if (keyCode === KEY_CODE_DOWN) {
      e.preventDefault();
      down();
    } else if (keyCode === KEY_CODE_UP) {
      e.preventDefault();
      up();
    } else if (keyCode === KEY_CODE_ESCAPE) {
      setForceClosed(true);
    }
  };
  const inputProps = {
    onChange,
    id,
    name,
    label,
    autoComplete: 'off',
    type: 'text',
    ...otherInputProps
  };
  const optionsProps = {
    options,
    onSelect,
    dropdownInstruction,
    activeOption,
    resetActiveOption: () => setActiveOption(-1)
  };
  return /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.Container, {
    className: "TextInputWithDropdown ".concat(className).trim(),
    onKeyDown: navigateOptions
  }, /*#__PURE__*/_react.default.createElement(_Input.default, Object.assign({}, inputProps, {
    className: "TextInputWithDropdown__input",
    ref: ref
  })), options.length > 0 && forceClosed === false && /*#__PURE__*/_react.default.createElement(Options, Object.assign({}, optionsProps, {
    className: "TextInputWithDropdown__options"
  })));
});
const Options = _ref2 => {
  let {
    options,
    dropdownInstruction,
    onSelect,
    activeOption,
    resetActiveOption,
    ...rest
  } = _ref2;
  // Reset 'activeOption' when the list is unfocused.
  const onBlur = e => {
    const {
      target
    } = e;
    // There's a delay before the new activeOption becomes the document.activeElement when
    //  scrolling through the dropdown list via keyboard.
    setTimeout(() => {
      if (document.activeElement.parentNode !== target.parentNode) {
        resetActiveOption();
      }
    }, 100);
  };
  return /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.Dropdown, rest, /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.DropdownList, {
    role: "listbox",
    onBlur: onBlur,
    "aria-activedescendant": activeOption > -1 ? "option-".concat(activeOption) : undefined
  }, dropdownInstruction && /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.DropdownItem, {
    role: "option"
  }, /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.TextItalic, null, dropdownInstruction)), options.map((option, index) => /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.DropdownItemSelectable, {
    id: "option-".concat(index),
    role: "option",
    key: option,
    onClick: () => onSelect(option, index),
    onKeyPress: e => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === KEY_CODE_SPACE || keyCode === KEY_CODE_ENTER) {
        onSelect(option, index);
      }
    },
    tabIndex: "-1",
    "aria-selected": index === activeOption,
    ref: index === activeOption ? element => element && element.focus() : null
  }, /*#__PURE__*/_react.default.createElement(_Text.default, null, option)))));
};
var _default = exports.default = TextInputWithDropdown;