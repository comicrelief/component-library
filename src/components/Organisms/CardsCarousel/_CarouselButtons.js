import React from 'react';
import PropTypes from 'prop-types';
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

const createBlurEffect = (gradientDirection, gradColour = 'white') => `
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

  ${({ gradientDirection, blurColour }) => (gradientDirection === 'left' ? createBlurEffect('to right', blurColour) : createBlurEffect('to left', blurColour))}
`;

const ButtonCarousel = ({
  slideIndex,
  setSlideIndex,
  carouselData,
  blurColour,
  direction
}) => {
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(carouselData.length - 1);
    }
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % carouselData.length);
  };

  return (
    <Button
      onClick={direction === 'right' ? nextSlide : prevSlide}
      gradientDirection={direction}
      blurColour={blurColour}
    />
  );
};

ButtonCarousel.propTypes = {
  blurColour: PropTypes.string,
  slideIndex: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  carouselData: PropTypes.arrayOf(
    PropTypes.shape({
      length: PropTypes.number.string
    })
  ).isRequired
};

ButtonCarousel.defaultProps = {
  blurColour: 'white'
};

export {
  ButtonsWrapper,
  ButtonCarousel
};
