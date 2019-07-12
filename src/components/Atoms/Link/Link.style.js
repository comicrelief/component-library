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
  cursor: point;
  background-color: ${({ color, theme }) =>
    color ? theme.color(color) : theme.color('red')};
  ${({ color, theme }) =>
    (color === 'red' &&
      css`
        background: ${theme.color('red')};
        color: ${theme.color('white')};
        :hover {
          background: ${theme.color('teal')};
        }
      `) ||
    (color === 'black' &&
      css`
        background: ${theme.color('black')};
        color: ${theme.color('white')};
        :hover {
          background: ${theme.color('teal')};
        }
      `) ||
    (color === 'grey' &&
      css`
        background: ${theme.color('grey')};
        color: ${theme.color('white')};
        :hover {
          background: ${theme.color('teal')};
        }
      `) ||
    (color === 'green' &&
      css`
        background: ${theme.color('green')};
        color: ${theme.color('black')};
        :hover {
          background: ${theme.color('green_light')};
        }
      `)};
`;

const StyledLink = styled.a`
  ${props =>
    props.inline
      ? css`
          color: #000;
          text-decoration: none;
          display: inline-block;
          padding: 0 2px 1px;
          border-bottom: 2px solid;
          border-bottom-color: #000;
        `
      : buttonStyle}
`;

export default StyledLink;
