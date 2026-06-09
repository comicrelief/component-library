import React from 'react';

const wrap = { padding: '1rem', maxWidth: '800px', lineHeight: '1.6' };
const code = { background: '#f4f4f4', padding: '0.2em 0.4em', borderRadius: '3px', fontFamily: 'monospace', fontSize: '0.9em' };

export default function InstallationDoc() {
  return (
    <div style={wrap}>
      <h3>How to use components</h3>
      <p>CR-CL has a dependency of Styled-components.</p>

      <h4>Install the package</h4>
      <p><code style={code}>yarn add @comicrelief/component-library</code></p>

      <h4>Wrap your app with the ThemeProvider and crTheme</h4>
      <p><code style={code}>{'import { ThemeProvider, crTheme } from \'@comicrelief/component-library\';'}</code></p>

      <h4>Import components</h4>
      <p><code style={code}>{'import { HeroBanner } from \'@comicrelief/component-library\';'}</code></p>
    </div>
  );
}
