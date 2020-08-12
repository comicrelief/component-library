import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const ChevronDown = ({
  colour, theme, size, ...rest
}) => (
  <svg
    {...rest}
    width={size}
    heiht={size}
    fill={theme.color(colour)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <path d="M24 35a1.992 1.992 0 01-1.414-.586l-16-16a2 2 0 112.828-2.828L24 30.171l14.586-14.585a2 2 0 112.828 2.828l-16 16A1.992 1.992 0 0124 35z" />
  </svg>
);

ChevronDown.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

ChevronDown.defaultProps = {
  colour: 'white',
  size: 24
};

export default withTheme(ChevronDown);
