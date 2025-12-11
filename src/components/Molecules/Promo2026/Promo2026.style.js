import styled, { css } from 'styled-components';
// import containers from '../../../theme/shared/containers';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  // overflow: hidden;
  // TODO: set via prop still?
  // background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)}; 
  justify-content: center; 

  // "Row colour"
  background-color: orange;
  
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
  align-items: center;


  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: auto;
    max-width: 1500px;
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: auto;

  img {
    object-position: center;
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
  margin: 0 auto;
  display: flex;
  // align-items: center;
  margin-top: -32px;

  // TODO LATER
  //${({ copyLeft }) => !copyLeft && 'justify-content: flex-end'};

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
    justify-content: flex-start;
  }
`;

const Copy = styled.div`
  width: 92%;
  padding:  ${spacing('l')}; 
  ${zIndex('low')};

  // Roughing in some placeholder styles:
  background-color: white;
  border-radius: 15px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
   // width: auto;
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
    justify-content: end;

    // TODO LATER:
    // ${({ copyLeft }) => (!copyLeft) && css`
    //   left: auto;
    //   right: 0;
    // `};

    // TODO: Do we need this still?
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
