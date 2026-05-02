import React from 'react';
import styled from 'styled-components';
import Label from './Label';

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
      <Label label="Wrapping a basic text input">
        <input type="text" name="field-wrapper-test" style={{ maxWidth: '300px' }} />
      </Label>

      <br />

      <Label label="Wrapping a styled input">
        <StyledInput type="text" name="field-wrapper-test-1" />
      </Label>
    </>
  );
}
