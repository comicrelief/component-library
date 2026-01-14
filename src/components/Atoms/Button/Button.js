import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';
import buttonTypes from '../../../theme/crTheme/buttonTypes';

const Button = React.forwardRef(({
  children, color = 'red', wrapper = false, fullWidth = false, buttonType = 'primary', ...rest
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
  buttonType: PropTypes.oneOf([
    buttonTypes.PRIMARY,
    buttonTypes.SECONDARY,
    buttonTypes.TERTIARY
  ])
};

export default Button;
