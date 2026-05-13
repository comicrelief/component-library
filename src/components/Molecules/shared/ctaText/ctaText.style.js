import styled from 'styled-components';
import Text from '../../../Atoms/Text/Text';

const CtaTextUnderline = styled.img`
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;
  transition: opacity 0.15s 0.1s;
  opacity: 0;
`;

const CtaIconWrapper = styled.div`
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: "";
`;

const CtaText = styled(Text)`
  position: relative;
`;

export { CtaTextUnderline, CtaIconWrapper, CtaText };
