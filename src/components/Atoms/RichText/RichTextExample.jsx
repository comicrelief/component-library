import React from 'react';
import RichText from './RichText';

export default function RichTextExample() {
  return (
    <RichText
      align="center"
      markup="<p>Some <strong>strong</strong> test markup</p>"
    />
  );
}
