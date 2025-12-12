import styled, { css } from 'styled-components';
// import containers from '../../../theme/shared/containers';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)}; 
  justify-content: center; 

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 32px;
    align-items: center;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  max-width: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: 100%;
    max-width: 1500px;
    // TODO: needs to factor in nav height, margins, padding, etc.
    height: 75vh;
    min-height: 600px;
    max-height: 750px;
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-position: top center;
  }
    
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    max-width: 1500px;
    border-radius: 15px;
    overflow: hidden;

  }
`;

const CopyOuterWrapper = styled.div`
  position: relative;
  width: calc(100% - (2 * 16px)); // margins as per design
  height: 100%;
  left: 0;
  right: 0;
  display: flex;
  margin: -32px auto 32px;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: calc(100% - (2 * 32px)); // margins as per design
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;

    justify-content: ${({ copyLeft }) => (copyLeft === true || copyLeft === undefined
    ? css` flex-start;`
    : css`flex-end;`
  )};    
  }
`;

const Copy = styled.div`
  width: 100%;
  padding:  ${spacing('l')}; 
  ${zIndex('low')};

  // Roughing in some placeholder styles:
  background-color: white;
  border-radius: 15px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
     width: 92%;
  }

  ${({ position }) => position === 'lower' && css`
    padding: ${spacing('xl')} ${spacing('m')};
    @media ${({ theme }) => theme.breakpoints2026('L')} {
      // padding: 6rem ${spacing('m')};
      // margin-top: 6rem;
    }
  `}
`;

const Video = styled.video.attrs(() => ({
  playsInline: true
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CopyInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: 50%;
    height: auto;
    justify-content: ${({ copyLeft }) => (copyLeft === true || copyLeft === undefined
    ? css` flex-end;`
    : css`flex-start;`
  )};    

    // TODO: Do we need this still?
    //  - Nope.
    // ${({ hasVideo, behindTextGradient }) => (hasVideo !== false && behindTextGradient !== 'none') && css`
    //   overflow: hidden;
    //   background-color:${behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)'};
    //   box-shadow: 0px 0px 50px 60px ${behindTextGradient === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.5)'};
   `};
  }
`;

export {
  Container, CopyOuterWrapper, Copy, MediaWrapper, Video, CopyInnerWrapper, OuterWrapper
};
