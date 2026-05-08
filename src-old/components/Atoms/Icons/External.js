import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledSVG = styled.svg`
  // Mobile-colour if available, else use standard prop
  fill: ${({ mobileColour, colour, theme }) => (mobileColour ? theme.color(mobileColour) : theme.color(colour))};

  // Reinstate standard styles for 'desktop', adding a fallback for good measure:
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    fill: ${({ colour, theme }) => (colour ? theme.color(colour) : theme.color('white'))};
  }
`;

const External = ({
  colour = 'white', mobileColour = null, theme, size = 24, ...rest
}) => (
  <StyledSVG
    {...rest}
    width={size}
    height={size}
    fill={theme.color(colour)}
    colour={colour}
    mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
  >
    <path d="M92 8.001V48a4 4 0 01-8 0V17.657L50.899 50.758c-.781.781-1.805 1.171-2.829 1.171s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 12H48a4 4 0 010-8h40c.016 0 .032.005.048.005.246.003.492.026.734.074.121.024.233.069.35.104.133.039.268.07.397.123.132.055.253.13.377.198.104.057.212.103.312.169.201.134.386.289.559.456.016.016.035.026.051.042.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327.052.259.08.522.08.785zM72 68a4 4 0 00-4 4v12H12V28h12a4 4 0 000-8H8a4 4 0 00-4 4v64a4 4 0 004 4h64a4 4 0 004-4V72a4 4 0 00-4-4z" />
  </StyledSVG>
);

External.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(External);
