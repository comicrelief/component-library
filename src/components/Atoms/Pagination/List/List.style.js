import styled from 'styled-components';
import List from './List';

const StyledList = styled(List)`
  ul {
    display: inline-block;
    list-style-type: none;
  }
  li {
    float: left;
    padding: 10px;
  }
`;
export default StyledList;
