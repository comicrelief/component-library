import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  margin-bottom: ${spacing('l')};
  ${media('small')} {
    width: 50%;
  }
`;

export { Head, Body };
