import styled, { css } from 'styled-components';
import fontHelper from '../../../theme/crTheme/fontHelper';

const Copywrapper = styled.span`
  // Purely for some cleaner markup :)
`;

const IconWrapper = styled.div`
  width: auto;
  height: 100%;
  margin-left: auto;
  transition: filter 0.2s;

  * {
    width: inherit;
    height: inherit;
  }
`;

const StyledButton = styled.button`
  --padding-top-and-bottom: 0.6rem;
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: all 0.2s;
  height: auto;
  min-height: 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: var(--padding-top-and-bottom) 1rem;
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
    grid-template-rows: auto;
    justify-items: center;

    > ${Copywrapper} {
      grid-column-start: 2;

      // Request from Curtis to aesthetically rebalance these smaller buttons:
      ${({ $fullWidth }) => (!$fullWidth && css`
        padding-right: 1.5rem;
      `)};
    }
    
    > ${IconWrapper} {
      margin-left: auto;
      // While Button heights now scale to fit content (important for lots
      // of copy on a small breakpoint), we so still need to constrain the
      // icon, to prevent silliness:
      height: calc(3rem - (var(--padding-top-and-bottom) * 2));
    }
  `}
`;

export { StyledButton, IconWrapper, Copywrapper };
