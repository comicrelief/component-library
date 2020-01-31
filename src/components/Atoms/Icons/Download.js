import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Download = ({ colour, theme, ...rest }) => {
  console.log(theme);
  return (
    <svg
      {...rest}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.03912"
        y1="19.25"
        x2="1.03912"
        y2="15.3984"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17.0939"
        y1="19.25"
        x2="17.0939"
        y2="15.3984"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="1.75"
        y1="19.25"
        x2="16.7508"
        y2="19.25"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="12.629"
        y2="-0.75"
        transform="matrix(4.37114e-08 1 1 -4.37114e-08 9.91882 0)"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="-0.75"
        x2="9.92324"
        y2="-0.75"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.26862 6.20935)"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="15.7852"
        y1="7.27001"
        x2="9.29875"
        y2="13.7565"
        stroke={theme.color(colour)}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Download.propTypes = {
  colour: PropTypes.string
};

Download.defaultProps = {
  colour: 'white'
};

export default withTheme(Download);
