import React from 'react';
import SocialIcons from './SocialIcons';

export default function SocialIconsExample() {
  return (
    <>
      <h3>Comic Relief</h3>
      <div style={{ background: 'black', padding: '10px' }}>
        <SocialIcons campaign="comicrelief" />
      </div>

      <h3>Red Nose Day</h3>
      <div style={{ background: 'black', padding: '10px' }}>
        <SocialIcons campaign="rednoseday" />
      </div>

      <h3>Sport Relief with self target</h3>
      <div style={{ background: 'black', padding: '10px' }}>
        <SocialIcons campaign="sportrelief" target="self" />
      </div>
    </>
  );
}
