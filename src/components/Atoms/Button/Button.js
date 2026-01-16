import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';
import buttonTypes from '../../../theme/crTheme/buttonTypes';

const Button = React.forwardRef(({
  children,
  color = 'red',
  wrapper = false,
  fullWidth = false,
  buttonType = buttonTypes.PRIMARY,
  ...rest
}, ref) => (
  <StyledButton {...rest} as={wrapper ? 'span' : 'button'} ref={ref} fullWidth={fullWidth} color={color} buttonType={buttonType}>
    {children}
  </StyledButton>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.bool, // Buttons as span
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  // Primary will the default for the vast majority of contexts; with
  // Secondary and Tertirary being manually set by developers where required
  buttonType: PropTypes.oneOf([
    buttonTypes.PRIMARY,
    buttonTypes.SECONDARY,
    buttonTypes.TERTIARY
  ])
};

export default Button;
