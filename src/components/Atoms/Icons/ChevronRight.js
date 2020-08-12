import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const ChevronRight = ({
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
    <path d="M18 42a2 2 0 01-1.414-3.414L31.172 24 16.586 9.414a2 2 0 112.828-2.828l16 16a2 2 0 010 2.828l-16 16A1.992 1.992 0 0118 42z" />
  </svg>
);

ChevronRight.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

ChevronRight.defaultProps = {
  colour: 'white',
  size: 24
};

export default withTheme(ChevronRight);
