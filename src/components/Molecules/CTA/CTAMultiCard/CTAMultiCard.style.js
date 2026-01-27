import styled, { css } from 'styled-components';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import spacing from '../../../../theme/shared/spacing';

export const CardsQueryWrapper = styled.div`
  /* Container for CQ-based “single card per row” sizing.
     Keep this off the flex container itself to avoid layout side-effects. */
  container-type: inline-size;
  container-name: cta-multi-card;
  width: 100%;
`;

export const CardsSection = styled.div`
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  padding-top: ${({ paddingAbove }) => paddingAbove};
  padding-bottom: ${({ paddingBelow }) => paddingBelow};
`;

export const CardsInner = styled.div`
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;

  /* Provide mobile gutters for non-carousel stack mode. */
  ${({ isCarousel }) => !isCarousel && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      padding-left: ${spacing('md')};
      padding-right: ${spacing('md')};
    }
  `}
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

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

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    column-gap: 2rem;
  }

  // Carousel mode - horizontal scroll container (M and below)
  ${({ isCarousel }) => isCarousel && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      ${({ useSplideCarousel }) => (useSplideCarousel ? css`
        display: block;
        cursor: grab;
        width: 100%;
        margin: 0;
        max-width: 100%;
        padding: 0.75rem 1rem;
        gap: 0;

        .splide__list {
          align-items: stretch;
        }

        .splide__slide {
          display: flex;
          height: auto;
        }
      ` : css`
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        width: 100%;
        margin: 0;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        padding: 0.75rem 1rem;

        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `)}
    }
  `}

  // Desktop grid layout for XL breakpoint - 3 columns
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    ${({ columns }) => columns === 3 && css`
      display: grid;
      justify-content: center;
      align-items: stretch;
      grid-template-columns: repeat(3, minmax(0, 363px));
      width: 100%;
      margin: 0 auto;
      max-width: 100%;
    `}
  }
`;
export default CardsContainer;
