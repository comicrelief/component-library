import React from 'react';
import SocialIcons from './SocialIcons';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function SocialIconsExample() {
  return (
    <>
      <h3>Comic Relief</h3>
      <ExampleContainer $bg="black">
        <SocialIcons campaign="comicrelief" />
      </ExampleContainer>

      <h3>Red Nose Day</h3>
      <ExampleContainer $bg="black">
        <SocialIcons campaign="rednoseday" />
      </ExampleContainer>

      <h3>Sport Relief with self target</h3>
      <ExampleContainer $bg="black">
        <SocialIcons campaign="sportrelief" target="self" />
      </ExampleContainer>
    </>
  );
}
