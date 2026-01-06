import styled, { css } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';
import variants from './_variants';
import { bounceUpAnimation } from '../../../theme/shared/animations';

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
      // Zoom the image in slightly by default so the 'bounce' animation doesn't cause issues
      transform: scale(1.02);
      transition: transform ${0.4}s cubic-bezier(0.68, ${-1.15}, 0.265, ${2.35});

      // As the 'text_banner' variant doesn't even render an image, there was no point in putting further 
      // logic around this, so this'll only be applied to 'half_height_media' in practice.
      // TO-DO: do I need this anymore?
      ${({ variant }) => (variant !== variants.FULL_HEIGHT && 'min-height: 450px;')};  
   }

    &:has(+ div a:hover) {
      > div > img {
        transform: scale(1.04);
      }
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

  ${({ variant }) => (variant !== variants.TEXT_BANNER ? 'margin: -32px 16px 32px;' : 'margin: 32px 16px;')}

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: calc(100% - 64px); 
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: relative;
    top: auto;
    left: auto;
    height: 100%;
    width: 100%;
    ${({ variant }) => (variant !== variants.TEXT_BANNER && 'max-width: 1200px;')}
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

  ${({ variant, theme }) => (variant === variants.TEXT_BANNER && `
    text-align: center;

    @media ${theme.breakpoints2026('M')} {
      padding: 4rem 11%;
    }
  `)};

  ${({ variant, theme }) => (variant === variants.TEXT_BANNER && `
    text-align: center;

    @media ${theme.breakpoints2026('M')} {
      padding: 4rem 11%;
    }
  `)};

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
  
    ${({ variant }) => (variant === variants.TEXT_BANNER ? css`width: 100%;` : css`width: 50%;`)};

    height: auto;

    ${({ variant }) => (variant === variants.TEXT_BANNER ? css`margin: 0;` : css`margin: 32px 0;`)};   

    justify-content: ${({ copyLeft }) => (copyLeft
    ? css` flex-end;`
    : css` flex-start;`
  )};    
  }
`;

const CTAWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 10px 0;
  
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color('red')};

    // TODO: arrow icon
    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      background-color: red;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

const HeroBannerLink = styled.a`
  text-decoration: none;
  ${bounceUpAnimation(true, 10, 2)}

  &:hover {
    // Having to use a class to ensure other spans within this large anchor aren't targeted:
    span.cta {
      // TODO: needs proper underline graphic thing:
      text-decoration: underline;
      
    }
  }
  
  // As the link is now wrapping the content, it'll take over width duties from 'Copy':
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    width: ${({ variant }) => (variant !== variants.TEXT_BANNER ? '92%' : '100%')};
    > div {
      width: 100%;
    }
  }
`;

export {
  Container, CopyOuterWrapper, Copy, MediaWrapper,
  CopyInnerWrapper, OuterWrapper, CTAWrapper, HeroBannerLink
};
