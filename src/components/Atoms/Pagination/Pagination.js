import { range } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Determines the size of the widget (the number of pages displayed - that the user can directly click on)
function calculateSize(padding, maxPages) {
  return Math.min(2 * padding + 1, maxPages);
}

function calculatePaddingLeft(currentPage, padding, maxPages, size) {
  if (currentPage <= padding) {
    return currentPage;
  }

  if (currentPage >= maxPages - padding) {
    return size - (maxPages - currentPage);
  }

  return padding + 1;
}

// Retrieve the correct page range to populate the widget
function getPages(currentPage, maxPages, padding) {
  const size = calculateSize(padding, maxPages);
  // If the widget size is equal to the max number of pages, return the entire page range
  if (size === maxPages) return range(1, maxPages + 1);

  const paddingLeft = calculatePaddingLeft(
    currentPage,
    padding,
    maxPages,
    size
  );
  const paddingRight = size - paddingLeft;

  const first = currentPage - paddingLeft;
  const last = currentPage + paddingRight;
  return range(first + 1, last + 1);
}

class Pagination extends Component {
  render() {
    const {
      PageComponent,
      nbPages,
      totalPages,
      currentRefinement,
      padding,
      showFirst,
      showPrevious,
      showNext,
      showLast,
      refine,
      createURL,
      canRefine,
      className,
      onSelect
    } = this.props;
    const getItem = (modifier, label, ariaLabel, value, disabled) => {
      return {
        key: `${modifier}.${value}`,
        modifier,
        disabled,
        label,
        value,
        ariaLabel
      };
    };
    const maxPages = Math.min(nbPages, totalPages);
    const lastPage = maxPages;

    let items = [];
    if (showFirst) {
      items.push(
        getItem(
          'item--firstPage',
          'firstLabel',
          'firstAriaLabel',
          1,
          currentRefinement === 1
        )
      );
    }
    if (showPrevious) {
      items.push(
        getItem(
          'item--previousPage',
          'previousLabel',
          'previousAriaLabel',
          currentRefinement - 1,
          currentRefinement === 1
        )
      );
    }

    items = items.concat(
      getPages(currentRefinement, maxPages, padding).map(value =>
        getItem(
          'item--page',
          `page${value}`,
          `ariaPage${value}`,
          value,
          currentRefinement === value
        )
      )
    );
    if (showNext) {
      items.push(
        getItem(
          'item--nextPage',
          'nextLabel',
          'nextAriaLabel',
          currentRefinement + 1,
          currentRefinement === lastPage || lastPage <= 1
        )
      );
    }
    if (showLast) {
      items.push(
        getItem(
          'item--lastPage',
          'lastLabel',
          'lastAriaLabel',
          lastPage,
          currentRefinement === lastPage || lastPage <= 1
        )
      );
    }

    return (
      <div className={className}>
        <ul className="list">
          {items.map(item => (
            <li
              key={'key' in item ? item.key : item.value}
              className={`item ${
                item.selected && !item.disabled ? 'item--selected' : ''
              } ${item.disabled ? 'item--disabled' : ''} ${item.modifier}`}
            >
              {item.disabled ? (
                <span className="link">
                  {'label' in item ? item.label : item.value}
                </span>
              ) : (
                <PageComponent
                  className={`link ${item.selected ? 'link--selected' : ''}`}
                  aria-label={item.ariaLabel}
                  href={createURL(item.value)}
                  onClick={() => onSelect(item.value)}
                >
                  {'label' in item ? item.label : item.value}
                </PageComponent>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  nbPages: PropTypes.number.isRequired,
  currentRefinement: PropTypes.number.isRequired,
  refine: PropTypes.func.isRequired,
  createURL: PropTypes.func.isRequired,
  canRefine: PropTypes.bool.isRequired,

  PageComponent: PropTypes.func,
  onSelect: PropTypes.func.isRequired,

  showFirst: PropTypes.bool,
  showPrevious: PropTypes.bool,
  showNext: PropTypes.bool,
  showLast: PropTypes.bool,
  padding: PropTypes.number,
  totalPages: PropTypes.number,
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
  PageComponent: props => <a {...props} />,
  showFirst: true,
  showPrevious: true,
  showNext: true,
  showLast: false,
  padding: 3,
  totalPages: Infinity,
  className: '',
  previousLabel: '‹',
  nextLabel: '›',
  firstLabel: '«',
  lastLabel: '»',
  getPageLabel: currentRefinement => currentRefinement.toString(),
  previousAriaLabel: 'Previous page',
  nextAriaLabel: 'Next page',
  firstAriaLabel: 'First page',
  lastAriaLabel: 'Last page',
  getPageAriaLabel: currentRefinement => `Page ${currentRefinement.toString()}`
};
export default Pagination;
