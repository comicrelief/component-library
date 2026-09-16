import styled, { css } from 'styled-components';
import fontHelper from '../../../theme/crTheme/fontHelper';

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: all 0.2s;
  height: 2.5rem;
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

  ${({ $color, theme, $buttonType }) => (theme.buttonColors($color, $buttonType))};

  ${({ theme }) => css`${fontHelper(theme, 'button')}`}

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    // I don't *believe* this needs to be reinstated, but leaving in
    // place for now, just to avoid breaking anything downstream...
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  }

  ${({ $hasIcon }) => $hasIcon && css`
    display: grid;
    grid-template-columns: 1fr repeat(1, auto) 1fr;
    grid-column-gap: 0.6rem;
    justify-items: center;

    // Matching the 
    grid-template-rows: 1.25rem;

    > *:nth-child(1) {
      grid-column-start: 2;

      // Curtis request to rebalance the copy
      ${({ $fullWidth }) => (!$fullWidth && css`padding-right: 0.6rem
    `)};
    }
    
    > *:nth-child(2) {
      margin-left: auto;
    }
  `}
`;

const IconWrapper = styled.div`
  width: auto;
  height: 100%;
  margin-left: auto;

  * {
    width: inherit;
    height: inherit;
  }

  // TODO: colour-change logic based on Button colour and hover state:
  // svg {
  //   fill: black;
  // }
`;

export { StyledButton, IconWrapper };
