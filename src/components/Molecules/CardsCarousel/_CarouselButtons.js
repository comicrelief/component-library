/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const createBlurEffect = (gradientDirection, gradColour="white") => `
  background: linear-gradient(${gradientDirection},
    ${gradColour} 0%,
    transparent 100%);
`;

const Button = styled.button`
  border: none;
  width: 30%;
  height: 100%;
  cursor: pointer;
  z-index: 999 !important;
  background: transparent;

  ${({ gradientDirection, blurColour }) => gradientDirection === 'left' ? createBlurEffect('to right', blurColour) : createBlurEffect('to left', blurColour)}
`;

const ButtonCarousel = ({
  slideIndex,
  setSlideIndex,
  cardCarouselMockData,
  blurColour,
  direction
}) => {
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(cardCarouselMockData.length - 1);
    }
  }

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % cardCarouselMockData.length);
  }

  return (
    <Button
      onClick={direction === 'right' ? prevSlide : nextSlide}
      gradientDirection={direction}
      blurColour={blurColour}
    />
  );
}

export {
  ButtonsWrapper,
  ButtonCarousel
}
