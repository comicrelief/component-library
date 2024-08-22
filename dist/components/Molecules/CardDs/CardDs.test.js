"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _CardDs = _interopRequireDefault(require("./CardDs"));
var _data = require("../../../styleguide/data/data");
var _index = require("../../Atoms/Icons/index");
it('renders correctly', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_CardDs.default, {
    target: "_blank",
    link: "/home",
    linkLabel: "Find out more",
    imageLow: _data.defaultData.image,
    images: _data.defaultData.images,
    backgroundColor: "white",
    height: "auto",
    icon: /*#__PURE__*/_react.default.createElement(_index.Internal, {
      colour: "white"
    })
  }, "Text body copy description")).toJSON();
  expect(tree).toMatchSnapshot();
});