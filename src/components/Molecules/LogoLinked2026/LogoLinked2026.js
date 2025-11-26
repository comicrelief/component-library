import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';
import { pulse } from '../../../theme/shared/animations';

const LogoLink = styled.a`
  img {
    // transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
    transition: all;
  }
  &:hover,
  &:focus {
    img {
      // transform: rotate(-14deg);
      animation: ${pulse} 0.6s ease-in-out;
      // animation-timing-function: ease-in-out;
    }
  }
`;

const LogoLinkedNav2026 = ({
  logoWidth,
  logoWidthMd
}) => (
  <>
    <LogoLink
      data-testid="LogoLink"
      href="https://www.comicrelief.com/"
      title="Go to Comic Relief homepage"
    >
      <LogoNav2026
        data-testid="LogoNav2026"
        logoWidth={logoWidth}
        logoWidthMd={logoWidthMd}
      />
    </LogoLink>
  </>
);

LogoLinkedNav2026.propTypes = {
  logoWidth: PropTypes.string,
  logoWidthMd: PropTypes.string
};

export default LogoLinkedNav2026;
