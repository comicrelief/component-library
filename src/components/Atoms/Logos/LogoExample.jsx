import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import LogoNav2026 from '../LogoNav2026/_LogoNav2026';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function LogoExample() {
  return (
    <>
      <ExampleContainer>
        <h3>Comic Relief Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Sport Relief Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Sport Relief Game On Logo</h3>
        <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief Gameon" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Logo for Nav 2026 rebuild</h3>
        <LogoNav2026/>
      </ExampleContainer>
    </>
  );
}
