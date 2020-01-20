import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import zIndex from '../../../theme/shared/zIndex';
import crLogo from './assets/cr-logo.svg';
import srLogo from './assets/sr-logo.svg';

const Image = styled.img`
  object-fit: cover;
  width: auto;
  display: block;
  height: auto;
`;

/**
 * Logo wrapper
 */

const LogoWrapper = styled.div`
  display: inline-block;
  ${zIndex('high')}
  width: ${props => props.sizeSm};
  height: ${props => props.sizeSm};
  transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
  @media ${({ theme }) => theme.breakpoint('nav')} {
    width: ${props => props.sizeMd};
    height: ${props => props.sizeMd};
  }
`;

const Logo = ({ rotate, sizeSm, sizeMd, campaign }) => {
  return (
    <LogoWrapper rotate={rotate ? 1 : 0} sizeSm={sizeSm} sizeMd={sizeMd}>
      <Image
        src={campaign === 'Comic Relief' ? crLogo : srLogo}
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
