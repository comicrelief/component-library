import React from 'react';
import PropTypes from 'prop-types';

const External = ({ colour, ...rest }) => {
  return (
    <svg
      {...rest}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.25"
        y1="18.7932"
        x2="2.28333"
        y2="4.79321"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="16.0939"
        y1="18.7932"
        x2="16.0939"
        y2="15.2932"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="1.75"
        y1="4.79321"
        x2="5.25"
        y2="4.79321"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="1.75"
        y1="18.7932"
        x2="15.75"
        y2="18.7932"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="12.629"
        y2="-0.75"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 9.53259 9.65442)"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="9.92324"
        y2="-0.75"
        transform="matrix(0 -1 -1 0 19.3328 10.6732)"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="10.5251"
        y1="0.793213"
        x2="19.6983"
        y2="0.793213"
        stroke="#F4F3F5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

External.propTypes = {
  colour: PropTypes.string
};

External.defaultProps = {
  colour: '#ffffff'
};

export default External;
