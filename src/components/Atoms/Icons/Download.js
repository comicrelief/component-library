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

const Download = ({
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
    <path d="M17.171 38.829a4 4 0 015.657-5.657L44 54.343V8a4 4 0 018 0v46.343l21.172-21.172a4 4 0 115.656 5.657l-28 28-.005.004a3.976 3.976 0 01-.604.493c-.101.068-.211.115-.317.172-.123.067-.241.141-.372.195-.133.055-.273.087-.41.127-.113.033-.22.077-.337.1a3.89 3.89 0 01-1.566.002c-.116-.023-.224-.067-.336-.1-.138-.04-.277-.072-.411-.128-.13-.054-.248-.128-.37-.195-.106-.058-.216-.105-.318-.173a4.037 4.037 0 01-.604-.493l-.005-.004-28.002-27.999zM84 68a4 4 0 00-4 4v12H16V72a4 4 0 00-8 0v16a4 4 0 004 4h72a4 4 0 004-4V72a4 4 0 00-4-4z" />
  </StyledSVG>
);

Download.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Download);
