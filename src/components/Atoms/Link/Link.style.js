import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const buttonStyle = () => css`
  display: inline-flex;
  position: relative;
  padding: 0.875rem ${spacing('m')} 0.625rem;
  text-decoration: none;
  font-weight: 700;
  border-radius: 2rem;
  line-height: 1.4rem;
  transition: all 0.5s;
  height: 50px;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  ${({ color, theme }) =>
    color ? theme.buttonColors(color) : theme.buttonColors('red')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: auto;
  }
`;

const linkStyle = () => css`
  text-decoration: none;
  display: inline;
  line-height: 1.5rem;
  ${({ type, theme, underline }) =>
    type
      ? theme.linkStyles(type, underline)
      : theme.linkStyles('standard', underline)};
`;

export const IconWrapper = styled.span`
  margin-left: ${spacing('md')};
  align-self: center;
  position: absolute;
  right: ${spacing('m')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: auto;
    right: auto;
    position: relative;
  }
`;

const StyledLink = styled.a`
  ${props => (props.type === 'button' ? buttonStyle : linkStyle)}
`;

export const HelperText = styled.span`
  ${hideVisually};
`;

export default StyledLink;
