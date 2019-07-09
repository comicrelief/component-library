import React from 'react';
import PropTypes from 'prop-types';
import PaginationList from './Components/PaginationList';
import PaginationItem from './Components/PaginationItem';
import { getPages } from './Utils/PaginationCalculator';

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
        currentPage === maxPages || maxPages <= 1
      )
    );
  }
  if (showLast) {
    items.push(
      getItem(
        'item--lastPage',
        lastLabel,
        lastAriaLabel,
        maxPages,
        currentPage === maxPages || maxPages <= 1
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
  totalPages: PropTypes.number.isRequired, // total pages
  currentPage: PropTypes.number.isRequired,
  createURL: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  PageComponent: PropTypes.func,
  showFirst: PropTypes.bool,
  showPrevious: PropTypes.bool,
  showNext: PropTypes.bool,
  showLast: PropTypes.bool,
  maxPages: PropTypes.number, // allowed max number of pages
  className: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
  getPageLabel: PropTypes.func,
  previousAriaLabel: PropTypes.string,
  nextAriaLabel: PropTypes.string,
  firstAriaLabel: PropTypes.string,
  lastAriaLabel: PropTypes.string,
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
  getPageAriaLabel: currentPage => `Page ${currentPage.toString()}`
};
export default Pagination;
