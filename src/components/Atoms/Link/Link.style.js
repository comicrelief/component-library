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

export const StyledLink = styled.a`
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

export const WrapperLink = styled.span`
  a {
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
  }
`;
