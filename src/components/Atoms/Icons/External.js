import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const External = ({ colour, theme, ...rest }) => {
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
        x2="1.28333"
        y2="4.79321"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16.0939"
        y1="18.7932"
        x2="16.0939"
        y2="15.2932"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="1.75"
        y1="4.79321"
        x2="5.25"
        y2="4.79321"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="1.75"
        y1="18.7932"
        x2="15.75"
        y2="18.7932"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="12.629"
        y2="-0.75"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 9.53259 9.65442)"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="9.92324"
        y2="-0.75"
        transform="matrix(0 -1 -1 0 19.3328 10.6732)"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10.5251"
        y1="0.793213"
        x2="19.6983"
        y2="0.793213"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

External.propTypes = {
  colour: PropTypes.string,
  theme: PropTypes.objectOf({
    color: PropTypes.func.isRequired
  }).isRequired
};

External.defaultProps = {
  colour: 'white'
};

export default withTheme(External);
