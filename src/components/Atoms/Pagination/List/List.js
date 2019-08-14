import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
`;

const StyledItem = styled.li`
  padding: 10px;
`;

const List = ({
  PageComponent,
  pages,
  createURL,
  onSelect,
  pageComponentProps,
  ...restProps
}) => {
  return (
    <StyledList>
      {pages.map(({ selected, disabled, label, ariaLabel, value }) => (
        <StyledItem key={`${ariaLabel} ${value}`}>
          <PageComponent
            selected={selected}
            disabled={disabled}
            aria-label={ariaLabel}
            href={selected || disabled ? null : createURL(value)}
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
        </StyledItem>
      ))}
    </StyledList>
  );
};

List.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired
};

export default List;
