import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import fontHelper from '../../../theme/crTheme/fontHelper';

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize('s')};
  border-radius: 2rem;
  transition: all 0.3s;
  height: 3.125rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  > a {
    text-decoration: none;
  }

  ${({ colour, theme }) => (theme.buttonColors(colour))};

  // NEW STUFF:
  ${({ theme }) => css` ${fontHelper(theme, 'button')}`}
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    margin: 0 auto ${spacing('l')};
  }
`;

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
