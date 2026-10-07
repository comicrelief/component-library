import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  width: 100%;
`;

const CarouselCard = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${spacing('l')};

  .splide {
    position: relative;
    width: 100%;
  }

  .splide__track {
    overflow: hidden;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('grey_medium')};
    border-radius: 10px;
    // Can only set vertical padding on the track; 
    // inline padding has to be set via splide's padding option.
    padding-top: ${spacing('l')};
    padding-bottom: ${spacing('l')};
    box-sizing: border-box;
  }

  .splide__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .splide__arrows {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  button.splide__arrow {
    pointer-events: auto;
    background-color: ${({ theme }) => theme.color('grey_light')};
    border: 1px solid ${({ theme }) => theme.color('grey_medium')};
    opacity: 1;
    width: 1.5rem;
    height: 1.5rem;
    transform: translateY(-50%);

    &:disabled {
      opacity: 0.35;
    }

    svg {
      fill: ${({ theme }) => theme.color('black')};
      height: 0.8rem;
      width: 0.8rem;
    }

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.color('grey_3')};
    }
  }

  .splide__arrow--prev {
    left: 1rem;
  }

  .splide__arrow--next {
    right: 1rem;
  }

  .splide__pagination {
    position: absolute;
    top: calc(100% + ${spacing('sm')});
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    pointer-events: auto;
    
    & li > button {
      height: 6px;
      width: 6px;
      }
    }
  }

  .splide__pagination__page {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.color('black')};
    height: 10px;
    width: 10px;
    margin: 4px;
    opacity: 1;
    transform: none;

    &.is-active {
      background: ${({ theme }) => theme.color('black')};
    }

    &:hover {
      cursor: pointer;
      opacity: 0.85;
    }
  }
`;

const SlideCopy = styled.p`
  margin: 0;
  padding: 0 4.5rem;
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  line-height: 20px;
  color: ${({ theme }) => theme.color('black')};

  strong {
    font-weight: 700;
  }
`;

export {
  Wrapper, CarouselCard, SlideCopy
};
