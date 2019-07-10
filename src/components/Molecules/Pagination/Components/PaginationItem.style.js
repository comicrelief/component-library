import styled from 'styled-components';
import PaginationItem from './PaginationItem';

const StyledPaginationItem = styled(PaginationItem)`
  &.link {
    padding: 9px 14px 9px 14px;
    border-radius: 30px;
    text-align: center;
    text-decoration: none;
    border-bottom: 0px;
    font-weight: 700;
  }
  &.link--disabled,
  &.link--morePagesBefore,
  &.link--morePagesAfter {
    cursor: default;
    background: ${({ theme }) => theme.color('white')};
    color: ${({ theme }) => theme.color('grey_medium')};
  }
  &.link--selected {
    cursor: default;
    background: ${({ color, theme }) => theme.color(color)};
    color: ${({ theme }) => theme.color('white')};
  }
`;

export default StyledPaginationItem;
