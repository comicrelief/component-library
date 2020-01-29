import React from 'react';
import PropTypes from 'prop-types';

const Internal = ({ colour, ...rest }) => {
  return (
    <svg
      {...rest}
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.75"
        y1="9.71143"
        x2="19.25"
        y2="9.71143"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="12.5992"
        y1="2"
        x2="20.0001"
        y2="9.40088"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="11.2164"
        y2="-0.75"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.5386 17.1538)"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

Internal.propTypes = {
  colour: PropTypes.string
};

Internal.defaultProps = {
  colour: '#ffffff'
};

export default Internal;
