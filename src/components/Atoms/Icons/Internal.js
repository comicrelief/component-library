import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledSVG = styled.svg`
  // Mobile-colour if available, else use standard prop
  fill: ${({ mobileColour, colour, theme }) => (mobileColour ? theme.color(mobileColour) : theme.color(colour))};

  // Reinstate standard styles for 'desktop', adding a fallback for good measure:
  @media ${({ theme }) => theme.breakpoint('medium')} {
    fill: ${({ colour, theme }) => (colour ? theme.color(colour) : theme.color('white'))};
  }
`;

const Internal = ({
  colour, mobileColour, theme, size, ...rest
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
    <path d="M90.871 50.776c-.016.016-.026.036-.043.052l-32 32C58.047 83.609 57.024 84 56 84s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 52H8a4 4 0 010-8h70.343L53.171 18.829a4 4 0 015.657-5.657l32 32c.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327a4.017 4.017 0 010 1.568c-.023.113-.065.217-.097.327-.041.141-.074.283-.13.42-.053.128-.126.243-.191.364-.059.109-.107.221-.176.325a4.035 4.035 0 01-.455.555z" />
  </StyledSVG>
);

Internal.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

Internal.defaultProps = {
  colour: 'white',
  mobileColour: null,
  size: 24
};

export default withTheme(Internal);
