import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const handleVariant = variant => {
  switch (variant) {
    case 'full_height_media':
      return `
        height: 75vh;
        min-height: 600px;
        max-height: 750px;`;
    case 'half_height_media':
      return `
        height: auto;
        min-height: 450px;`;
    case 'text_banner':
      return `
        // TO-DO  
      `;
    // Between strict mapping to the CMS field *and* a prop default value being set,
    // this shouldn't ever be actually used, but ESlint still demands it 🤷
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
  background: ${({ theme, pageBackgroundColour }) => theme.color(pageBackgroundColour)}; 
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
    border-radius: 16px;
    overflow: hidden;
    background-color: ${({ theme, componentBackgroundColour }) => theme.color(componentBackgroundColour)}; 

    ${({ variant }) => (variant && css`
      ${handleVariant(variant)}
      `
  )}
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
    
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: absolute;
    top: 0;
    left: 0;

    img {
      object-position: top center;

      // As the 'text_banner' variant doesn't even render an image, there was no point in putting further 
      // logic around this, so this'll only be applied to 'half_height_media' in practice.
      ${({ variant }) => (
    variant === 'full_height_media'
      ? 'height: 100%;'
      : `min-height: 300px; 
          height: 100%;`)};  
   }
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
    position: relative;
    top: auto;
    left: auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    ${({ variant }) => (variant && css`
      ${handleVariant(variant)}`)}

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

const CopyInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: 50%;
    height: auto;
    margin: 32px 0;
    justify-content: ${({ copyLeft }) => (copyLeft
    ? css` flex-end;`
    : css` flex-start;`
  )};    
  }
`;

export {
  Container, CopyOuterWrapper, Copy, MediaWrapper, CopyInnerWrapper, OuterWrapper
};
