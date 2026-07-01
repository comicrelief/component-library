import React from 'react';
import RadioButton from './RadioButton';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function RadioButtonExample() {
  return (
    <>
      <ExampleContainer>
        <RadioButton name="gender" value="male" label="Male" data-testid="radio-male" />
      </ExampleContainer>
      <ExampleContainer>
        <RadioButton name="gender" value="female" label="Female" data-testid="radio-female" />
      </ExampleContainer>
      <ExampleContainer>
        <RadioButton name="gender" value="other" label="other" data-testid="radio-other" />
      </ExampleContainer>
    </>
  );
}
