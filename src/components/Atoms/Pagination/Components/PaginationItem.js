import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = ({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
);

PaginationItem.propTypes = {
  children: PropTypes.string.isRequired
};

export default PaginationItem;
