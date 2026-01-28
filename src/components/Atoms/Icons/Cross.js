import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Icon = styled.svg`
  fill: ${({ colour, theme }) => theme.color(colour)};
`;

const Cross = ({
  colour = 'black',
  mobileColour = null,
  theme,
  size = 24,
  ...rest
}) => (
  <Icon
    width={size}
    height={size}
    colour={colour}
    mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    {...rest}
  >
    <polygon points="85.48 17.59 78.41 10.52 48 40.93 17.59 10.52 10.52 17.59 40.93 48 10.52 78.41 17.59 85.48 48 55.07 78.41 85.48 85.48 78.41 55.07 48 85.48 17.59" />
  </Icon>
);

Cross.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Cross);
