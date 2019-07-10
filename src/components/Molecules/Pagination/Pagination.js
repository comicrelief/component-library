import React from 'react';
import PropTypes from 'prop-types';
import StyledPaginationList from './Components/PaginationList.style';
import StyledPaginationItem from './Components/PaginationItem.style';
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
  showMore,
  moreLabel,
  moreAriaLabel,
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
  className,
  pageComponentProps
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
      getItem('firstPage', firstLabel, firstAriaLabel, 1, currentPage === 1)
    );
  }
  if (showPrevious) {
    items.push(
      getItem(
        'previousPage',
        previousLabel,
        previousAriaLabel,
        currentPage - 1,
        currentPage === 1
      )
    );
  }

  const pages = getPages(currentPage, maxPages, totalPages);
  if (showMore && pages[0] > 1) {
    items.push(getItem('morePagesBefore', moreLabel, moreAriaLabel, 0, true));
  }
  items = items.concat(
    pages.map(value =>
      getItem(
        'page',
        getPageLabel(value),
        getPageAriaLabel(value),
        value,
        false
      )
    )
  );
  if (showMore && pages[pages.length - 1] < totalPages) {
    items.push(getItem('morePagesAfter', moreLabel, moreAriaLabel, 0, true));
  }
  if (showNext) {
    items.push(
      getItem(
        'nextPage',
        nextLabel,
        nextAriaLabel,
        currentPage + 1,
        currentPage === totalPages || totalPages === 1
      )
    );
  }
  if (showLast) {
    items.push(
      getItem(
        'lastPage',
        lastLabel,
        lastAriaLabel,
        totalPages,
        currentPage === totalPages || totalPages === 1
      )
    );
  }

  return (
    <StyledPaginationList
      className={className}
      pages={items}
      PageComponent={PageComponent}
      pageComponentProps={pageComponentProps}
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
  PageComponent: PropTypes.elementType,
  /** Props for component used to render each page */
  pageComponentProps: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func
    ])
  ),
  /** Show first page link */
  showFirst: PropTypes.bool,
  /** Show previous page link */
  showPrevious: PropTypes.bool,
  /** Show next page link */
  showNext: PropTypes.bool,
  /** Show last page link */
  showLast: PropTypes.bool,
  /** Show that there are more pages */
  showMore: PropTypes.bool,
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
  /** More pages -other than displayed ones- label */
  moreLabel: PropTypes.string,
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
  /** More pages -other than displayed ones- aria label */
  moreAriaLabel: PropTypes.string,
  /** Generate page aria label, page number is available as an argument */
  getPageAriaLabel: PropTypes.func
};

Pagination.defaultProps = {
  PageComponent: StyledPaginationItem,
  pageComponentProps: { color: 'red' },
  showFirst: true,
  showPrevious: true,
  showNext: true,
  showLast: true,
  showMore: true,
  maxPages: 5,
  className: '',
  previousLabel: '‹',
  nextLabel: '›',
  firstLabel: '«',
  lastLabel: '»',
  moreLabel: '...',
  getPageLabel: currentPage => currentPage.toString(),
  previousAriaLabel: 'Previous page',
  nextAriaLabel: 'Next page',
  firstAriaLabel: 'First page',
  lastAriaLabel: 'Last page',
  moreAriaLabel: 'More pages',
  getPageAriaLabel: currentPage => `Page ${currentPage}`
};
export default Pagination;
