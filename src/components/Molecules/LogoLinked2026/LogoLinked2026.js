import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';
import { pulseInAnimation, pulseOutAnimation } from '../../../theme/shared/animations';

const LogoLink = styled.a`
  img {
    ${pulseOutAnimation};
  }
  &:hover,
  &:focus {
    img {
      ${pulseInAnimation};
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
