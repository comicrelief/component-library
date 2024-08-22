"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _TextInputWithDropdown = _interopRequireDefault(require("./TextInputWithDropdown"));
var _TextInputWithDropdown2 = require("./TextInputWithDropdown.style");
it('renders correctly with no value and no options', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.default, {
    value: "",
    id: "text-input-with-dropdown",
    label: "Search for bikes",
    name: "query",
    onChange: () => {},
    onSelect: () => {},
    options: []
  }));
  expect(renderer.toJSON()).toMatchSnapshot();
  expect(() => renderer.root.findByType(_TextInputWithDropdown2.Container).findByType(_TextInputWithDropdown2.Dropdown)).toThrow();
});
it('renders correctly with value and no options', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.default, {
    value: "bikes",
    id: "text-input-with-dropdown",
    label: "Search for bikes",
    name: "query",
    onChange: () => {},
    onSelect: () => {},
    options: []
  }));
  expect(renderer.toJSON()).toMatchSnapshot();
  expect(() => renderer.root.findByType(_TextInputWithDropdown2.Container).findByType(_TextInputWithDropdown2.Dropdown)).toThrow();
});
it('renders correctly with value and options', () => {
  const renderer = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_TextInputWithDropdown.default, {
    value: "c",
    id: "text-input-with-dropdown",
    label: "Search for bikes",
    name: "query",
    onChange: () => {},
    onSelect: () => {},
    options: ['Canyon', 'Cannondale', 'Condor', 'Cube']
  }));
  expect(renderer.toJSON()).toMatchSnapshot();
  expect(renderer.root.findByType(_TextInputWithDropdown2.Container).findByType(_TextInputWithDropdown2.Dropdown)).toBeTruthy();
});