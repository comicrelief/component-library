import React from 'react';
import PropTypes from 'prop-types';
import StyledItem from './Item.style';

const Item = ({
  children,
  target,
  color,
  backgroundColor,
  selectedColor,
  selectedBackgroundColor,
  disabledColor,
  disabledBackgroundColor,
  colorOnHover,
  backgroundColorOnHover,
  selected,
  disabled,
  ...restProps
}) => (
  <StyledItem
    target={`_${target}`}
    $color={color}
    $backgroundColor={backgroundColor}
    $selectedColor={selectedColor}
    $selectedBackgroundColor={selectedBackgroundColor}
    $disabledColor={disabledColor}
    $disabledBackgroundColor={disabledBackgroundColor}
    $colorOnHover={colorOnHover}
    $backgroundColorOnHover={backgroundColorOnHover}
    $selected={selected}
    $disabled={disabled}
    {...restProps}
  >
    {children}
  </StyledItem>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedBackgroundColor: PropTypes.string.isRequired,
  disabledColor: PropTypes.string.isRequired,
  disabledBackgroundColor: PropTypes.string.isRequired,
  colorOnHover: PropTypes.string.isRequired,
  backgroundColorOnHover: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Item;
