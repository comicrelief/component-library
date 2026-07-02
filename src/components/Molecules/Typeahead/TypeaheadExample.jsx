import React from 'react';
import Typeahead from './Typeahead';
import { ExampleContainer } from '../../../demos/SharedStyles';

const suggestions = async suggestion => {
  const response = await fetch(
    `https://api.datamuse.com/sug?s=${encodeURIComponent(suggestion)}`
  );
  const data = await response.json();
  return data.map(({ word }) => word);
};

export default function TypeaheadExample() {
  return (
    <ExampleContainer>
      <Typeahead
        optionFetcher={suggestions}
        onSelect={suggestion => alert(JSON.stringify(suggestion, null, 2))}
        id="typeahead-test"
        label="Typeahead test (word/phrase suggestions)"
        name="suggestion"
        placeholder="Start searching..."
        notFoundMessage="Sorry, we couldn't find anything"
      />
    </ExampleContainer>
  );
}
