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
  border-radius: 15px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: 100%;
    max-width: 1500px;
    
    ${({ variant }) => (variant === 'full-height'
    ? css`
      // TODO: needs to factor in nav height, margins, padding, etc.
      height: 75vh;
      min-height: 600px;
      max-height: 750px;
    `
    : css`
      height: auto;
      min-height: 300px;
      max-height: none;`
  )};    
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
    
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    max-width: 1500px;
    border-radius: 15px;
    overflow: hidden;
  }

  img {
    object-position: top center;

    ${({ variant }) => (variant === 'full-height'
    ? css`
      height: 100%;
    `
    : css`
      height: 450px
    `
  )};  




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
    justify-content: ${({ copyLeft }) => (copyLeft
    ? css` flex-start;`
    : css` flex-end;`
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
    justify-content: ${({ copyLeft }) => (copyLeft
    ? css` flex-end;`
    : css` flex-start;`
  )};    
  }
`;

export {
  Container, CopyOuterWrapper, Copy, MediaWrapper, Video, CopyInnerWrapper, OuterWrapper
};
