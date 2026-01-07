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
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    fill: ${({ colour, theme }) => (colour ? theme.color(colour) : theme.color('white'))};
  }
`;

const CtaArrow = ({
  colour = 'white', mobileColour = null, theme, size = 24, direction = 'up', ...rest
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
    <path width="100%" height="100%" transform="rotate(-180 47.998626708984375,48.00019836425781) " id="svg_100" d="M14.3208 7.46263C14.3183 7.4653 14.3167 7.46863 14.314 7.4713L9.22291 12.8047C9.09865 12.9348 8.9359 13 8.77299 13C8.61007 13 8.44732 12.9348 8.3229 12.8048C8.0744 12.5445 8.0744 12.1223 8.3229 11.862L12.3277 7.66663H1.13638C0.784941 7.66663 0.5 7.36813 0.5 6.99996C0.5 6.63179 0.784941 6.33329 1.13638 6.33329H12.3277L8.3229 2.13809C8.0744 1.87776 8.0744 1.45559 8.3229 1.19525C8.57141 0.934916 8.9744 0.934916 9.22291 1.19525L14.314 6.52862C14.3165 6.53129 14.3183 6.53462 14.3208 6.53729C14.3474 6.56596 14.3719 6.59679 14.3932 6.63012C14.4042 6.64746 14.412 6.66612 14.4212 6.68429C14.4315 6.70446 14.4432 6.72362 14.4516 6.74496C14.4607 6.76779 14.4659 6.79146 14.4723 6.81496C14.4774 6.83312 14.4841 6.85062 14.4877 6.86946C14.5041 6.95579 14.5041 7.04463 14.4877 7.13079C14.4841 7.14963 14.4774 7.16696 14.4723 7.18529C14.4658 7.20879 14.4605 7.23246 14.4516 7.25529C14.4432 7.27663 14.4315 7.29579 14.4212 7.31596C14.4118 7.33413 14.4042 7.35279 14.3932 7.37013C14.3719 7.4033 14.3474 7.43396 14.3208 7.46263Z" />
  </Icon>
);

CtaArrow.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(CtaArrow);
