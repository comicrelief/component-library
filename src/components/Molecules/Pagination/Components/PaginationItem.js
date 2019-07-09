import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Atoms/Link/Link';

const PaginationItem = ({ children, ...restProps }) => (
  <Link target="self" {...restProps}>
    {children}
  </Link>
);

PaginationItem.propTypes = {
  children: PropTypes.string.isRequired
};

export default PaginationItem;
