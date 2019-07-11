import React from 'react';
import PropTypes from 'prop-types';

const List = ({
  PageComponent,
  pages,
  createURL,
  onSelect,
  className,
  pageComponentProps,
  ...restProps
}) => {
  return (
    <div className={className}>
      <ul>
        {pages.map(({ key, selected, disabled, label, ariaLabel, value }) => (
          <li key={key}>
            <PageComponent
              selected={selected}
              disabled={disabled}
              aria-label={ariaLabel}
              href={createURL(value)}
              onClick={event => {
                if (selected || disabled) {
                  return event.preventDefault();
                }
                return onSelect(event, value);
              }}
              {...restProps}
              {...pageComponentProps}
            >
              {label}
            </PageComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      disabled: PropTypes.bool.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  createURL: PropTypes.func.isRequired,
  PageComponent: PropTypes.elementType.isRequired,
  pageComponentProps: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
      PropTypes.func
    ])
  ).isRequired,
  className: PropTypes.string.isRequired
};

export default List;
