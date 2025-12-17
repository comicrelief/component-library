import styled, { css } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';
import variants from './consts';

const handleVariant = variant => {
  switch (variant) {
    case variants.FULL_HEIGHT:
      return `
        height: 75vh;
        min-height: 600px;
        max-height: 750px;`;
    case variants.HALF_HEIGHT:
      return `
        height: auto;
        min-height: 450px;`;
    case variants.TEXT_BANNER:
      return `
        // TO-DO... ?
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
      height: 100%;

      // As the 'text_banner' variant doesn't even render an image, there was no point in putting further 
      // logic around this, so this'll only be applied to 'half_height_media' in practice.
      // TO-DO: do I need this anymore?
      ${({ variant }) => (variant !== variants.FULL_HEIGHT && 'min-height: 450px;')};  
   }
  }
`;

const CopyOuterWrapper = styled.div`
  position: relative;
  height: 100%;
  left: 0;
  right: 0;
  display: flex;
  width: calc(100% - (2 * 16px)); 

  ${({ variant }) => (
    variant !== variants.TEXT_BANNER ? 'margin: -32px 16px 32px;' : 'margin: 32px 16px;'
  )}

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: calc(100% - 64px); 
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

    justify-content: ${({ variant, copyLeft }) => {
    if (variant === variants.TEXT_BANNER) return 'center';
    return copyLeft ? 'flex-start' : 'flex-end';
  }};

    ${({ variant }) => (variant && css`
      ${handleVariant(variant)}`)}
 
  }
`;

const Copy = styled.div`
  width: 100%;
  ${zIndex('low')};
  border-radius: 16px;

  padding: ${({ variant }) => (variant === variants.TEXT_BANNER ? '3rem 1.5rem' : '1.5rem')};   

  background-color: ${({ theme, variant, textBannerCopyBackgroundColour }) => (variant === variants.TEXT_BANNER
    ? theme.color(textBannerCopyBackgroundColour)
    : theme.color('white')
  )};   

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding: ${({ variant }) => (variant === variants.TEXT_BANNER && '4rem 1.5rem')};   
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: ${({ variant }) => (variant !== variants.TEXT_BANNER ? '92%' : '100%')};   
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
