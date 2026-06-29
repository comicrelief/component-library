import React from 'react';
import RichText from './RichText';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function RichTextExample() {
  return (
    <ExampleContainer>
      <RichText
        align="center"
        markup="<p>Some <strong>strong</strong> test markup</p>"
      />
    </ExampleContainer>
  );
}
