import React from 'react';
import styled from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';
import crLogoSvg from './assets/cr-logo.svg';
import crLogoMobSvg from './assets/cr-logo-mob.svg';
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
  @media ${({ theme }) => theme.breakpoints2026('S')} {
    display: none
  }
`;

const DesktopLogo = styled(Image)`
  ${zIndex('high')}
  width: 115px;
  display: none;
  @media ${({ theme }) => theme.breakpoints2026('S')} {
    display: block
  }
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: 162px;
  }
`;

const LogoNav2026 = () => (
  <LogoLink
    data-testid="LogoLink"
    href="https://www.comicrelief.com/"
    title="Go to Comic Relief homepage"
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
  </LogoLink>
);

export default LogoNav2026;
