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
  ${media('medium')} {
    flex-direction: row;
  }
  ${({ position }) => position === 'upper' && css`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    ${media('medium')} {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
  `}
  ${({ position }) => position === 'lower' && css`
    clip-path: polygon(0 10%,100% 0,100% 100%,0 100%);
    ${media('medium')} {
      clip-path: polygon(0 15%,100% 0,100% 100%,0 100%);
    }
  `}
  ${({ position }) => position === 'end' && css`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 101%);
    border-radius: 0 0 0 2rem;
    ${media('medium')} {
      clip-path: polygon(0 0,100% 0,100% 85%,0% 101%);
      border-radius: 0 0 0 4rem;
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
  ${media('medium')} {
    min-height: calc(100vh - 90px);
  }
`;

const Copy = styled.div`
  width: 100%;
  padding: ${spacing('m')} ${spacing('m')} ${spacing('xl')};
  ${zIndex('low')};
  ${media('medium')} {
    width: 70%;
    padding: ${spacing('xl')} ${spacing('m')};
  }
  ${media('medium')} {
    width: 50%;
    padding: ${spacing('xxl')} ${spacing('m')};
  }
  ${({ position }) => position === 'lower' && css`
    padding: ${spacing('xl')} ${spacing('m')};
    ${media('medium')} {
      padding: 6rem ${spacing('m')};
      margin-top: 6rem;
    }
  `}
`;

const Media = styled.div`
  width: 100%;
  height: auto;
  img {
    object-position: center;
  }
  ${media('medium')} {
    height: 100%;
    position: absolute;
  }
`;

const Video = styled.video.attrs(() => ({
  playsInline: true
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: red;
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
`;

const PlayButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export {
  Container, Wrapper, Copy, Media, Video, PlayButton, PlayButtonWrapper
};
