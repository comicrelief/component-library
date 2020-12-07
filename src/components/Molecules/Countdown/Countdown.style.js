import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  display: flex;
`;

const Digits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${spacing('sm')};
  &:first-child {
    margin-left: 0;
  }
`;

export { Wrapper, Digits };
