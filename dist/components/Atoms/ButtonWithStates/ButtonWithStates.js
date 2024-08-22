"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ScaleLoader = _interopRequireDefault(require("react-spinners/ScaleLoader"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _Button = _interopRequireDefault(require("../Button/Button"));
const ButtonWithDisabledState = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "ButtonWithStates__ButtonWithDisabledState",
  componentId: "sc-7gb81g-0"
})(["&:disabled{cursor:not-allowed;opacity:0.75;}"]);
const LoaderContainer = _styledComponents.default.div.withConfig({
  displayName: "ButtonWithStates__LoaderContainer",
  componentId: "sc-7gb81g-1"
})(["", ""], _ref => {
  let {
    withMargin
  } = _ref;
  return withMargin ? "\n  margin-top: ".concat((0, _spacing.default)('xsm'), ";\n  margin-left: ").concat((0, _spacing.default)('md'), ";\n") : '';
});

// A button with loading and disabled states.
const ButtonWithStates = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    children,
    loadingText = 'Loading',
    loading = false,
    disabled = false,
    ...rest
  } = _ref2;
  const [loaderColour, setLoaderColour] = (0, _react.useState)(null);

  // Can't see a simpler way to get the button's text colour, without reading the value
  //  via JavaScript.
  //  (e.g. the `theme.buttonColours` helper returns a CSS string split into an array -
  //  don't really want to be parsing that.)
  //  (And can't use inherit because ScaleLoader's color prop is actually setting its
  //  background color.)
  const getLoaderColour = (0, _react.useCallback)(node => {
    if (node && typeof window.getComputedStyle === 'function') {
      const textColour = window.getComputedStyle(node).color;
      if (textColour) {
        setLoaderColour(textColour);
      }
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(ButtonWithDisabledState, Object.assign({
    ref: ref,
    disabled: disabled
  }, rest), loading ? loadingText : children, /*#__PURE__*/_react.default.createElement(LoaderContainer, {
    ref: getLoaderColour,
    withMargin: loading
  }, /*#__PURE__*/_react.default.createElement(_ScaleLoader.default, {
    height: 16,
    width: 2,
    loading: loading,
    color: loaderColour
  })));
});
var _default = exports.default = ButtonWithStates;