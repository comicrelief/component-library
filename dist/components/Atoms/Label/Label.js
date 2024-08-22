"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = _interopRequireDefault(require("../Text/Text"));
var _spacing = _interopRequireDefault(require("../../../theme/shared/spacing"));
var _hideVisually = _interopRequireDefault(require("../../../theme/shared/hideVisually"));
const LabelElement = _styledComponents.default.label.withConfig({
  displayName: "Label__LabelElement",
  componentId: "sc-2nrw50-0"
})(["position:relative;display:flex;flex-direction:column;color:", ";width:100%;", ""], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('grey_label');
}, _ref2 => {
  let {
    optional,
    theme
  } = _ref2;
  return optional === true && "\n  :after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    content: 'Optional';\n    font-family: ".concat(theme.fontFamilies(theme.font.regular), ";\n    font-size: ").concat(theme.fontSize('s'), ";\n  }");
});
const VisibleText = (0, _styledComponents.default)(_Text.default).attrs({
  weight: 'bold'
}).withConfig({
  displayName: "Label__VisibleText",
  componentId: "sc-2nrw50-1"
})(["margin-bottom:", ";"], (0, _spacing.default)('sm'));
const HiddenText = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "Label__HiddenText",
  componentId: "sc-2nrw50-2"
})(["", ""], _hideVisually.default);

// eslint-disable-next-line react/prop-types
const LabelText = _ref3 => {
  let {
    label,
    hideLabel,
    ...rest
  } = _ref3;
  const Component = hideLabel ? HiddenText : VisibleText;
  return /*#__PURE__*/_react.default.isValidElement(label) ? /*#__PURE__*/_react.default.createElement(Component, rest, label) : /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, rest, {
    dangerouslySetInnerHTML: {
      __html: label
    }
  }));
};

/**
 * @param children
 * @param label
 * @param hideLabel - Visually hide the label text (without removing it from the document)
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Label = _ref4 => {
  let {
    children = null,
    label,
    hideLabel = false,
    optional = null,
    ...rest
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(LabelElement, Object.assign({}, rest, {
    optional: optional
  }), /*#__PURE__*/_react.default.createElement(LabelText, {
    label: label,
    hideLabel: hideLabel
  }), children);
};
var _default = exports.default = Label;