import styled, { css } from 'styled-components';

const buttonStyle = () => css`
  display: inline-block;
  padding: 11px 17px;
  @media ${({ theme }) => theme.breakpoint('large')} {
    padding: 16px 30px;
  }
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
  display: inline-block;
  ${({ linktype, theme }) =>
    linktype ? theme.linkStyles(linktype) : theme.linkStyles('standard')};
`;

const StyledLink = styled.a`
  ${props => (props.linktype === 'button' ? buttonStyle : linkStyle)}
`;

export default StyledLink;
