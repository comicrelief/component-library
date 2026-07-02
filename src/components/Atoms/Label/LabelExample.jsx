import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import { ExampleContainer } from '../../../demos/SharedStyles';

const StyledInput = styled.input`
  max-width: 300px;
  font-size: 1.5rem;
  height: 2.5rem;
  border-radius: 5px;
  border-width: 1px;
`;

export default function LabelExample() {
  return (
    <>
      <ExampleContainer>
        <Label
          label="Wrapping a basic text input"
          data-testid="label-basic"
        >
          <input type="text" name="field-wrapper-test" style={{ maxWidth: '300px' }} />
        </Label>
      </ExampleContainer>

      <br />

      <ExampleContainer>
        <Label
          label="Wrapping a styled input"
          data-testid="label-styled"
        >
          <StyledInput type="text" name="field-wrapper-test-1" />
        </Label>
      </ExampleContainer>
    </>
  );
}
