import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const angle = {
  right: '90deg',
  left: '-90deg',
  down: '180deg',
  up: '0deg'
};

const Icon = styled.svg`
  transform: ${({ direction }) => `rotate(${angle[direction]})`};

  // Mobile-colour if available, else use standard prop
  fill: ${({ mobileColour, colour, theme }) => (mobileColour ? theme.color(mobileColour) : theme.color(colour))};

  // Reinstate standard styles for 'desktop', adding a fallback for good measure:
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    fill: ${({ colour, theme }) => (colour ? theme.color(colour) : theme.color('white'))};
  }
`;

const Chevron = ({
  colour = 'white', mobileColour = null, theme, size = 24, direction = 'up', ...rest
}) => (
  <Icon
    direction={direction}
    width={size}
    height={size}
    fill={theme.color(colour)}
    colour={colour}
    mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...rest}
  >
    <path d="M40 33a1.992 1.992 0 01-1.414-.586L24 17.829 9.414 32.414a2 2 0 11-2.828-2.828l16-16a2 2 0 012.828 0l16 16A2 2 0 0140 33z" />
  </Icon>
);

Chevron.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Chevron);
