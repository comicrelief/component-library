import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import image from './assets/logo.svg';
import zIndex from '../../../theme/shared/zIndex';

const Image = styled.img`
  object-fit: cover;
  width: auto;
  display: block;
  height: auto;
`;

/**
 * Logo wrapper
 */

const LogoWrapper = styled.div.attrs(() => ({
  'aria-label': 'logo'
}))`
  display: inline-block;
  ${zIndex('high')}
  width: ${props => props.sizeSm};
  height: ${props => props.sizeSm};
  transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
  @media (min-width: 740px) {
    width: ${props => props.sizeMd};
    height: ${props => props.sizeMd};
  }
`;

const Logo = ({ rotate, sizeSm, sizeMd }) => {
  return (
    <LogoWrapper rotate={rotate ? 1 : 0} sizeSm={sizeSm} sizeMd={sizeMd}>
      <Image src={image} alt="Comic Relief logo" aria-label="logo" />
    </LogoWrapper>
  );
};

Logo.propTypes = {
  /** Rotate logo */
  rotate: PropTypes.bool,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string
};

Logo.defaultProps = {
  rotate: false,
  sizeSm: '50px',
  sizeMd: '60px'
};

export default Logo;
