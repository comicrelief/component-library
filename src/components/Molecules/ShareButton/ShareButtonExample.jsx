import React from 'react';
import ShareButton from './ShareButton';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function ShareButtonExample() {
  return (
    <ExampleContainer>
      <ShareButton />
      <ShareButton urlToShare="http://www.google.com" copy="Share some other page:" />
    </ExampleContainer>
  );
}
