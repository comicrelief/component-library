/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;
const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Slider = ({
  heading
}) => {
  console.log(heading);

  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};

Slider.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Slider;
