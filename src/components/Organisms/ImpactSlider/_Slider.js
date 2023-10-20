/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// Why doesn't ESLInt see these as valid imports??
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const thumbSize = 30;
const thumbDotSize = thumbSize / 3;
const sizeMultiplier = 1.5;
const animationSpeed = 0.3;

const StyledRangerSlider = styled(RangeSlider)`
    background: white;
    height: 16px;
    border-radius: 10px;
    border: 1px solid black;

    .range-slider__range {
        height: 14px;
        border-radius: 10px;
        background-color: red;
        z-index: 2;
    }

    .range-slider__thumb {
        background-color: red;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        transition-property: width, height;
        transition-timing-function: cubic-bezier(1, 0, 0, 1.4);
        transition-duration: ${animationSpeed}s;

        &:after {
          content: "";
          width: ${thumbDotSize}px;
          height: ${thumbDotSize}px;
          position: absolute;
          top: ${thumbDotSize}px;
          left: ${thumbDotSize}px;
          background-color: white;
          border-radius: 50%;
          transition-property: width, height, left, top;
          transition-timing-function: inherit;
          transition-duration: inherit;
        }

        &:hover {
          width: ${thumbSize * sizeMultiplier}px;
          height: ${thumbSize * sizeMultiplier}px;

          &:after {
            width: ${thumbDotSize * sizeMultiplier}px;
            height: ${thumbDotSize * sizeMultiplier}px;
            top: ${thumbDotSize * sizeMultiplier}px;
            left: ${thumbDotSize * sizeMultiplier}px;
          }
        }
    }

    // Hide 'range' slider, as per example
    .range-slider__thumb[data-lower] {
        width: 0;
    }
`;

const SliderWrapper = styled.div`
    width: 100%;
`;

const SliderLabel = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const Slider = ({
  width, min, max, currentAmount, handleChange, steps
}) => {
  console.log('Dont make me restructre my code WHILE I AM WORKING ON IT, ESLINT');

  return (
    <SliderWrapper>
      <SliderLabel htmlFor="ImpactSlider">
        Slider label to be hidden
      </SliderLabel>
      <StyledRangerSlider
        id="ImpactSlider"
        name="ImpactSlider"
        min={min}
        max={max}
        width={width}
        value={[0, currentAmount]}
        onInput={handleChange}
        step={steps}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled
      />

    </SliderWrapper>

  );
};

Slider.propTypes = {
  width: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  currentAmount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Slider;
