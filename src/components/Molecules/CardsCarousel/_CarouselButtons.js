/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const ButtonMoveLeft = styled.div`
  --button-size: 70px;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  top: 50%;
  transform: translateY(-60%);
  left: 20px;

  background: lightgreen;
`;

const ButtonMoveRight = styled(ButtonMoveLeft)`
  left: 0px;
  right: 20px;

  background: lightblue;
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
  ButtonCarouselLeft,
  ButtonCarouselRight
}
