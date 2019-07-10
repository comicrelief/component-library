import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Atoms/Link/Link';

const PaginationItem = ({ children, color, ...restProps }) => (
  <Link target="self" inline {...restProps}>
    {children}
  </Link>
);

PaginationItem.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default PaginationItem;
