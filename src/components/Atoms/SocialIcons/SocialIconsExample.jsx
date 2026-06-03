import React from 'react';
import SocialIcons from './SocialIcons';
import Wrapper from '../../../demos/Wrapper';

export default function SocialIconsExample() {
  return (
    <>
      <h3>Comic Relief</h3>
      <Wrapper $themeColor="red">
        <SocialIcons campaign="comicrelief" />
      </Wrapper>

      <h3>Red Nose Day</h3>
      <Wrapper $themeColor="red">
        <SocialIcons campaign="rednoseday" />
      </Wrapper>

      <h3>Sport Relief with self target</h3>
      <Wrapper $themeColor="red">
        <SocialIcons campaign="sportrelief" target="self" />
      </Wrapper>
    </>
  );
}
