import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';

// For now:
const testBody = <p>Test body for now</p>;

export default function FilterCardExample() {
  return (
    <>
      <ExampleContainer>
        <FilterCard
          title="Test title value"
          pageBackgroundColour="red"
          paddingAbove="1rem"
          paddingBelow="1rem"
          body={testBody}
        />
      </ExampleContainer>
    </>
  );
}
