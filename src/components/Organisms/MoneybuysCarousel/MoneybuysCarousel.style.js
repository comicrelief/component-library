import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  width: 100%;
`;

const CarouselCard = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${spacing('l')};
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid ${({ theme }) => theme.color('grey')};
  border-radius: 10px;
  padding: ${spacing('l')} ${spacing('xl')};
  box-sizing: border-box;

  .splide {
    position: relative;
    width: 100%;
  }

  .splide__track {
    overflow: hidden;
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
    opacity: 1;
    width: 2.5rem;
    height: 2.5rem;
    transform: translateY(-50%);

    &:disabled {
      opacity: 0.35;
    }

    svg {
      fill: ${({ theme }) => theme.color('black')};
      height: 0.85rem;
      width: 0.85rem;
    }

    &:hover:not(:disabled) {
      opacity: 0.85;
    }
  }

  .splide__arrow--prev {
    left: 0;
  }

  .splide__arrow--next {
    right: 0;
  }

  .splide__pagination {
    position: absolute;
    top: calc(100% + ${spacing('sm')});
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    pointer-events: auto;
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
  padding: 0 ${spacing('xl')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  line-height: 1.4;
  color: ${({ theme }) => theme.color('black')};

  strong {
    font-weight: 700;
  }
`;

export {
  Wrapper, CarouselCard, SlideCopy
};
