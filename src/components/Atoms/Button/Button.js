import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

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
  ${({ color, theme }) => (color ? theme.buttonColors(color) : theme.buttonColors('red'))};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: auto;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: auto;
    padding: ${spacing('md')} ${spacing('l')};
    margin: 0 auto ${spacing('l')};
  }
`;

const Button = React.forwardRef(({ children, wrapper = false, ...rest }, ref) => (
  <StyledButton {...rest} as={wrapper ? 'span' : 'button'} ref={ref}>
    {children}
  </StyledButton>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.bool // Buttons as span
};

export default Button;
