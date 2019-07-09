import styled from 'styled-components';
import PaginationItem from './PaginationItem';

const StyledPaginationItem = styled(PaginationItem)`
  &.link {
    padding: 6px 13px 6px 13px;
    border-radius: 30px;
    text-align: center;
    text-decoration: none;
    border-bottom: 0px;
    font-weight: 700;
  }
  &.link--disabled {
    cursor: default;
    background: ${({ theme }) => theme.color('grey')};
    color: ${({ theme }) => theme.color('white')};
  }
  &.link--selected {
    cursor: default;
    background-color: ${({ color, theme }) =>
      color ? theme.color(color) : theme.color('red')};
    ${({ color, theme }) =>
      (color === 'red' &&
        `
          background: ${theme.color('red')};
          color: ${theme.color('white')};
          :hover {
            background: ${theme.color('teal')};
          }
        `) ||
      (color === 'black' &&
        `
          background: ${theme.color('black')};
          color: ${theme.color('white')};
          :hover {
            background: ${theme.color('teal')};
          }
        `) ||
      (color === 'grey' &&
        `
          background: ${theme.color('grey')};
          color: ${theme.color('white')};
          :hover {
            background: ${theme.color('teal')};
          }
        `)};
  }
`;

export default StyledPaginationItem;
