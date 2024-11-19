import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacing';
import crLogo from './assets/cr-logo.svg';
import srLogo from './assets/sr-logo.svg';
import srLogoGameOn from './assets/sr-gameon-logo.svg';
import crLogoPride from './assets/CR_LOGO_PRIDE_KEY_RGB.svg';

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  height: auto;
  margin-right: ${spacing('md')};
`;

/**
 * Logo wrapper
 */

const LogoWrapper = styled.div`
  display: inline-block;
  ${zIndex('high')}
  width: ${props => props.sizeSm};
  transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
  vertical-align: bottom; // height fix
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: ${props => props.sizeMd};
  }
`;

const themeSwitcher = theme => {
  switch (theme) {
    case 'Sport Relief':
      return srLogo;
    case 'Sport Relief Gameon':
      return srLogoGameOn;
    case 'Pride':
      return crLogoPride;
    default:
      return crLogo;
  }
};

const Logo = ({
  rotate = false, sizeSm = '51px', sizeMd = '70px', campaign = 'Comic Relief'
}) => (
  <LogoWrapper rotate={rotate ? 1 : 0} sizeSm={sizeSm} sizeMd={sizeMd}>
    <Image
      src={themeSwitcher(campaign)}
      alt={
          campaign === 'Comic Relief' || campaign === 'Pride'
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
  campaign: PropTypes.string
};

export default Logo;
