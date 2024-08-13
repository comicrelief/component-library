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

const createBlurEffect = (direction) => `
  background: linear-gradient(${direction},
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%);
  filter: blur(1px);
`;

export const blurEffectLeftToRight = createBlurEffect('to right');
export const blurEffectRightToLeft = createBlurEffect('to left');

const Button = styled.button`
border: none;
  width: 30%;
  height: 100%;
  cursor: pointer;
  z-index: 999 !important;
  background: transparent;

  ${({ direction }) => direction === 'left-to-right' ? blurEffectLeftToRight : blurEffectRightToLeft}
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
    <Button onClick={prevSlide} direction='left-to-right'/>
  );
}

const ButtonCarouselRight = ({ slideIndex, setSlideIndex, cardCarouselMockData }) => {
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % cardCarouselMockData.length);
  }

  return (
    <Button onClick={nextSlide} direction='right-to-left'/>
  );
}

export {
  ButtonsWrapper,
  ButtonCarouselLeft,
  ButtonCarouselRight
}
