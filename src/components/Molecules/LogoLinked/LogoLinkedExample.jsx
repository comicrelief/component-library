import React from 'react';
import LogoLinked from './LogoLinked';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function LogoLinkedExample() {
  return (
    <>
      <ExampleContainer>
        <h3>Comic Relief (default)</h3>
        <LogoLinked sizeSm="50px" sizeMd="60px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Sport Relief</h3>
        <LogoLinked campaign="Sport Relief" sizeSm="50px" sizeMd="60px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Sport Relief Gameon</h3>
        <LogoLinked campaign="Sport Relief Gameon" sizeSm="50px" sizeMd="60px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Pride</h3>
        <LogoLinked campaign="Pride" sizeSm="50px" sizeMd="60px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>With rotation animation</h3>
        <LogoLinked sizeSm="50px" sizeMd="60px" animateRotate />
      </ExampleContainer>
    </>
  );
}
