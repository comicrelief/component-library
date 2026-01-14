import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = React.forwardRef(({
  children, colour = 'red', wrapper = false, fullWidth = false, ...rest
}, ref) => (
  <StyledButton {...rest} as={wrapper ? 'span' : 'button'} ref={ref} fullWidth={fullWidth} colour={colour}>
    {children}
  </StyledButton>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.bool, // Buttons as span
  fullWidth: PropTypes.bool,
  colour: PropTypes.string
};

export default Button;
