import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const External = ({ colour, theme, size, ...rest }) => {
  return (
    <svg
      {...rest}
      width={size}
      heiht={size}
      fill={theme.color(colour)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
    >
      <path d="M92 8.001V48a4 4 0 01-8 0V17.657L50.899 50.758c-.781.781-1.805 1.171-2.829 1.171s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 12H48a4 4 0 010-8h40c.016 0 .032.005.048.005.246.003.492.026.734.074.121.024.233.069.35.104.133.039.268.07.397.123.132.055.253.13.377.198.104.057.212.103.312.169.201.134.386.289.559.456.016.016.035.026.051.042.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327.052.259.08.522.08.785zM72 68a4 4 0 00-4 4v12H12V28h12a4 4 0 000-8H8a4 4 0 00-4 4v64a4 4 0 004 4h64a4 4 0 004-4V72a4 4 0 00-4-4z" />
    </svg>
  );
};

External.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf({
    color: PropTypes.func.isRequired
  }).isRequired
};

External.defaultProps = {
  colour: 'white',
  size: 24
};

export default withTheme(External);
