import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const createBlurEffect = (gradientDirection, gradColour = 'white') => `
  background: linear-gradient(${gradientDirection},
    ${gradColour} 0%,
    transparent 100%);
`;

const LeftButton = styled.button`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 20%;
  height: 100%;
  z-index: 999;
  border: none;
  background: transparent;

  ${({ gradientDirection, blurColour }) => (gradientDirection === 'left' ? createBlurEffect('to right', blurColour) : createBlurEffect('to left', blurColour))}
`;

const RightButton = styled(LeftButton)`
  position: absolute;
  left: auto;
  top: 0%;
  right: 0%;
`;

const CarouselButton = ({
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
    <>
      {direction === 'left' ? (
        <LeftButton
          onClick={prevSlide}
          gradientDirection={direction}
          blurColour={blurColour}
        />
      )
        : (
          <RightButton
            onClick={nextSlide}
            gradientDirection={direction}
            blurColour={blurColour}
          />
        )}
    </>
  );
};

CarouselButton.propTypes = {
  blurColour: PropTypes.string,
  slideIndex: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  carouselData: PropTypes.arrayOf(
    PropTypes.shape({
      length: PropTypes.number.string
    })
  ).isRequired
};

CarouselButton.defaultProps = {
  blurColour: 'white'
};

export default CarouselButton;
