import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';
import { filterCardTestData } from '../../../data/data';

export default function FilterCardExample() {
  return (
    <>
      <ExampleContainer $bg="grey_light">
        <FilterCard
          data={filterCardTestData}
        />
      </ExampleContainer>
    </>
  );
}
