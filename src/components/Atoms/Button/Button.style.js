import styled, { css } from 'styled-components';
import fontHelper from '../../../theme/crTheme/fontHelper';

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: all 0.2s;
  min-height: 2.5em;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;

  > a {
    text-decoration: none;
  }

  ${({ color, theme, buttonType }) => (theme.buttonColors(color, buttonType))};

  ${({ theme }) => css`${fontHelper(theme, 'button')}`}
  
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    // I don't *believe* this needs to be reinstated, but leaving in
    // place for now, just to avoid breaking anything downstream...
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }
`;

export default StyledButton;
