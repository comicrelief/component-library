import React from 'react';
import { ExampleContainer } from '../../../demos/SharedStyles';
import FilterCard from './FilterCard';
import {
  filterCardTestDataStandard,
  filterCardTestDataHero,
  filterCardTestDataExpanded,
  filterCardTestDataExpandedLoader,
  filterCardTestDataExpandedLoaderHero

} from '../../../data/data';

export default function FilterCardExample() {
  return (
    <>
      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataStandard}
        />
      </ExampleContainer>

      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataHero}
        />
      </ExampleContainer>

      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataExpanded}
        />
      </ExampleContainer>

      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataExpandedLoader}
        />
      </ExampleContainer>

      <ExampleContainer $bg="#F4F3F5" style={{ padding: 0 }}>
        <FilterCard
          data={filterCardTestDataExpandedLoaderHero}
        />
      </ExampleContainer>

    </>
  );
}
