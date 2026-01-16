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

  img {
    // Zoom the image in slightly by default so the 'bounce' animation doesn't cause issues
    transform: scale(1.02);
    transition: transform ${0.4}s cubic-bezier(0.68, ${-1.15}, 0.265, ${2.35});
   }
`;

export default SingleCardContainer;
