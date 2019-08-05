import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import image from './assets/logo.svg';

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
  width: 50px;
  height: 50px;
  transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
  @media (min-width: 740px) {
    width: 60px;
    height: 60px;
  }
`;

const Logo = ({ rotate }) => {
  return (
    <LogoWrapper rotate={rotate ? 1 : 0}>
      <Image src={image} alt="Comic Relief logo" aria-label="logo" />
    </LogoWrapper>
  );
};

Logo.propTypes = {
  /** Rotate logo */
  rotate: PropTypes.bool
};

Logo.defaultProps = {
  rotate: false
};

export default Logo;
