import styled from 'styled-components';
import RichText from '../../Atoms/RichText/RichText';

const OuterWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  background-color: yellow;
  padding: 30px 100px;
`;

const Copy = styled(RichText)`
  position: relative;
`;

const CurrentAmountCopy = styled.p`
  font-weight: bold;
`;

export {
  OuterWrapper, Copy, CurrentAmountCopy
};
