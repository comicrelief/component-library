import styled, { css } from 'styled-components';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  gap: 1rem;

  // Mobile carousel mode - horizontal scroll container (only on mobile, below M breakpoint)
  ${({ isCarousel }) => isCarousel && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: visible;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      padding: 0.75rem 0.5rem;
      margin-left: 0.5rem;

      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `}

  // Mobile stack mode - vertical layout (only on mobile, below M breakpoint)
  ${({ isCarousel }) => !isCarousel && css`
    @media (max-width: ${breakpointValues.M - 1}px) {
      flex-direction: column;
      background: transparent;
    }
  `}

  // Desktop flexbox layout - 2 columns with centered wrap
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
  }

  // Desktop grid layout for XL breakpoint - 3 columns
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    display: grid;
    justify-content: center;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    width: ${({ columns }) => (columns === 2 ? 'fit-content' : '100%')};
    margin: ${({ columns }) => (columns === 2 ? '0 auto' : '0')};
    max-width: 100%;
  }
`;

export default CardsContainer;
