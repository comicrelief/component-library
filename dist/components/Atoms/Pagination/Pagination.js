"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _List = _interopRequireDefault(require("./List/List"));
var _Item = _interopRequireDefault(require("./Item/Item"));
var _PaginationCalculator = require("./Utils/PaginationCalculator");
/** Customizable Pagination component */
const Pagination = _ref => {
  let {
    PageComponent = _Item.default,
    pageComponentProps = {},
    showFirst = true,
    showPrevious = true,
    showNext = true,
    showLast = true,
    showMore = true,
    maxPages = 5,
    previousLabel = '‹',
    nextLabel = '›',
    firstLabel = '«',
    lastLabel = '»',
    moreLabel = '...',
    getPageLabel = currentPage => currentPage.toString(),
    previousAriaLabel = 'Previous page',
    nextAriaLabel = 'Next page',
    firstAriaLabel = 'First page',
    lastAriaLabel = 'Last page',
    moreAriaLabel = 'More pages',
    getPageAriaLabel = currentPage => "Page ".concat(currentPage),
    target = 'self',
    color = 'black',
    backgroundColor = 'white',
    selectedColor = 'white',
    selectedBackgroundColor = 'red',
    disabledColor = 'grey_medium',
    disabledBackgroundColor = 'white',
    colorOnHover = 'white',
    backgroundColorOnHover = 'teal',
    totalPages,
    currentPage,
    onSelect,
    createURL,
    ...restProps
  } = _ref;
  if (!totalPages) {
    return null;
  }
  const getItem = (label, ariaLabel, value, disabled) => ({
    disabled,
    selected: currentPage === value,
    label,
    value,
    ariaLabel
  });
  let items = [];
  if (showFirst) {
    items.push(getItem(firstLabel, firstAriaLabel, 1, currentPage === 1));
  }
  if (showPrevious) {
    items.push(getItem(previousLabel, previousAriaLabel, currentPage - 1, currentPage === 1));
  }
  const pages = (0, _PaginationCalculator.getPages)(currentPage, maxPages, totalPages);
  if (showMore && pages[0] > 1) {
    items.push(getItem(moreLabel, moreAriaLabel, -1, true));
  }
  items = items.concat(pages.map(value => getItem(getPageLabel(value), getPageAriaLabel(value), value, false)));
  if (showMore && pages[pages.length - 1] < totalPages) {
    items.push(getItem(moreLabel, moreAriaLabel, -2, true));
  }
  if (showNext) {
    items.push(getItem(nextLabel, nextAriaLabel, currentPage + 1, currentPage === totalPages || totalPages === 1));
  }
  if (showLast) {
    items.push(getItem(lastLabel, lastAriaLabel, totalPages, currentPage === totalPages || totalPages === 1));
  }
  return /*#__PURE__*/_react.default.createElement(_List.default, Object.assign({
    pages: items,
    PageComponent: PageComponent,
    pageComponentProps: pageComponentProps,
    createURL: createURL,
    onSelect: onSelect,
    target: target,
    color: color,
    backgroundColor: backgroundColor,
    selectedColor: selectedColor,
    selectedBackgroundColor: selectedBackgroundColor,
    disabledColor: disabledColor,
    disabledBackgroundColor: disabledBackgroundColor,
    colorOnHover: colorOnHover,
    backgroundColorOnHover: backgroundColorOnHover
  }, restProps));
};
var _default = exports.default = Pagination;