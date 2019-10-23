import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const buttonStyle = () => css`
  display: inline-block;
  padding: ${spacing('sm')} ${spacing('md')};
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  ${({ color, theme }) =>
    color ? theme.buttonColors(color) : theme.buttonColors('red')};
`;

const linkStyle = () => css`
  text-decoration: none;
  display: inline;
  ${({ type, theme, underline }) =>
    type
      ? theme.linkStyles(type, underline)
      : theme.linkStyles('standard', underline)};
`;

const StyledLink = styled.a`
  ${props => (props.type === 'button' ? buttonStyle : linkStyle)}
`;

export default StyledLink;
