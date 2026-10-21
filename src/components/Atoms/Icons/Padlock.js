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

const Padlock = ({
  colour = 'black',
  mobileColour = null,
  theme,
  size = 24,
  ...rest
}) => (
  <Icon
    width={size}
    height={(size * 11) / 10}
    $colour={colour}
    $mobileColour={mobileColour}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 11"
    {...rest}
  >
    <path d="M4.99985 0.5C6.61236 0.5 7.92429 1.81187 7.92429 3.42444V5.09466C7.92429 5.11364 7.94771 5.14562 7.96611 5.15173C8.12425 5.20447 8.25269 5.25017 8.37026 5.29549C8.51046 5.34954 8.61621 5.50492 8.61621 5.65693V9.49463C8.61621 9.64559 8.51115 9.80111 8.37183 9.85632C7.2939 10.2835 6.15941 10.5 4.99987 10.5C3.84033 10.5 2.70584 10.2834 1.62786 9.85627C1.48859 9.80107 1.38358 9.64559 1.38358 9.49463V5.65693C1.38358 5.50492 1.48931 5.34954 1.62958 5.29544C1.74721 5.25012 1.87562 5.20442 2.03365 5.15168C2.052 5.14556 2.07542 5.11357 2.07542 5.09459V3.42438C2.0755 1.81187 3.38734 0.5 4.99985 0.5ZM5.7964 6.82576C5.7964 6.38553 5.43977 6.02929 4.9999 6.02929C4.56007 6.02929 4.20345 6.3855 4.20345 6.82576C4.20345 7.11747 4.36794 7.36169 4.60168 7.50014V8.81697C4.60168 9.03711 4.7798 9.2152 4.99992 9.2152C5.22006 9.2152 5.39816 9.03711 5.39816 8.81697V7.50014C5.63188 7.36169 5.7964 7.11747 5.7964 6.82576ZM3.081 3.42438V4.86548C3.71026 4.73007 4.35583 4.6615 4.9996 4.66145C5.64307 4.66145 6.28851 4.73004 6.91874 4.86532V3.42438C6.91874 2.36631 6.05796 1.50555 4.9999 1.50555C3.94186 1.50553 3.081 2.36631 3.081 3.42438Z" />
  </Icon>
);

Padlock.propTypes = {
  colour: PropTypes.string,
  mobileColour: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default withTheme(Padlock);
