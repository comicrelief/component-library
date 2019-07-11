import React from 'react';
import PropTypes from 'prop-types';
import StyledPaginationItem from './PaginationItem.style';

const PaginationItem = ({ children, ...restProps }) => (
  <StyledPaginationItem {...restProps}>{children}</StyledPaginationItem>
);

PaginationItem.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  backgroundColor: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  selectedColor: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  selectedBackgroundColor: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  disabledColor: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  disabledBackgroundColor: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  colorOnHover: PropTypes.string.isRequired, // required for styling in `StyledPaginationItem`
  backgroundColorOnHover: PropTypes.string.isRequired // required for styling in `StyledPaginationItem`
};

export default PaginationItem;
