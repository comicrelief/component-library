import styled, { css } from 'styled-components';
import { bounceUpAnimation } from '../../../theme/shared/animations';

// Container for all cards - handles grid/stack/carousel layouts
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  gap: 4rem;

  // Mobile carousel mode - horizontal scroll container (structure only, TODO: scrolling)
  ${({ isCarousel }) => isCarousel && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }
  `}

  // Desktop flexbox layout for M breakpoint (740-1023px) - 2 columns with centered wrap
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  // Desktop grid layout for XL breakpoint (1440px+) - 3 columns
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    display: grid;
    grid-template-columns: ${({ columns }) => {
    const cols = columns || 2;
    return `repeat(${cols}, 1fr)`;
  }};
    gap: 3rem;
    justify-content: unset;
  }
`;

// Wrapper for individual card - handles spacing and carousel visibility
const CardWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;

  // Mobile carousel mode - hide individual cards, show carousel instead
  ${({ isCarousel }) => isCarousel && css`
    @media (min-width: 390px) and (max-width: 1022px) {
      display: none;
    }
  `}

  // Desktop M breakpoint (740-1023px) - 2 columns layout
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-basis: calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }

  // Desktop XL breakpoint (1440px+) - 3 columns layout
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-basis: unset;
    max-width: unset;
  }

  // Carousel mode - snap scrolling
  ${({ isCarousel }) => isCarousel && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      scroll-snap-align: start;
      min-width: calc(100% - 3rem);
    }
  `}
`;

// Card wrapper link - makes entire card clickable
const CardLink = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  // Desktop-only hover effects
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${bounceUpAnimation(true, 0.02, 1)};

    &:hover {
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      flex-direction: row;
    }
  `};

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.68, -0.85, 0.265, 1.95);

    // Desktop-only image zoom animation on card hover
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      ${({ isHovered }) => isHovered && css`
        transform: scale(1.08);
      `}
    }
  }
`;

const Image = styled.div`
  height: auto;
  margin: 0 0 0 1.5rem;

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      margin: 0 -1.5rem 0 1.5rem;
    }
  `};

  img {
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 100%;

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      width: calc(50% + 6rem);
    }
  `};

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    width: 100%;
  }
`;

const CopyAndLinkSection = styled.div`
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-shrink: 0;
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
  Container,
  Image,
  ImageWrapper,
  MediaLink,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  ArrowIconWrapper,
  CardsContainer,
  CardWrapper
};
