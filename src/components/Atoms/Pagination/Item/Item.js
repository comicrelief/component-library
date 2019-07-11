import React from 'react';
import PropTypes from 'prop-types';
import StyledItem from './Item.style';

const Item = ({ children, ...restProps }) => (
  <StyledItem {...restProps}>{children}</StyledItem>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, // required for styling in `StyledItem`
  backgroundColor: PropTypes.string.isRequired, // required for styling in `StyledItem`
  selectedColor: PropTypes.string.isRequired, // required for styling in `StyledItem`
  selectedBackgroundColor: PropTypes.string.isRequired, // required for styling in `StyledItem`
  disabledColor: PropTypes.string.isRequired, // required for styling in `StyledItem`
  disabledBackgroundColor: PropTypes.string.isRequired, // required for styling in `StyledItem`
  colorOnHover: PropTypes.string.isRequired, // required for styling in `StyledItem`
  backgroundColorOnHover: PropTypes.string.isRequired // required for styling in `StyledItem`
};

export default Item;
