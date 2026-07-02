import React from 'react';

const wrap = { padding: '1rem', maxWidth: '800px', lineHeight: '1.6' };

export default function IntroductionDoc() {
  return (
    <div style={wrap}>
      <h2>Comic Relief React Component Library</h2>
      <p>This component library is built using Vite and Styled Components.</p>
      <p>It documents the common layouts, design patterns and components that we reuse across our sites and products.</p>
    </div>
  );
}
