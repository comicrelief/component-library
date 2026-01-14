import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';
import fontHelper from '../../../theme/crTheme/fontHelper';

const buttonStyle = () => css`
  display: inline-flex;
  position: relative;
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize('s')};
  border-radius: 2rem;
  transition: all 0.3s;
  height: 2.5em;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    ${fontHelper(theme, 'button')}
  `}

  ${({ color, theme }) => (color ? theme.buttonColors(color) : theme.buttonColors('red'))};

  // Override with mobile-specific colours where available:
  ${({ mobileColour, theme }) => (mobileColour ? theme.buttonColors(mobileColour) : null)};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  // Reinstate general styles for 'desktop':
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    ${({ color, theme }) => (color ? theme.buttonColors(color) : theme.buttonColors('red'))};
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
  ${({ type }) => type === 'standard'
    && css`
      position: absolute;
      right: -2rem;
      top: 0;
      bottom: 0;
    `};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: auto;
    right: auto;
    position: relative;
    ${({ type }) => type === 'standard'
      && css`
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
