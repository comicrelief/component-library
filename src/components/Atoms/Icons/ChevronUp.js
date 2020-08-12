import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const ChevronUp = ({
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
    <path d="M40 33a1.992 1.992 0 01-1.414-.586L24 17.829 9.414 32.414a2 2 0 11-2.828-2.828l16-16a2 2 0 012.828 0l16 16A2 2 0 0140 33z" />
  </svg>
);

ChevronUp.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

ChevronUp.defaultProps = {
  colour: 'white',
  size: 24
};

export default withTheme(ChevronUp);
