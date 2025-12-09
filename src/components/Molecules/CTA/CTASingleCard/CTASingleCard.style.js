import styled from 'styled-components';
import { snakeCase } from 'lodash';

const SingleCardContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme, backgroundColor }) => (
    backgroundColor ? theme.color(snakeCase(backgroundColor)) : 'transparent'
  )};
`;

export default SingleCardContainer;
