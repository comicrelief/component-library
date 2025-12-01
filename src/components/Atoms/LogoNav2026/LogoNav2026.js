import React from 'react';
import styled from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import crLogoSvg from './assets/cr-logo.svg';
import crLogoMobSvg from './assets/cr-logo-mob.svg';

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%; // prevents overflow
`;

const MobileLogo = styled(Image)`
  ${zIndex('high')}
  width: 50px;
  display: block;
  @media ${({ theme }) => theme.breakpoints2025('S')} {
    display: none
  }
`;

const DesktopLogo = styled(Image)`
  ${zIndex('high')}
  width: 115px;
  display: none;
  @media ${({ theme }) => theme.breakpoints2025('S')} {
    display: block
  }
  @media ${({ theme }) => theme.breakpoints2025('M')} {
    width: 162px;
  }
`;

const LogoNav2026 = () => {
  return (
    <>
      <MobileLogo
        data-testid="MobileImage"
        src={crLogoMobSvg}
        alt="Comic Relief logo"
      />
      <DesktopLogo
        data-testid="DesktopImage"
        src={crLogoSvg}
        alt="Comic Relief logo"
      />
    </>
  )
};

export default LogoNav2026;
