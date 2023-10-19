/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const StyledRangerSlider = styled(RangeSlider)`
    background: white;
    height: 16px;
    border-radius: 10px;
    border: 1px solid black;

    .range-slider__range {
        // background: white;
        height: 14px;
        border-radius: 10px;
        background-color: red;

    }

    .range-slider__thumb {
        // I dont think we should be doing this
        // transition:left 0.1s linear;
        background-color: red;
    }

    // Hide 'range' slider, as per example
    .range-slider__thumb[data-lower] {
        width: 0;
    }
`;

const SliderWrapper = styled.div`x
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

const testBoo = true;

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
        rangeSlideDisabled={testBoo}
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
