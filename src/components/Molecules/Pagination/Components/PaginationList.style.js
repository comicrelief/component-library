import styled from 'styled-components';
import PaginationList from './PaginationList';

const StyledPaginationList = styled(PaginationList)`
  ul {
    display: inline-block;
    list-style-type: none;
  }
  li {
    float: left;
    padding: 10px;
  }
`;
export default StyledPaginationList;
