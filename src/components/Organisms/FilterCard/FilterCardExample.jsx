import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';

// Sticking this here for now:
const testBody = (
  <p>
    From fundraising packs to bunting, certificates, cake labels and more,
    find everything you need to take yourself funny for money this Red Nose Day.
    Select a resource type to filters the results.
  </p>
);

export default function FilterCardExample() {
  return (
    <>
      <ExampleContainer>
        <FilterCard
          title="Your fundraising Resources"
          pageBackgroundColour="red"
          paddingAbove="1rem"
          paddingBelow="1rem"
          body={testBody}
        />
      </ExampleContainer>
    </>
  );
}
