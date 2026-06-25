import React from 'react';
import LogoLinked from './LogoLinked';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px;
`;

export default function LogoLinkedExample() {
  return (
    <>
      <Wrapper>
        <h3>Comic Relief (default)</h3>
        <LogoLinked sizeSm="50px" sizeMd="60px" />
      </Wrapper>

      <Wrapper>
        <h3>Sport Relief</h3>
        <LogoLinked campaign="Sport Relief" sizeSm="50px" sizeMd="60px" />
      </Wrapper>

      <Wrapper>
        <h3>Sport Relief Gameon</h3>
        <LogoLinked campaign="Sport Relief Gameon" sizeSm="50px" sizeMd="60px" />
      </Wrapper>

      <Wrapper>
        <h3>Pride</h3>
        <LogoLinked campaign="Pride" sizeSm="50px" sizeMd="60px" />
      </Wrapper>

      <Wrapper>
        <h3>With rotation animation</h3>
        <LogoLinked sizeSm="50px" sizeMd="60px" animateRotate />
      </Wrapper>
    </>
  );
}
