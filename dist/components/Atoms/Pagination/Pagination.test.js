"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _Pagination = _interopRequireDefault(require("./Pagination"));
it('renders correctly in minimalist form', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 5,
    currentPage: 3,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: false,
    showPrevious: false,
    showNext: false,
    showLast: false,
    showMore: false
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in minimalist form with non-default color', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 5,
    currentPage: 3,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: false,
    showPrevious: false,
    showNext: false,
    showLast: false,
    showMore: false,
    selectedBackgroundColor: "blue"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with max pages more than total pages', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 10,
    totalPages: 6,
    currentPage: 4,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with max pages less than total pages', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 6,
    totalPages: 10,
    currentPage: 2,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with max pages less than current page', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 20,
    currentPage: 19,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with first page selected', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 5,
    currentPage: 1,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with last page selected', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 5,
    currentPage: 5,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with more on left', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 6,
    currentPage: 4,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with more on right', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 6,
    currentPage: 3,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly in full size with more on both sides', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 7,
    currentPage: 4,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with custom style', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 10,
    currentPage: 5,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true,
    color: "red",
    backgroundColor: "yellow",
    selectedColor: "yellow",
    selectedBackgroundColor: "teal",
    disabledColor: "white",
    disabledBackgroundColor: "grey_light",
    colorOnHover: "yellow",
    backgroundColorOnHover: "teal"
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with custom labels', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 5,
    currentPage: 3,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true,
    previousLabel: "Previous",
    nextLabel: "Next",
    firstLabel: "First",
    lastLabel: "Last",
    moreLabel: "More",
    getPageLabel: value => "Page ".concat(value)
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders nothing in case of no pages', () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPages: 5,
    totalPages: 0,
    currentPage: 2,
    createURL: value => "example.com/page/".concat(value),
    onSelect: value => value,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showMore: true
  })).toJSON();
  expect(tree).toMatchSnapshot();
});