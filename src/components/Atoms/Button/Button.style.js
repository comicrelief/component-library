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
  height: 2.5em;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  > a {
    text-decoration: none;
  }

  ${({ color, theme }) => (theme.buttonColors(color))};

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

export default StyledButton;
