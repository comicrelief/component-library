import React from 'react';
import RadioButton from './RadioButton';

export default function RadioButtonExample() {
  return (
    <>
      <RadioButton name="gender" value="male" label="Male" />
      <RadioButton name="gender" value="female" label="Female" />
      <RadioButton name="gender" value="other" label="other" />
    </>
  );
}
