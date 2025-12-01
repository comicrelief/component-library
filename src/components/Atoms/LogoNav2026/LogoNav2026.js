import React from 'react';
import styled from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import crLogoSvg from './assets/cr-logo.svg';
import crLogoMobSvg from './assets/cr-logo-mob.svg';

const LogoWrapper = styled.div`
  ${zIndex('high')}

  width: 50px;
  @media ${({ theme }) => theme.breakpoints2025('M')} {
    width: 180px;
  }
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%; // prevents overflow
`;

const MobileLogo = styled(Image)`
  display: block;
  @media ${({ theme }) => theme.breakpoints2025('S')} {
    display: none
  }
`;

const DesktopLogo = styled(Image)`
  display: none;
  @media ${({ theme }) => theme.breakpoints2025('S')} {
    display: block
  }
`;

const LogoNav2026 = () => {
  return (
    <LogoWrapper
      data-testid="LogoWrapper"
    >
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
    </LogoWrapper>
  )
};

export default LogoNav2026;
