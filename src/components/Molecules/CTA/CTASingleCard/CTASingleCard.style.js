import styled from 'styled-components';
import { snakeCase } from 'lodash';

const SingleCardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  background: ${({ theme, backgroundColor }) => (
    backgroundColor ? theme.color(snakeCase(backgroundColor)) : 'transparent'
  )};
`;

export default SingleCardContainer;
