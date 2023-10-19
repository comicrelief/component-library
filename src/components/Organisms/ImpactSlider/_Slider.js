/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const StyledRangerSlider = styled(RangeSlider)`
    background: red;
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

const SliderInput = styled.input`
    border: 1px solid white; 
    /* required for proper track sizing in FF */
    //${({ width }) => width && css` width:  ${width}; `};
    width: 100%;

    -webkit-appearance: none; 
    
    &::-webkit-slider-runnable-track {
        // ${({ width }) => width && css` width:  ${width}; `};
        width: 100%;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: goldenrod;
        margin-top: -4px;
    }
    

    &:focus {
        outline: none;
        &::-webkit-slider-runnable-track {
            background: #ccc;
        }

        &::-moz-range-track {
            background: #ccc;
        }

        &::-ms-fill-lower {
            background: #888;
        }

        &::-ms-fill-upper {
            background: #ccc;
        }

        &::-webkit-slider-thumb {
            
        }
    }

    &::-moz-range-track {
        // ${({ width }) => width && css` width:  ${width}; `};
        width: 100%; // seems like this works fine?

        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }

    &::-moz-range-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: goldenrod;
    }

    &::-moz-focusring{
        outline: 1px solid white;
        outline-offset: -1px;
    }

    // &::focus::-moz-range-track {
    //     background: #ccc;
    // }

    // IE styles
    &::-ms-track {
        // ${({ width }) => width && css` width:  ${width}; `};
        width: 100%;

        height: 5px;
        
        /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
        background: transparent;
        
        /*leave room for the larger thumb to overflow with a transparent border */
        border-color: transparent;
        border-width: 6px 0;
    
        /*remove default tick marks*/
        color: transparent;
    }

    &::-ms-fill-lower {
        background: #777;
        border-radius: 10px;
    }

    &::-ms-fill-upper {
        background: #ddd;
        border-radius: 10px;
    }

    &::-ms-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: goldenrod;
    }

    // &:focus::-ms-fill-lower {
    //     background: #888;
    // }

    // &:focus::-ms-fill-upper {
    //     background: #ccc;
    // }
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
      <SliderInput
        type="range"
        id="ImpactSlider"
        name="ImpactSlider"
        min={min}
        max={max}
        width={width}
        value={currentAmount}
        onChange={handleChange}
        step={steps}
      />
      <StyledRangerSlider />
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
