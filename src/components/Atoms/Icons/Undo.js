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

const Undo = ({
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
    viewBox="0 0 18 18"
    {...rest}
  >
    <path d="M7.5 6.75H3.75C3.3 6.75 3 6.45 3 6V2.25C3 1.8 3.3 1.5 3.75 1.5C4.2 1.5 4.5 1.8 4.5 2.25V5.25H7.5C7.95 5.25 8.25 5.55 8.25 6C8.25 6.45 7.95 6.75 7.5 6.75Z" fill={colour} />
    <path d="M8.99844 15.7499C8.17344 15.7499 7.34844 15.5999 6.59844 15.2999C5.24844 14.7749 4.12344 13.8749 3.29844 12.6749C3.07344 12.2999 3.14844 11.8499 3.52344 11.6249C3.89844 11.3999 4.34844 11.4749 4.57344 11.8499C5.17344 12.7499 6.07344 13.4999 7.12344 13.8749C8.17344 14.2499 9.29844 14.3249 10.4234 14.0249C11.4734 13.7249 12.4484 13.0499 13.1234 12.1499C13.7984 11.2499 14.1734 10.1999 14.2484 9.0749C14.2484 7.9499 13.9484 6.8249 13.2734 5.9249C12.5984 5.0249 11.6984 4.3499 10.6484 3.9749C9.59844 3.5999 8.47344 3.5999 7.34844 3.9749C6.29844 4.3499 5.39844 5.0249 4.72344 5.9249C4.49844 6.2999 4.04844 6.3749 3.67344 6.1499C3.29844 5.9249 3.22344 5.3999 3.52344 5.0999C4.34844 3.8999 5.54844 2.9999 6.89844 2.5499C8.24844 2.0999 9.74844 2.0999 11.0984 2.5499C12.4484 2.9999 13.6484 3.8999 14.4734 5.0999C15.2984 6.2999 15.7484 7.6499 15.6734 9.1499C15.6734 10.5749 15.1484 11.9999 14.2484 13.1249C13.3484 14.2499 12.1484 15.0749 10.7234 15.5249C10.2734 15.6749 9.59844 15.7499 8.99844 15.7499Z" fill={colour} />
  </Icon>
);

Undo.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Undo);
