import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const angle = {
  right: '180deg',
  left: '0',
  down: '-90deg',
  up: '90deg'
};

const Icon = styled.svg`
  transform: ${({ direction }) => `rotate(${angle[direction]})`};

  // Mobile-colour if available, else use standard prop
  fill: ${({ mobileColour, colour, theme }) => (mobileColour ? theme.color(mobileColour) : theme.color(colour))};

  // Reinstate standard styles for 'desktop', adding a fallback for good measure:
  @media ${({ theme }) => theme.breakpoint('medium')} {
    fill: ${({ colour, theme }) => (colour ? theme.color(colour) : theme.color('white'))};
  }
`;

const Arrow = ({
  colour, mobileColour, theme, size, direction, ...rest
}) => (
  <Icon
    direction={direction}
    width={size}
    height={size}
    colour={colour}
    mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    {...rest}
  >
    <path transform="rotate(-180 47.998626708984375,48.00019836425781) " id="svg_1" d="m90.871,50.776c-0.016,0.016 -0.026,0.036 -0.043,0.052l-32,32c-0.781,0.781 -1.804,1.172 -2.828,1.172s-2.047,-0.391 -2.829,-1.171a4,4 0 0 1 0,-5.657l25.172,-25.172l-70.343,0a4,4 0 0 1 0,-8l70.343,0l-25.172,-25.171a4,4 0 0 1 5.657,-5.657l32,32c0.016,0.016 0.027,0.036 0.043,0.052c0.167,0.172 0.321,0.357 0.455,0.557c0.069,0.104 0.118,0.216 0.176,0.325c0.065,0.121 0.138,0.236 0.191,0.364c0.057,0.137 0.09,0.279 0.13,0.42c0.032,0.109 0.074,0.214 0.097,0.327a4.017,4.017 0 0 1 0,1.568c-0.023,0.113 -0.065,0.217 -0.097,0.327c-0.041,0.141 -0.074,0.283 -0.13,0.42c-0.053,0.128 -0.126,0.243 -0.191,0.364c-0.059,0.109 -0.107,0.221 -0.176,0.325a4.035,4.035 0 0 1 -0.455,0.555z" />
  </Icon>
);

Arrow.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

Arrow.defaultProps = {
  colour: 'white',
  mobileColour: null,
  size: 24,
  direction: 'up'
};

export default withTheme(Arrow);
