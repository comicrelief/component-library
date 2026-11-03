import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';
import fontHelper from '../../../theme/crTheme/fontHelper';

export const Copywrapper = styled.span`
  // Purely for some cleaner markup :)
`;

const buttonStyle = () => css`
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
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;

  ${({ $color, theme, $buttonType }) => (theme.buttonColors($color, $buttonType))};

  ${({ theme }) => css` ${fontHelper(theme, 'button')}`}

  // Override with mobile-specific colours where available:
  ${({ $mobileColour, theme, $buttonType }) => ($mobileColour ? theme.buttonColors($mobileColour, $buttonType) : null)};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    // I don't *believe* this needs to be reinstated, but leaving in
    // place for now, just to avoid breaking anything downstream...
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

    // Reinstate standard colours for desktop where appropriate:
    ${({
    $mobileColour, theme, $buttonType, $color
  }) => (
    $mobileColour && theme.buttonColors($color, $buttonType)
  )};
  }
`;

const linkStyle = () => css`
  position: relative;
  display: inline;
  ${({ type, theme }) => (type
    ? theme.linkStyles(type)
    : theme.linkStyles('standard'))};
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: ${spacing('md')};
  align-self: center;
  right: ${spacing('m')};

  ${({ type }) => type === 'standard' && css`
    position: absolute;
    right: -2rem;
    top: 0;
    bottom: 0;
  `};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: auto;
    right: auto;
    position: relative;

    ${({ type }) => type === 'standard' && css`
      position: absolute;
      right: -2rem;
      top: 0;
      bottom: 0;
    `};
  }
`;

const StyledLink = styled.a`
  ${props => (props.type === 'button' ? buttonStyle : linkStyle)}

  ${props => props.$iconFirst && props.type === 'button'
    && css`
      flex-direction: row-reverse;
      // TODO: what??
      span[type="button"] {
        margin-left: 0;
        margin-right: 1rem;
      }
    `};

    // Icon-based tweaks:
    ${props => (props.$hasIcon && props.type === 'button') && css`
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
        height: 1.25rem;
      }


    ${(props.$iconFirst && css`
      > ${Copywrapper} {
        order: 2;

        ${({ $fullWidth }) => (!$fullWidth && css`
          // Swap sides for the 'aesthetic rebalance' mentioned aobve:
          padding-inline: 1.5rem 0;
        `)};
      }

      > ${IconWrapper} {
        // Place the icon before the copy in the Grid:
        order: 1;
        // Swap other alignment rule:
        // TOOD: having to override weird rule above
        margin-inline: 0 auto !important;
       }
    `)};
  `};
`;

export const HelperText = styled.span`
  ${hideVisually};
`;

export default StyledLink;
