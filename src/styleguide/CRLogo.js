import React from 'react';
import styled from 'styled-components';
import Logo from './assets/pattern_logo.png';

const Image = styled.img`
  height: 50px;
  width: 150px;
  text-indent: -9999px;
`;
export function LogoRenderer() {
  return (
    <a href="/" title="Go to homepage">
      <Image src={Logo} alt="Comic Relief Pattern Library Logo" />
    </a>
  );
}

export default LogoRenderer;
