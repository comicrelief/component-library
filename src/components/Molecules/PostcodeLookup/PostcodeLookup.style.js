import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing('md')};
  }
`;

export default Container;
