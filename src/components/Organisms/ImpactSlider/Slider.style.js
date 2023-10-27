import styled from 'styled-components';
import RangeSlider from 'react-range-slider-input';

const thumbSize = 30;
const outlineSize = thumbSize / 2;
const sizeMultiplier = 1.5;
const animationSpeed = 0.15;

const StyledRangerSlider = styled(RangeSlider)`
    background: white;
    height: 16px;
    border-radius: 16px;
    border: 1px solid black;

    .range-slider__range {
        height: 14px;
        border-radius: 10px;
        background-color: red;
        z-index: 2;
    }

    .range-slider__thumb[data-upper] {
        &:after {
            background-color: white;
            width: ${thumbSize}px;
            height: ${thumbSize}px;
            content: "";
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            border-radius: 50%;
            border: ${outlineSize}px solid red;
            transition-property: width, height, border-width;
            transition-duration: ${animationSpeed}s;
        }

        &:hover {
            &:after {
                width: ${thumbSize * sizeMultiplier}px;
                height: ${thumbSize * sizeMultiplier}px;
                border-width: ${outlineSize / sizeMultiplier}px;
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

export {
  StyledRangerSlider, SliderWrapper, SliderLabel
};
