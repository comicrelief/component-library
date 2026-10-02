import React from 'react';
import styled from 'styled-components';

const ExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CodeWrapper = styled.div`
  margin-top: 1.5rem;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #333;
`;

const CodeLabel = styled.div`
  background: #2d2d2d;
  color: #888;
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-family: monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const CodeStyle = styled.div`
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.75rem;
  line-height: 1.6;
  font-family: Fira Code, Consolas, Monaco, monospace;
  margin: 0;
  white-space: pre;
`;

export default function ExampleDisplay({ component, src }) {
  return (
    <ExampleWrapper>
      <div>{component}</div>
      <CodeWrapper>
        <CodeLabel>source</CodeLabel>
        <CodeStyle>{src}</CodeStyle>
      </CodeWrapper>
    </ExampleWrapper>
  );
}
