import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import LogoNav2026 from '../LogoNav2026/_LogoNav2026';

const Wrapper = styled.div`
  margin: 50px;
`;

export default function LogoExample() {
  return (
    <>
      <Wrapper>
        <h3>Comic Relief Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" />
      </Wrapper>

      <Wrapper>
        <h3>Sport Relief Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief" />
      </Wrapper>

      <Wrapper>
        <h3>Sport Relief Game On Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief Gameon" />
      </Wrapper>

      <Wrapper>
        <h3>Logo for Nav 2026 rebuild</h3>
        <LogoNav2026/>
      </Wrapper>
    </>
  );
}
