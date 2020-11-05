import styled, { css } from 'styled-components';
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
  ${({ position }) => position === 'top' && css`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    ${media('small')} {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
  `}
  ${({ position }) => position === 'end' && css`
    clip-path: polygon(0 10%,100% 0,100% 100%,0 100%);
    ${media('small')} {
      clip-path: polygon(0 15%,100% 0,100% 100%,0 100%);
    }
  `}
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
    min-height: calc(100vh - 90px);
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
  ${({ position }) => position === 'end' && css`
    padding: 4rem 1.5rem;
    margin-top: 4rem;
    ${media('small')} {
      padding: 6rem 1.5rem;
      margin-top: 6rem;
    }
  `}
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
