import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const buttonStyle = () => css`
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
  cursor: pointer;
  ${({ color, theme }) => (color ? theme.buttonColors(color) : theme.buttonColors('red'))};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: auto;
  }
`;

const linkStyle = () => css`
  position: relative;
  text-decoration: none;
  display: inline;
  line-height: ${({ theme }) => theme.fontSize('l')};
  ${({ type, theme, underline }) => (type
    ? theme.linkStyles(type, underline)
    : theme.linkStyles('standard', underline))};
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
  @media ${({ theme }) => theme.breakpoint('small')} {
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
