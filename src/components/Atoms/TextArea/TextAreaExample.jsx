import React from 'react';
import TextArea from './TextArea';

export default function TextAreaExample() {
  return (
    <>
      <h4>Long copy/Message field</h4>
      <TextArea
        name="description"
        placeholder="This is a placeholder"
        label="Label"
        rows={4}
        id="textarea-test"
      />

      <h4>Long copy/Message field with error</h4>
      <TextArea
        name="description2"
        label="Label"
        rows={6}
        errorMsg="This is an error message"
        id="textarea-test-2"
      />
    </>
  );
}
