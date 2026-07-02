import React from 'react';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const sourceWrapperStyle = {
  marginTop: '1.5rem',
  borderRadius: '4px',
  overflow: 'hidden',
  border: '1px solid #333',
};

const sourceLabelStyle = {
  background: '#2d2d2d',
  color: '#888',
  padding: '0.35rem 0.75rem',
  fontSize: '0.7rem',
  fontFamily: 'monospace',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
};

const preStyle = {
  background: '#1e1e1e',
  color: '#d4d4d4',
  padding: '1rem',
  overflowX: 'auto',
  fontSize: '0.75rem',
  lineHeight: '1.6',
  fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
  margin: 0,
  whiteSpace: 'pre',
};

export default function ExampleDisplay({ component, src }) {
  return (
    <div style={wrapperStyle}>
      <div>{component}</div>
      <div style={sourceWrapperStyle}>
        <div style={sourceLabelStyle}>source</div>
        <pre style={preStyle}>{src}</pre>
      </div>
    </div>
  );
}
