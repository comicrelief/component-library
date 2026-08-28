import React, { useState } from 'react';
import PostcodeLookup from './PostcodeLookup';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function PostcodeLookupExample() {
  const [enterManually, setEnterManually] = useState(false);

  if (enterManually) {
    return <p>Sorry, there appears to be a problem. Please enter your details manually.</p>;
  }

  return (
    <ExampleContainer>
      <PostcodeLookup
        label="Postal Address"
        buttonText="Find Address"
        noResultsMessage="Sorry, we could not find your address."
        dropdownInstruction="Dropdown instruction here..."
        buttonColour="#f04257"
        reportError={() => setEnterManually(true)}
      />
    </ExampleContainer>
  );
}
