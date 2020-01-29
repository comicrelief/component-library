import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const buttonStyle = () => css`
  display: inline-flex;
  padding: 0.875rem ${spacing('m')} 0.625rem;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 2rem;
  line-height: 1.4rem;
  transition: all 0.5s;
  height: 50px;
  cursor: pointer;
  ${({ color, theme }) =>
    color ? theme.buttonColors(color) : theme.buttonColors('red')};
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      text-indent: -1000rem;
      width: 50px;
      padding: 0.875rem 0 0.625rem;
    `}
  @media ${({ theme }) => theme.breakpoint('small')} {
    text-indent: 0;
    width: auto;
    padding: 0.875rem ${spacing('m')} 0.625rem;
  }
  span {
    text-indent: 0;
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
  margin: auto;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-left: ${spacing('md')};
  }
`;

const StyledLink = styled.a`
  ${props => (props.type === 'button' ? buttonStyle : linkStyle)}
`;

export const HelperText = styled.span`
  ${hideVisually};
`;

export default StyledLink;
