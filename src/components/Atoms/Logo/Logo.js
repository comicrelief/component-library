import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacing';
import crLogo from './assets/cr-logo.svg';
import srLogo from './assets/sr-logo.svg';
import srLogoGameOn from './assets/sr-gameon-logo.svg';
import bigNiht from './assets/big-night-logo.png';

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
  @media ${({ theme }) => theme.breakpoint('nav')} {
    width: ${props => props.sizeMd};
  }
`;

const themeSwitcher = theme => {
  switch (theme) {
    case 'Sport Relief':
      return srLogo;
    case 'Sport Relief Gameon':
      return srLogoGameOn;
    case 'Big Night In':
      return bigNiht;
    default:
      return crLogo;
  }
};

const Logo = ({ rotate, sizeSm, sizeMd, campaign }) => {
  return (
    <LogoWrapper rotate={rotate ? 1 : 0} sizeSm={sizeSm} sizeMd={sizeMd}>
      <Image
        src={themeSwitcher(campaign)}
        alt={
          campaign === 'Comic Relief'
            ? 'Comic Relief logo'
            : 'Sport Relief logo'
        }
      />
    </LogoWrapper>
  );
};

Logo.propTypes = {
  /** Rotate logo */
  rotate: PropTypes.bool,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string,
  campaign: PropTypes.string
};

Logo.defaultProps = {
  rotate: false,
  sizeSm: '50px',
  sizeMd: '60px',
  campaign: 'Comic Relief'
};

export default Logo;
