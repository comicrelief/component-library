import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './assets/pattern_logo.png';

const Image = styled.img`
  height: 50px;
  width: 150px;
  text-indent: -9999px;
`;
export function LogoRenderer() {
  return (
    <a href="/" title="Go to homepage" rel="noopener noreferrer">
      <Image src={Logo} alt="Comic Relief Logo" />
    </a>
  );
}

export default LogoRenderer;
