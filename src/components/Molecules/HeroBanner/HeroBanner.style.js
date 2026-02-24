import styled, { css } from 'styled-components';
import variants from './_variants';
import { bounceUpAnimation } from '../../../theme/shared/animations';
import defaultBoxShadow from '../../../theme/shared/boxShadows';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';

// Lil helper function to streamline things somewhat:
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
    // No tweaks needed for the remaining 'text_banner' variant:
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
  ${({ paddingTop, paddingBottom }) => css`padding: ${paddingTop} 0 ${paddingBottom};`}

  ${({ variant, paddingTop, paddingBottom }) => (variant === variants.TEXT_BANNER && css`
    padding: ${paddingTop} 1rem ${paddingBottom};

    @media ${({ theme }) => theme.breakpoints2026('M')} {
      padding-left: 2rem; padding-right: 2rem;
    }
  `)};

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    ${({ paddingTop, paddingBottom }) => css`padding: ${paddingTop} 2rem ${paddingBottom};`}
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
    border-radius: 1rem;
    overflow: hidden;

    ${({ variant }) => (variant && css`
      ${handleVariant(variant)}
    `)}
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

      ${({ variant }) => (variant === variants.HALF_HEIGHT && 'min-height: 450px;')};  
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
  width: calc(100% - (2 * 1rem)); 
  
  ${({ variant }) => (variant !== variants.TEXT_BANNER ? 'margin: -2rem 1rem 0;' : 'margin: 0; width: 100%;')}

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    ${({ variant }) => (variant !== variants.TEXT_BANNER
    ? 'margin: -2rem 2rem 0rem; width: calc(100% - (2 * 2rem));'
    : 'margin: 0; width: 100%;')}
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
      ${handleVariant(variant)}
    `)}
  }
`;

const Copy = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: ${({ variant }) => (variant === variants.TEXT_BANNER ? '3rem 2rem' : '2rem')};
  color: ${({ theme, copyColour }) => theme.color(copyColour)};
  ${defaultBoxShadow()}

  background-color: ${({ theme, variant, textBannerCopyBackgroundColour }) => (variant === variants.TEXT_BANNER
    ? theme.color(textBannerCopyBackgroundColour)
    : theme.color('white')
  )};

  ${({ variant, theme }) => (variant !== variants.TEXT_BANNER && `
    @media ${theme.breakpoints2026('L')} {
      padding: 2rem;
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
  border-radius: 1rem;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    height: auto;

    ${({ variant }) => (variant === variants.TEXT_BANNER ? css`width: 100%;` : css`width: 50%;`)};

    ${({ variant }) => (variant === variants.TEXT_BANNER ? css`margin: 0;` : css`margin: 2rem 0;`)};   

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
  margin-top: 2rem;

  ${({ variant }) => (variant !== variants.TEXT_BANNER && css`
    padding-right: 2.5rem;
    
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.color('red')};
    }
  `)}
`;

const CtaIconWrapper = styled.div`
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: "";
`;

const CtaText = styled(Text)`
  position: relative;
`;

const CtaTextUnderline = styled.img`
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;
  transition: opacity 0.15s 0.1s;
  opacity: 0;
`;

const HeroBannerLink = styled.a`
  text-decoration: none;
  width: 100%;

  > div {
    transition: box-shadow 0.35s;
    ${defaultBoxShadow()}
  }

  &:hover {
    > div {
      ${defaultBoxShadow(true)}
    }
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {

    ${bounceUpAnimation(true, 10, 2, true)}

    // As the link is now wrapping the content, it'll take over width duties from 'Copy':
    width: ${({ variant }) => (variant !== variants.TEXT_BANNER ? '92%' : '100%')};
    
    > div {
      width: 100%;
    }

    // Fade in the 'Alt CTA'-style squiggley underline:
    &:hover {
      img.cta-text-underline {
        opacity: 1;
      }
    }
  }
`;

const LogoImageWrapper = styled.div`
  position: absolute;
  margin: 1rem;
  width: 130px;
  height: 80px;

  // Logo aligned top-right by design; the images for these
  // S and M breakpoints will be picked to suit this:
  top: 0;
  right: 0;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    margin: 1.5rem;
    width: 160px;
    height: 100px;

    ${({ imageRight }) => (imageRight
    ? css` right: 0;`
    : css` left: 0;`
  )};   
  }
`;

const LogoImage = styled(Picture)`
  width: 100%;
  height: 100%;

  img {
    width: inherit;
    height: inherit;
    object-position: top right;

    @media ${({ theme }) => theme.breakpoints2026('L')} {
      ${({ imageRight }) => (!imageRight && css`object-position: top left;`)};
    }
  }
`;

export {
  Container, CopyOuterWrapper, Copy, MediaWrapper,
  CopyInnerWrapper, OuterWrapper, CTAWrapper, HeroBannerLink,
  CtaIconWrapper, CtaText, CtaTextUnderline, LogoImageWrapper, LogoImage
};
