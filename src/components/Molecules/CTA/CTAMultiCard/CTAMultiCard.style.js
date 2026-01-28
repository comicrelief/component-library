import styled, { css } from 'styled-components';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

export const CardsQueryWrapper = styled.div`
  /* Container for “single card per row” sizing.
     Keep this off the flex container itself to avoid layout side-effects.
     As using inline-size makes it go wild if you try there.
     */
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

  ${({ isCarousel }) => !isCarousel && css`
    padding-inline: 1rem;
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding-inline: 2rem;
    }
  `}

  ${({ isCarousel }) => isCarousel && css`
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      padding-inline: 2rem;
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
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    column-gap: 2rem;
  }

  /* Ensure 2-column layout behaves itself at L+.
     This should apply regardless of isCarousel (since we only use Splide below L). */
  ${({ columns, useSplideCarousel }) => !useSplideCarousel && columns === 2 && css`
    @media (min-width: ${breakpointValues.L}px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(443px, 560px));
      justify-content: center;
      align-items: stretch;
      column-gap: 2rem;
      row-gap: 2rem;
      width: 100%;
      max-width: 100%;
      margin: 0;

      /* if there's an odd "orphan" card on the last row, center it. */
      & > *:last-child:nth-child(odd) {
        grid-column: 1 / -1;
        justify-self: center;
        width: min(100%, 560px);
      }
    }
  `}

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

      /*
       * Orphan handling: if we have a 3-column grid but the last row contains
       * a single card (e.g. 4 cards total), center that last card.
       */
      & > *:last-child:nth-child(3n + 1) {
        grid-column: 2;
        justify-self: center;
      }
    `}
  }
`;
export default CardsContainer;
