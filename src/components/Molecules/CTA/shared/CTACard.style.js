import styled, { css } from 'styled-components';
import { bounceUpAnimation, springScaleAnimation } from '../../../../theme/shared/animations';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

// Card wrapper link - makes entire card clickable
const CardLink = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;

  // Side-by-side layout for single card desktop view
  ${({ isSingleCard }) => isSingleCard && css`
    @media ${({ theme }) => theme.breakpoints2026('M')} {
      flex-direction: row;
      align-items: stretch;
      // the 4 rem below is to account for the padding of the CopyAndLinkSection
      min-height: calc(219px - 4rem);
    }

    @media ${({ theme }) => theme.breakpoints2026('L')} {
      min-height: calc(272px - 4rem);
    }
  `}

  // Desktop-only hover effects
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${bounceUpAnimation(true, 0.02, 1)};

    &:hover {
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  // Full width mode - always full width, no constraints
  ${({ isFullWidth }) => isFullWidth && css`
    width: 100%;
    max-width: 100%;

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      flex-basis: 100%;
      max-width: 100%;
      height: auto;
    }

    @media ${({ theme }) => theme.allBreakpoints('XL')} {
      flex-basis: 100%;
      max-width: 100%;
      height: auto;
    }
  `}

  // Mobile carousel mode - cards at normal width in horizontal scroll (only on mobile, below M breakpoint)
  ${({ isCarousel, isFullWidth }) => isCarousel && !isFullWidth && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      scroll-snap-align: start;
      flex: 0 0 calc(100% - 1.5rem);
      min-width: calc(100% - 1.5rem);
      max-width: calc(100% - 1.5rem);
      flex-shrink: 0;
      margin-right: 0.5rem;

      &:first-child {
        padding-left: 0.5rem;
      }

      &:last-child {
        margin-right: 0;
        padding-right: 0.5rem;
      }
    }
  `}

  // Mobile stack mode - cards at normal width in vertical stack (only on mobile, below M breakpoint)
  ${({ isCarousel, isFullWidth }) => !isCarousel && !isFullWidth && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      width: 100%;
    }
  `}

  // Desktop M breakpoint - 2 columns layout (only if not full width)
  ${({ isFullWidth }) => !isFullWidth && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      flex-basis: calc(50% - 1rem);
      max-width: 564px;
      height: 100%;
      align-self: stretch;
    }

    // Desktop XL breakpoint - 3 columns layout
    @media ${({ theme }) => theme.allBreakpoints('XL')} {
      flex-basis: unset;
      max-width: 564px;
      height: 100%;
      align-self: stretch;
    }
  `}
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: transparent;
  border-radius: 1rem 1rem 0 0;

  // Side-by-side layout: fixed proportion for image (1/3 width)
  ${({ isSingleCard }) => isSingleCard && css`
    @media ${({ theme }) => theme.breakpoints2026('M')} {
      width: calc(100% / 3);
      flex-shrink: 0;
      flex-grow: 0;
      height: 100%;
      border-radius: 1rem 0 0 1rem;
    }
  `}

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;

    // Side-by-side layout: image should fill height on desktop
    ${({ isSingleCard }) => isSingleCard && css`
      @media ${({ theme }) => theme.breakpoints2026('M')} {
        height: 100%;
        object-fit: cover;
      }
    `}

    // Desktop-only image zoom animation on card hover
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      ${springScaleAnimation(true)}

      ${({ isHovered }) => isHovered && css`
        transform: scale(1.1);
      `}
    }
  }
`;

const CopyAndLinkSection = styled.div`
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 1;
  min-height: 0;
  border-radius: 0 0 1rem 1rem;

  // Side-by-side layout: text section takes remaining width (2/3)
  ${({ isSingleCard }) => isSingleCard && css`
    @media ${({ theme }) => theme.breakpoints2026('M')} {
      width: calc(200% / 3);
      flex: 1;
      border-radius: 0 1rem 1rem 0;
    }
  `}
`;

const Copy = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const CTAText = styled.span`
  color: ${({ theme }) => theme.color('grey')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  font-weight: bold;
  text-decoration: none;

  ${({ isHovered, theme }) => isHovered && css`
    color: ${theme.color('red')};
    text-decoration: underline;
    text-underline-offset: 4px;
    `}
`;

const CTA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
`;

const ArrowIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme, isHovered }) => (isHovered ? theme.color('red') : theme.color('grey'))};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export {
  CardLink,
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  ArrowIconWrapper,
  CardWrapper
};
