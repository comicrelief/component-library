import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const angle = {
  right: '0',
  left: '180deg',
  down: '90deg',
  up: '-90deg'
};

// The size the icon was rendered at, defining the path coordinates:
const defaultSize = 32;

const Icon = styled.svg`
  transform: ${({ direction }) => `rotate(${angle[direction]})`};

  rect {
    fill: ${({ theme, colour }) => (theme.color(colour))};
  }

  path {
    fill: ${({ theme }) => (theme.color('white'))};
    stroke: ${({ theme }) => (theme.color('white'))};
    transform: scale(${({ width }) => (width / defaultSize)});
  }
`;

const CtaArrow = ({
  colour = 'red', theme, size = defaultSize, direction = 'right', ...rest
}) => (

  <Icon
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    direction={direction}
    colour={colour}
    xmlns="http://www.w3.org/2000/svg"
    defaultSize={defaultSize}
    {...rest}
  >
    <rect width={size} height={size} rx={size / 2} />
    <path d="M22.8208 16.4626C22.8183 16.4653 22.8167 16.4686 22.814 16.4713L17.7229 21.8047C17.5987 21.9348 17.4359 22 17.273 22C17.1101 22 16.9473 21.9348 16.8229 21.8048C16.5744 21.5445 16.5744 21.1223 16.8229 20.862L20.8277 16.6666H9.63638C9.28494 16.6666 9 16.3681 9 16C9 15.6318 9.28494 15.3333 9.63638 15.3333H20.8277L16.8229 11.1381C16.5744 10.8778 16.5744 10.4556 16.8229 10.1953C17.0714 9.93492 17.4744 9.93492 17.7229 10.1953L22.814 15.5286C22.8165 15.5313 22.8183 15.5346 22.8208 15.5373C22.8474 15.566 22.8719 15.5968 22.8932 15.6301C22.9042 15.6475 22.912 15.6661 22.9212 15.6843C22.9315 15.7045 22.9432 15.7236 22.9516 15.745C22.9607 15.7678 22.9659 15.7915 22.9723 15.815C22.9774 15.8331 22.9841 15.8506 22.9877 15.8695C23.0041 15.9558 23.0041 16.0446 22.9877 16.1308C22.9841 16.1496 22.9774 16.167 22.9723 16.1853C22.9658 16.2088 22.9605 16.2325 22.9516 16.2553C22.9432 16.2766 22.9315 16.2958 22.9212 16.316C22.9118 16.3341 22.9042 16.3528 22.8932 16.3701C22.8719 16.4033 22.8474 16.434 22.8208 16.4626Z" />
  </Icon>
);

CtaArrow.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(CtaArrow);
