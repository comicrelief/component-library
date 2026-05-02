import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';
import fontHelper from '../../../theme/crTheme/fontHelper';

const buttonStyle = () => css`
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

  ${({ color, theme, buttonType }) => (theme.buttonColors(color, buttonType))};

  ${({ theme }) => css` ${fontHelper(theme, 'button')}`}

  // Override with mobile-specific colours where available:
  ${({ mobileColour, theme, buttonType }) => (mobileColour ? theme.buttonColors(mobileColour, buttonType) : null)};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    // I don't *believe* this needs to be reinstated, but leaving in
    // place for now, just to avoid breaking anything downstream...
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

    // Reinstate standard colours for desktop where appropriate:
    ${({
    mobileColour, theme, buttonType, color
  }) => (
    mobileColour && theme.buttonColors(color, buttonType)
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

  ${({ iconFirst }) => iconFirst
    && css`
      flex-direction: row-reverse;
      span[type="button"] {
        margin-left: 0;
        margin-right: 1rem;
      }
    `};
`;

export const HelperText = styled.span`
  ${hideVisually};
`;

export default StyledLink;
