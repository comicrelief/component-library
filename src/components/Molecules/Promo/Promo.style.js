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
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: row;
  }
  ${({ position }) => position === 'upper' && css`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
  `}
  ${({ position }) => position === 'lower' && css`
    clip-path: polygon(0 10%,100% 0,100% 100%,0 100%);
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      clip-path: polygon(0 15%,100% 0,100% 100%,0 100%);
    }
  `}
  ${({ position }) => position === 'end' && css`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 101%);
    border-radius: 0 0 0 2rem;
    @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  position: relative;

  ${({ copyLeft }) => !copyLeft && 'justify-content: flex-end'};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    min-height: calc(100vh - 90px);
  }
`;

const Copy = styled.div`
  width: 100%;
  padding: ${spacing('m')} ${spacing('m')} ${spacing('xl')};
  ${zIndex('low')};

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 100%;
    padding: ${spacing('xxl')} ${spacing('m')};
  }

  ${({ position }) => position === 'lower' && css`
    padding: ${spacing('xl')} ${spacing('m')};
    @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  @media ${({ theme }) => theme.allBreakpoints('L')} {
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

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;

    ${({ copyLeft }) => (!copyLeft) && css`
      left: auto;
      right: 0;
    `};

    ${({ hasVideo, behindTextGradient }) => (hasVideo !== false && behindTextGradient !== 'none') && css`
      overflow: hidden;
      background-color:${behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)'};
      box-shadow: 0px 0px 50px 60px ${behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)'};
   `};
  }
`;

export {
  Container, Wrapper, Copy, Media, Video, Gradient
};
