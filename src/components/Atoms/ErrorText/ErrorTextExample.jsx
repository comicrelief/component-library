import React from 'react';
import ErrorText from './ErrorText';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function ErrorTextExample() {
  return (
    <ExampleContainer>
      <ErrorText size="error">This is an error</ErrorText>
    </ExampleContainer>
  );
}
