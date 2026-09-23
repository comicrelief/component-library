import React from 'react';
import PropTypes from 'prop-types';

import { Image, LogoWrapper } from './Logo.style';

import crLogo from './assets/cr-logo.svg';
import srLogo from './assets/sr-logo.svg';
import crLogoPride from './assets/CR_LOGO_PRIDE_KEY_RGB.svg';
import crLogoWide from './assets/cr-logo--wide.svg';

const themeSwitcher = theme => {
  switch (theme) {
    case 'Sport Relief':
      return srLogo;
    case 'Pride':
      return crLogoPride;
    case 'Comic Relief wide':
      return crLogoWide;
    default:
      return crLogo;
  }
};

const Logo = ({
  rotate = false, sizeSm = '51px', sizeMd = '51px', sizeLg = '70px', campaign = 'Comic Relief'
}) => (
  <LogoWrapper $rotate={rotate ? 1 : 0} $sizeSm={sizeSm} $sizeMd={sizeMd} $sizeLG={sizeLg}>
    <Image
      src={themeSwitcher(campaign)}
      alt={
          campaign === 'Comic Relief' || campaign === 'Pride' || campaign === 'Comic Relief wide'
            ? 'Comic Relief logo'
            : 'Sport Relief logo'
        }
    />
  </LogoWrapper>
);

Logo.propTypes = {
  /** Rotate logo */
  rotate: PropTypes.bool,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string,
  sizeLg: PropTypes.string,
  campaign: PropTypes.string
};

export default Logo;
