import React from 'react';
import PropTypes from 'prop-types';

const PaginationList = ({
  PageComponent,
  pages,
  createURL,
  onSelect,
  className
}) => {
  const getPageClassNames = (selected, disabled, pageClassName) => {
    const selectedPageClassName = selected && !disabled ? 'item--selected' : '';
    const disabledPageClassName = disabled ? 'item--disabled' : '';
    return `item ${selectedPageClassName} ${disabledPageClassName} ${pageClassName}`;
  };
  return (
    <div className={className}>
      <ul className="list">
        {pages.map(
          ({
            key,
            selected,
            disabled,
            pageClassName,
            label,
            ariaLabel,
            value
          }) => (
            <li
              key={key}
              className={getPageClassNames(selected, disabled, pageClassName)}
            >
              {disabled ? (
                <span className="link">{label}</span>
              ) : (
                <PageComponent
                  className={`link ${selected ? 'link--selected' : ''}`}
                  aria-label={ariaLabel}
                  href={createURL(value)}
                  onClick={event => onSelect(event, value)}
                >
                  {label}
                </PageComponent>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

PaginationList.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      pageClassName: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      disabled: PropTypes.bool.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  createURL: PropTypes.func.isRequired,
  PageComponent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default PaginationList;
