import styled, { css } from 'styled-components';
import fontHelper from '../../../theme/crTheme/fontHelper';

const Copywrapper = styled.span`
  // Purely for some cleaner markup :)
`;

const IconWrapper = styled.div`
  width: auto;
  height: 100%;
  margin-left: auto;

  * {
    width: inherit;
    height: inherit;
    // Used by SVGs only, but won't do any harm to img tags
    transition: fill 0.1s;
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: all 0.2s;
  height: 3rem;
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
    display: inline-grid;
    grid-template-columns: 1fr repeat(1, auto) 1fr;
    grid-column-gap: 0.6rem;
    grid-template-rows: 1.75rem;
    justify-items: center;

    // Our copy wrapper:
    > ${Copywrapper} {
      grid-column-start: 2;

      // Request from Curtis to aesthetically rebalance these smaller buttons:
      ${({ $fullWidth }) => (!$fullWidth && css`padding-right: 0.6rem`)};
    }
    
    > ${IconWrapper} {
      margin-left: auto;
    }
  `}
`;

export { StyledButton, IconWrapper, Copywrapper };
