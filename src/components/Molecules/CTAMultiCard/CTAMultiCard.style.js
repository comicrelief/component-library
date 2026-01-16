import styled, { css } from 'styled-components';
import { bounceUpAnimation, springScaleAnimation } from '../../../theme/shared/animations';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import fontHelper from '../../../theme/crTheme/fontHelper';

const CardsContainer = styled.div`
  padding-top: ${({ paddingAbove }) => paddingAbove || '2rem'};
  padding-bottom: ${({ paddingBelow }) => paddingBelow || '2rem'};
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  gap: 1rem;

  // Mobile stack mode - vertical layout (only on mobile, below M breakpoint)
  ${({ isCarousel }) => !isCarousel && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      flex-direction: column;
      background: transparent;
    }
  `}

  // Non-mobile layout (M and above) - consistent across carousel/non-carousel, as above M we only do stacked mode.
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
  }

  // Carousel mode - horizontal scroll container (M and below)
  ${({ isCarousel }) => isCarousel && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      width: 100%;
      margin: 0;
      max-width: 100%;
      overflow-x: visible;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      padding: 0.75rem 1rem;

      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `}

  // Desktop grid layout for XL breakpoint - 3 columns
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    ${({ columns }) => columns === 3 && css`
      display: grid;
      justify-content: center;
      align-items: stretch;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      width: 100%;
      margin: 0 auto;
      max-width: 100%;

      /*
      Above 1724px (3 * 564px which is the card max-width + 2 * 1rem), this is to stop the visible "gaps" growing
      between the cards on really wide screens (so the only space between cards is the gap (1rem)).
       */
      @media (min-width: 1724px) {
        grid-template-columns: repeat(3, 564px);
        width: fit-content;
      }
    `}
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: transparent;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;

    // Desktop-only image zoom animation on card hover
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      ${springScaleAnimation(true)}
    }
  }
`;

const CTAText = styled.span`
  ${({ theme }) => fontHelper(theme, 'span')}
  color: ${({ theme }) => theme.color('grey')};
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
  background: ${({ theme }) => theme.color('grey')};
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

  img {
    // Zoom the image in slightly by default so the 'bounce' animation doesn't cause issues
    transform: scale(1.02);
    transition: transform ${0.4}s cubic-bezier(0.68, ${-1.15}, 0.265, ${2.35});
   }

  // Desktop-only hover effects
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${bounceUpAnimation(true, 0.02, 1)};

    &:hover {
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);

      ${ImageWrapper} img {
        transform: scale(1.1);
      }

      ${CTAText} {
        color: ${({ theme }) => theme.color('red')};
        text-decoration: none;
      }

      ${CTATextUnderline} {
        opacity: 1;
      }

      ${ArrowIconWrapper} {
        background: ${({ theme }) => theme.color('red')};
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

  // Carousel mode - cards at normal width in horizontal scroll (Medium and below)
  ${({ isCarousel }) => isCarousel && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      scroll-snap-align: start;
      flex: 0 0 calc(100% - 1.5rem);
      min-width: calc(100% - 1.5rem);
      max-width: calc(100% - 1.5rem);
      flex-shrink: 0;
    }
  `}

  // Mobile stack mode - cards at normal width in vertical stack (only on mobile, below M breakpoint)
  ${({ isCarousel }) => !isCarousel && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      width: 100%;
    }
  `}

  // Desktop M breakpoint - 2 columns layout
  // - when isCarousel is true we only switch to "desktop" layout at L and above
  @media ${({ theme, isCarousel }) => theme.allBreakpoints(isCarousel ? 'L' : 'M')} {
    flex-basis: calc(50% - 1rem);
    max-width: 564px;
    align-self: stretch;
  }

  // Desktop XL breakpoint - 3 columns layout
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-basis: unset;
    max-width: 564px;
    align-self: stretch;
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
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  CTATextUnderline,
  ArrowIconWrapper,
  CardsContainer,
  CardWrapper
};
