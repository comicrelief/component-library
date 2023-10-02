import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const StyledWrapper = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing('md')};
  }
`;

export default StyledWrapper;
