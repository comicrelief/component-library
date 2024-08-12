/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const ButtonMoveLeft = styled.button`
  --button-size: 90px;
  width: var(--button-size);
  height: var(--button-size);
  border: 1px solid red;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  background: transparent;
`;

const ButtonMoveRight = styled(ButtonMoveLeft)`
  border: 1px solid blue;
`;

const ButtonCarouselLeft = ({ slideIndex, setSlideIndex, cardCarouselMockData }) => {
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(cardCarouselMockData.length - 1);
    }
  }

  return (
    <ButtonMoveLeft onClick={prevSlide}/>
  );
}

const ButtonCarouselRight = ({ slideIndex, setSlideIndex, cardCarouselMockData }) => {
  const nextSlide = () => {
    if (slideIndex !== cardCarouselMockData.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === cardCarouselMockData.length - 1) {
      setSlideIndex(0);
    }
  }

  return (
    <ButtonMoveRight onClick={nextSlide}/>
  );
}

export {
  ButtonsWrapper,
  ButtonCarouselLeft,
  ButtonCarouselRight
}
