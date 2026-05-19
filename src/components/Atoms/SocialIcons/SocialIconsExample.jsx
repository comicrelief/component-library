import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const ExampleWrapper = styled.div`
  background: black;
  padding: 10px;
`;

export default function SocialIconsExample() {
  return (
    <>
      <h3>Comic Relief</h3>
      <ExampleWrapper>
        <SocialIcons campaign="comicrelief" />
      </ExampleWrapper>

      <h3>Red Nose Day</h3>
      <ExampleWrapper>
        <SocialIcons campaign="rednoseday" />
      </ExampleWrapper>

      <h3>Sport Relief with self target</h3>
      <ExampleWrapper>
        <SocialIcons campaign="sportrelief" target="self" />
      </ExampleWrapper>
    </>
  );
}
