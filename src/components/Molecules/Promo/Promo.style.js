import styled from 'styled-components';
import { media, container } from '../../../theme/shared/size';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  flex-direction: row;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${container.medium};
  height: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${({ copyFirst }) => !copyFirst && 'justify-content: flex-end'};
  min-height: calc(100vh - 75px);
  ${media('small')} {
    min-height: 840px;
  }
`;

const Copy = styled.div`
  width: 90%;
  padding: ${spacing('m')} ${spacing('m')} ${spacing('xl')};
  ${zIndex('low')};
  ${media('small')} {
    width: 70%;
    padding: ${spacing('xl')} ${spacing('m')};
  }
  ${media('medium')} {
    width: 50%;
    padding: ${spacing('xxl')} ${spacing('m')};
  }
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    object-position: center;
  }
`;

export {
  Container, Wrapper, Copy, Media
};
