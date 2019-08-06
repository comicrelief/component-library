import styled from 'styled-components';

import spacing from '../../../theme/shared/spacings';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  padding: ${spacing('xl')};
`;

export { Section, CopyWrapper };
