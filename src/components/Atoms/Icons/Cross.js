import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Icon = styled.svg`
  // Mobile-colour if available, else use standard prop
  fill: ${({ $mobileColour, $colour, theme }) => ($mobileColour ? theme.color($mobileColour) : theme.color($colour))};

  // Reinstate standard styles for 'desktop', adding a fallback for good measure:
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    fill: ${({ $colour, theme }) => ($colour ? theme.color($colour) : theme.color('white'))};
  }
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
    $colour={colour}
    $mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 -3 26 26"
    {...rest}
  >
    <path d="M17.9822 0.332893C18.5639 -0.142648 19.424 -0.108623 19.9665 0.434455L20.0681 0.54676C20.543 1.12867 20.5091 1.9877 19.9665 2.53016L12.2966 10.2001L19.9665 17.87C20.5456 18.4486 20.5456 19.3881 19.9665 19.9667L19.9656 19.9657C19.6765 20.2552 19.2971 20.4002 18.9187 20.4003C18.54 20.4003 18.159 20.2555 17.8699 19.9657L10.1999 12.2968L2.53002 19.9667L2.52904 19.9657C2.23992 20.2552 1.86074 20.4003 1.48217 20.4003C1.10344 20.4003 0.723478 20.2554 0.434317 19.9657C-0.144536 19.3871 -0.144767 18.4485 0.434317 17.87L8.10424 10.2001L0.434317 2.53016C-0.144764 1.95155 -0.14478 1.01305 0.434317 0.434455L0.546622 0.332893C1.12861 -0.142357 1.9875 -0.108509 2.53002 0.434455L10.1999 8.10438L17.8699 0.434455L17.9822 0.332893Z" />
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
