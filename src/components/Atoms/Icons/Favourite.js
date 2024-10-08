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

const Favourite = ({
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
    <path d="M74.295 8.47C64.301 6.55 54.06 10.592 48 18.198 41.94 10.592 31.698 6.55 21.705 8.47 12.179 10.304 2 18.229 2 34.973 2 52.345 19.988 67.357 34.442 79.42c4.113 3.432 7.997 6.674 10.729 9.407l.001.001.001.001c.091.091.196.159.294.24.111.092.216.195.333.272.095.063.199.103.298.157.132.072.26.153.397.209.142.058.291.089.438.13.102.028.2.07.303.09a4.003 4.003 0 001.528 0l.012-.003c.5-.098.985-.292 1.426-.583l.021-.017c.213-.143.417-.306.605-.494l.001-.001.001-.001c2.732-2.733 6.616-5.975 10.729-9.407C76.012 67.357 94 52.345 94 34.973 94 18.229 83.821 10.304 74.295 8.47zM56.432 73.278c-3.029 2.528-5.93 4.952-8.432 7.219-2.502-2.267-5.403-4.692-8.432-7.219C27.09 62.864 10 48.602 10 34.973c0-14.534 9.243-17.882 13.216-18.647 7.468-1.438 17.384 1.981 21.047 11.146a3.987 3.987 0 003.017 2.443c.065.012.129.014.193.023.175.023.35.043.528.042.17.001.336-.019.502-.04.073-.01.146-.012.219-.026a3.99 3.99 0 003.014-2.442c3.663-9.165 13.578-12.584 21.047-11.146C76.757 17.091 86 20.439 86 34.973c0 13.629-17.09 27.891-29.568 38.305z" />
  </StyledSVG>
);

Favourite.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Favourite);
