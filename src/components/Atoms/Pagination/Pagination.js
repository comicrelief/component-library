import React from 'react';
import PropTypes from 'prop-types';
import PaginationList from './Components/PaginationList';
import PaginationItem from './Components/PaginationItem';
import { getPages } from './Utils/PaginationCalculator';

/**
 * Customizable Pagination component
 */
const Pagination = ({
  PageComponent,
  totalPages,
  maxPages,
  currentPage,
  showFirst,
  firstLabel,
  firstAriaLabel,
  showPrevious,
  previousLabel,
  previousAriaLabel,
  showNext,
  nextLabel,
  nextAriaLabel,
  showLast,
  lastLabel,
  lastAriaLabel,
  getPageLabel,
  getPageAriaLabel,
  onSelect,
  createURL,
  className
}) => {
  const getItem = (pageClassName, label, ariaLabel, value, disabled) => {
    return {
      key: `${pageClassName}.${value}`,
      pageClassName,
      disabled,
      selected: currentPage === value,
      label,
      value,
      ariaLabel
    };
  };
  let items = [];
  if (showFirst) {
    items.push(
      getItem(
        'item--firstPage',
        firstLabel,
        firstAriaLabel,
        1,
        currentPage === 1
      )
    );
  }
  if (showPrevious) {
    items.push(
      getItem(
        'item--previousPage',
        previousLabel,
        previousAriaLabel,
        currentPage - 1,
        currentPage === 1
      )
    );
  }

  items = items.concat(
    getPages(currentPage, maxPages, totalPages).map(value =>
      getItem(
        'item--page',
        getPageLabel(value),
        getPageAriaLabel(value),
        value,
        currentPage === value
      )
    )
  );
  if (showNext) {
    items.push(
      getItem(
        'item--nextPage',
        nextLabel,
        nextAriaLabel,
        currentPage + 1,
        currentPage === maxPages || maxPages === 1
      )
    );
  }
  if (showLast) {
    items.push(
      getItem(
        'item--lastPage',
        lastLabel,
        lastAriaLabel,
        totalPages,
        currentPage === maxPages || maxPages === 1
      )
    );
  }

  return (
    <PaginationList
      className={className}
      pages={items}
      PageComponent={PageComponent}
      createURL={createURL}
      onSelect={onSelect}
    />
  );
};
Pagination.propTypes = {
  /** Total number of pages */
  totalPages: PropTypes.number.isRequired,
  /** Current select page */
  currentPage: PropTypes.number.isRequired,
  /** Create each page url, page number is available as an argument */
  createURL: PropTypes.func.isRequired,
  /** Select a page, event and page number are provided as arguments respectively */
  onSelect: PropTypes.func.isRequired,
  /** Component to use to render each page */
  PageComponent: PropTypes.func,
  /** Show first page link */
  showFirst: PropTypes.bool,
  /** Show previous page link */
  showPrevious: PropTypes.bool,
  /** Show next page link */
  showNext: PropTypes.bool,
  /** Show last page link */
  showLast: PropTypes.bool,
  /** Max allowed number of pages */
  maxPages: PropTypes.number,
  /** Main pagination container class */
  className: PropTypes.string,
  /** Previous page label */
  previousLabel: PropTypes.string,
  /** Next page label */
  nextLabel: PropTypes.string,
  /** First page label */
  firstLabel: PropTypes.string,
  /** Last page label */
  lastLabel: PropTypes.string,
  /** Generate page label, page number is available as an argument */
  getPageLabel: PropTypes.func,
  /** Previous page aria label */
  previousAriaLabel: PropTypes.string,
  /** Next page aria label */
  nextAriaLabel: PropTypes.string,
  /** First page aria label */
  firstAriaLabel: PropTypes.string,
  /** Last page aria label */
  lastAriaLabel: PropTypes.string,
  /** Generate page aria label, page number is available as an argument */
  getPageAriaLabel: PropTypes.func
};

Pagination.defaultProps = {
  PageComponent: PaginationItem,
  showFirst: true,
  showPrevious: true,
  showNext: true,
  showLast: true,
  maxPages: 5,
  className: '',
  previousLabel: '‹',
  nextLabel: '›',
  firstLabel: '«',
  lastLabel: '»',
  getPageLabel: currentPage => currentPage.toString(),
  previousAriaLabel: 'Previous page',
  nextAriaLabel: 'Next page',
  firstAriaLabel: 'First page',
  lastAriaLabel: 'Last page',
  getPageAriaLabel: currentPage => `Page ${currentPage}`
};
export default Pagination;
