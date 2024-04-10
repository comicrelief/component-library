import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  padding: ${spacing('xl')};
`;

export { Section, CopyWrapper };
