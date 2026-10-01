import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';
import { filterCardTestData } from '../../../data/data';

export default function FilterCardExample() {
  return (
    <>
      <ExampleContainer>
        <FilterCard
          data={filterCardTestData}
        />
      </ExampleContainer>
    </>
  );
}
