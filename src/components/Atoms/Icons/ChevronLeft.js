import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const ChevronLeft = ({
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
    <path d="M30 42a1.992 1.992 0 01-1.414-.586l-16-16a2 2 0 010-2.828l16-16a2 2 0 112.828 2.828L16.828 24l14.586 14.586A2 2 0 0130 42z" />
  </svg>
);

ChevronLeft.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

ChevronLeft.defaultProps = {
  colour: 'white',
  size: 24
};

export default withTheme(ChevronLeft);
