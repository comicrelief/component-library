import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const handleVariant = variant => {
  switch (variant) {
    case 'full_height_image_or_video':
      return `
        height: 75vh;
        min-height: 600px;
        max-height: 750px;`;

    case 'half_height_image_or_video':
      return `
        height: auto;
        min-height: 300px;
        max-height: none;`;

    case 'responsive_text':
      return `
        // TODO
      `;

    // Required, but given that we set the variant prop default as full height
    // when there's no value supplied, this should't ever be used
    default:
      return null;
  }
};

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

    ${({ variant }) => { handleVariant(variant); }}
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

    ${({ variant }) => (
    `${(variant === 'full_height_image_or_video'
      ? 'height: 100%;'
      // As the 'responsive_text' variant doesn't even render an image, there was
      // no point in putting further logic around this, so this'll only
      // be applied to 'half_height_image_or_video' in practice.
      : 'height: 450px;'
    )}`
  )

};  
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
  background-color: ${({ theme }) => theme.color('white')}; 
  border-radius: 16px;

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
