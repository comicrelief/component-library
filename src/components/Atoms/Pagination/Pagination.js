import { range } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkList from './LinkList';

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
  getItem(modifier, label, ariaLabel, value) {
    const { nbPages, totalPages } = this.props;
    return {
      key: `${modifier}.${value}`,
      modifier,
      disabled: value < 1 || value >= Math.min(totalPages, nbPages),
      label,
      value,
      ariaLabel
    };
  }

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
      ...otherProps
    } = this.props;

    const maxPages = Math.min(nbPages, totalPages);
    const lastPage = maxPages;

    let items = [];
    if (showFirst) {
      items.push({
        key: 'first',
        modifier: 'item--firstPage',
        disabled: currentRefinement === 1,
        label: 'firstLabel',
        value: 1,
        ariaLabel: 'firstAriaLabel'
      });
    }
    if (showPrevious) {
      items.push({
        key: 'previous',
        modifier: 'item--previousPage',
        disabled: currentRefinement === 1,
        label: 'previousLabel',
        value: currentRefinement - 1,
        ariaLabel: 'previousAriaLabel'
      });
    }

    items = items.concat(
      getPages(currentRefinement, maxPages, padding).map(value => ({
        key: value,
        modifier: 'item--page',
        label: ('page', value),
        value,
        selected: value === currentRefinement,
        ariaLabel: ('ariaPage', value)
      }))
    );
    if (showNext) {
      items.push({
        key: 'next',
        modifier: 'item--nextPage',
        disabled: currentRefinement === lastPage || lastPage <= 1,
        label: 'nextLabel',
        value: currentRefinement + 1,
        ariaLabel: 'nextAriaLabel'
      });
    }
    if (showLast) {
      items.push({
        key: 'last',
        modifier: 'item--lastPage',
        disabled: currentRefinement === lastPage || lastPage <= 1,
        label: 'lastLabel',
        value: lastPage,
        ariaLabel: 'lastAriaLabel'
      });
    }

    return (
      <div className={className}>
        <ul className="list">
          {items.map(item => (
            <li
              key={has(item, 'key') ? item.key : item.value}
              className={`item ${
                item.selected && !item.disabled ? 'item--selected' : ''
              } ${item.disabled ? 'item--disabled' : ''} ${item.modifier}`}
            >
              {item.disabled ? (
                <span className="link">
                  {has(item, 'label') ? item.label : item.value}
                </span>
              ) : (
                <PageComponent
                  className={`link ${item.selected ? 'link--selected' : ''}`}
                  aria-label={item.ariaLabel}
                  href={createURL(item.value)}
                  onClick={() => onSelect(item.value)}
                >
                  {has(item, 'label') ? item.label : item.value}
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
