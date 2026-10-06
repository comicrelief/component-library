import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';
import { filterCardTestData, filterCardTestDataHero } from '../../../data/data';

export default function FilterCardExample() {
  return (
    <>
      {/* <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestData}
        />
      </ExampleContainer> */}

      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataHero}
        />
      </ExampleContainer>
    </>
  );
}
