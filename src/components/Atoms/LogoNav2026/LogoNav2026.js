import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import zIndex from '../../../theme/shared/zIndex';
import crLogo from './assets/cr-logo.svg';

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%; // prevents overflow
`;

const LogoWrapper = styled.div`
  ${zIndex('high')}

  width: ${props => props.logoWidth};

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: ${props => props.logoWidthMd};
  }
`;

const LogoNav2026 = ({
  logoWidth = '50px',
  logoWidthMd = '70px'
}) => (
  <LogoWrapper
    data-testid="LogoWrapper"
    logoWidth={logoWidth}
    logoWidthMd={logoWidthMd}
  >
    <Image
      data-testid="Image"
      src={crLogo}
      alt="Comic Relief logo"
    />
  </LogoWrapper>
);

LogoNav2026.propTypes = {
  logoWidth: PropTypes.string,
  logoWidthMd: PropTypes.string
};

export default LogoNav2026;
