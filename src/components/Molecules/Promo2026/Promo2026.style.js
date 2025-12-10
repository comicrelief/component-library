import styled, { css } from 'styled-components';
import containers from '../../../theme/shared/containers';
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
    // flex-direction: row;
  }
`;

const CopyWrapper = styled.div`
  width: 100%;
  max-width: ${containers.medium};
  height: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  // NEW
  position: absolute;
  width: 50%;
  height: auto;
  // Roughing in some placeholder styles:
  bottom: 25px; 
  background-color: grey;
  border-radius: 15px;

  ${({ copyLeft }) => !copyLeft && 'justify-content: flex-end'};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    position: relative;
    height: 100px;
    // min-height: calc(100vh - 90px);
  }
`;

const Copy = styled.div`
  width: 100%;
  padding: ${spacing('m')};
  ${zIndex('low')};

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
  Container, CopyWrapper, Copy, Media, Video, Gradient
};
