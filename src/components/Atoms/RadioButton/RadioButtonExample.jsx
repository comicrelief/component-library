import React from 'react';
import RadioButton from './RadioButton';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function RadioButtonExample() {
  return (
    <>
      <ExampleContainer>
        <RadioButton name="gender" value="male" label="Male" />
      </ExampleContainer>
      <ExampleContainer>
        <RadioButton name="gender" value="female" label="Female" />
      </ExampleContainer>
      <ExampleContainer>
        <RadioButton name="gender" value="other" label="other" />
      </ExampleContainer>
    </>
  );
}
