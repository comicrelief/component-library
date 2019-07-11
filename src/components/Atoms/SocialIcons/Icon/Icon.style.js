import styled from 'styled-components';

const StyledIcon = styled.a`
  display: inline-block;
  padding: 14px 11px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 50%;
  cursor: point;
  background: ${({ backgroundColor, theme }) => theme.color(backgroundColor)};
  color: ${({ color, theme }) => theme.color(color)};
  :hover {
    background: ${({ backgroundColorOnHover, theme }) =>
      theme.color(backgroundColorOnHover)};
    color: ${({ colorOnHover, theme }) => theme.color(colorOnHover)};
  }
`;

export default StyledIcon;
