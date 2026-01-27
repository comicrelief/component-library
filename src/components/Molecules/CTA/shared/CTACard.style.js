import styled, { css } from 'styled-components';
import { bounceUpAnimation } from '../../../../theme/shared/animations';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import fontHelper from '../../../../theme/crTheme/fontHelper';

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: transparent;
  border-radius: 1rem 1rem 0 0;

  // Side-by-side layout: fixed proportion for image (1/3 width) with min/max constraints
  ${({ isSingleCard }) => isSingleCard && css`
    @media ${({ theme }) => theme.breakpoints2026('M')} {
      width: calc(100% / 3);
      min-width: 292px;
      max-width: 309px;
      flex-shrink: 0;
      flex-grow: 0;
      height: 100%;
      border-radius: 1rem 0 0 1rem;
    }

    @media ${({ theme }) => theme.breakpoints2026('L')} {
      min-width: 355px;
      max-width: 362px;
    }

    @media ${({ theme }) => theme.breakpoints2026('XL')} {
      min-width: 363px;
      max-width: 363px;
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
  }
`;

const CTAText = styled.span`
  ${({ theme }) => fontHelper(theme, 'span')}
  color: ${({ theme }) => theme.color('red')};

  @media (min-width: ${breakpointValues.L}px) {
    color: ${({ theme }) => theme.color('grey_4')};
  }
  font-weight: bold;
  text-decoration: none;
  position: relative;
  display: inline-block;
`;

const CTATextUnderline = styled.img`
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;
  transition: opacity 0.15s 0.1s;
  opacity: 0;
  pointer-events: none;
`;

const ArrowIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color('red')};

  @media (min-width: ${breakpointValues.L}px) {
    background: ${({ theme }) => theme.color('grey_4')};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

// Card wrapper link - makes entire card clickable
const CardLink = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
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

  img {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
   }

  // Desktop-only hover effects
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${bounceUpAnimation(true, 10, 1)};

    &:hover {
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);

      ${ImageWrapper} img {
        transform: scale(1.2);
      }

      ${CTAText} {
        text-decoration: none;
        @media (min-width: ${breakpointValues.L}px) {
          color: ${({ theme }) => theme.color('red')};
        }
      }

      ${CTATextUnderline} {
        opacity: 1;
      }

      ${ArrowIconWrapper} {
        @media (min-width: ${breakpointValues.L}px) {
          background: ${({ theme }) => theme.color('red')};
        }
      }
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

  // Carousel mode - fixed card width in horizontal scroll (L and below)
  ${({ isCarousel, isFullWidth }) => isCarousel && !isFullWidth && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      scroll-snap-align: start;
      flex: 0 0 309px;
      width: 309px;
      flex-shrink: 0;
    }
  `}

  // Below L: max-width rules vary by layout
  ${({ isCarousel, isFullWidth }) => !isCarousel && !isFullWidth && css`
    /* Below M: stacked cards, keep them centred */
    @media (max-width: ${breakpointValues.M - 1}px) {
      /* In mobile stack view we want cards to fill the container width */
      width: 100%;
      max-width: 100%;
      margin: 0;
    }

    @media (min-width: ${breakpointValues.M}px) and (max-width: ${breakpointValues.L - 1}px) {
      align-self: stretch;
      ${({ columns }) => (columns === 3
    ? css`
              flex: 0 0 100%;
              max-width: 309px;
            `
    : css`
              flex: 0 0 345px;
              max-width: 345px;
            `)}
    }

    /* If the CTA container is too narrow for 2 cards (<= 705px),
       force a single card to span full width. */
    ${({ columns }) => (columns === 3
    ? css`
          /* 3-col cards: 2-up needs 2*309 + 16 gap (1rem) = 634px full width at <= 633px */
          @container cta-multi-card (max-width: 633px) {
            width: 100%;
            max-width: 100%;
            flex: 1 1 100%;
          }
        `
    : css`
          /* 2-col cards: 2-up needs 2*345 + 16 gap (1rem) = 706px full width at <= 705px */
          @container cta-multi-card (max-width: 705px) {
            width: 100%;
            max-width: 100%;
            flex: 1 1 100%;
          }
        `)}
  `}

  // L breakpoint: min/max rules vary by layout
  ${({ isFullWidth }) => !isFullWidth && css`
    @media (min-width: ${breakpointValues.L}px) and (max-width: ${breakpointValues.XL - 1}px) {
      ${({ columns }) => (
    columns === 3
      ? css`
              flex-basis: calc(33.333% - 1rem);
              min-width: 286px;
              max-width: 363px;
            `
      : css`
              flex-basis: calc(50% - 1rem);
              min-width: 443px;
              max-width: 560px;
            `
  )}
      align-self: stretch;
    }

    // XL breakpoint and above: fixed widths vary by layout
    @media ${({ theme }) => theme.allBreakpoints('XL')} {
      flex-basis: unset;
      width: ${({ columns }) => (columns === 3 ? '363px' : '560px')};
      align-self: stretch;
    }
  `}
`;

const CopyAndLinkSection = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color('white')};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 1;
  min-height: 0;
  border-radius: 0 0 1rem 1rem;

  // Side-by-side layout: text section takes remaining width (2/3) with min/max constraints
  ${({ isSingleCard }) => isSingleCard && css`
    @media ${({ theme }) => theme.breakpoints2026('M')} {
      width: calc(200% / 3);
      min-width: 384px;
      max-width: 650px;
      flex: 1;
      border-radius: 0 1rem 1rem 0;
    }

    @media ${({ theme }) => theme.breakpoints2026('L')} {
      min-width: 541px;
      max-width: 790px;
    }

    @media ${({ theme }) => theme.breakpoints2026('XL')} {
      width: 789px;
    }
  `}
`;

const Copy = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
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

export {
  CardLink,
  // CardsContainer,
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  CTATextUnderline,
  ArrowIconWrapper,
  CardWrapper
};
