import React from 'react';
import PropTypes from 'prop-types';

const PaginationList = ({
  PageComponent,
  pages,
  createURL,
  onSelect,
  className,
  pageComponentProps
}) => {
  const getPageClassNames = (prefix, selected, disabled, pageClassName) => {
    const selectedPageClassName =
      selected && !disabled ? `${prefix}--selected` : '';
    const disabledPageClassName = disabled ? `${prefix}--disabled` : '';
    return `${prefix} ${selectedPageClassName} ${disabledPageClassName} ${prefix}--${pageClassName}`;
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
              className={getPageClassNames(
                'item',
                selected,
                disabled,
                pageClassName
              )}
            >
              <PageComponent
                className={getPageClassNames(
                  'link',
                  selected,
                  disabled,
                  pageClassName
                )}
                aria-label={ariaLabel}
                href={createURL(value)}
                onClick={event => {
                  if (selected || disabled) {
                    return event.preventDefault();
                  }
                  return onSelect(event, value);
                }}
                {...pageComponentProps}
              >
                {label}
              </PageComponent>
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

export default PaginationList;
