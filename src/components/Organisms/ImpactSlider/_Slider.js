/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
// Why doesn't ESLInt see these as valid imports??
// import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import {
  StyledRangerSlider, SliderWrapper, SliderLabel
} from './Slider.style';

const Slider = ({
  min, max, currentAmount, handleChange, steps
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
        width="100%"
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
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  currentAmount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Slider;
