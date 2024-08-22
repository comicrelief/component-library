"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _SingleMessageDs = _interopRequireDefault(require("./SingleMessageDs"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Download = _interopRequireDefault(require("../../Atoms/Icons/Download"));
var _data = require("../../../styleguide/data/data");
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_SingleMessageDs.default, {
    target: "_blank",
    link: "/home",
    linkLabel: "Check out the shop",
    ctaBgColor: "blue_dark",
    backgroundColor: "white",
    imageDirection: "right",
    imageLow: _data.defaultData.image,
    images: _data.defaultData.images,
    imageAltText: "Happy man going to work",
    subtitle: "Subtitle",
    title: "Heading Line 1 Heading Line 2",
    height: "auto",
    imageLeft: true,
    linkIcon: /*#__PURE__*/_react.default.createElement(_Download.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "p"
  }, "Whatever you\u2019ve got planned, the Sport Relief shop has everything you need to get you looking your best while you\u2019re raising some cash. Also available in Sainsbury\u2019s stores and online and in selected Argos stores."))).toJSON();
  expect(tree).toMatchSnapshot();
});