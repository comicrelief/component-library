import styled from 'styled-components';
import RangeSlider from 'react-range-slider-input';

const thumbSize = 30;
const outlineSize = thumbSize / 2.5;
const sizeMultiplier = 1.4;

const StyledRangerSlider = styled(RangeSlider)`
    background: white;
    height: 16px;
    border-radius: 1rem;
    border: 1px solid ${props => props.theme.color('black')};

    .range-slider__range {
        height: 14px;
        border-radius: 0.5rem;
        background-color: ${props => props.theme.color('red')};
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
            border: ${outlineSize}px solid ${props => props.theme.color('red')};
            transition-property: width, height, border-width;
            transition-duration: 0.15s;
        }

        &:hover {
            &:after {
                width: ${thumbSize * sizeMultiplier}px;
                height: ${thumbSize * sizeMultiplier}px;
                border-width: ${outlineSize}px;
            }
        }
    }

    // Hide other slider thumb, as per example from the docs
    .range-slider__thumb[data-lower] {
        width: 0;
    }
`;

const SliderWrapper = styled.div`
    width: 100%;
    margin-top: 25px;
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
