import styled, { css } from 'styled-components';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

const CardsContainer = styled.div`
  padding-top: ${({ paddingAbove }) => paddingAbove};
  padding-bottom: ${({ paddingBelow }) => paddingBelow};
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
export default CardsContainer;
