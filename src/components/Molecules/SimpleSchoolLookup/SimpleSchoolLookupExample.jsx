import React from 'react';
import SimpleSchoolLookup from './SimpleSchoolLookup';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function SimpleSchoolLookupExample() {
  return (
    <ExampleContainer>
      <SimpleSchoolLookup onSelect={data => console.log(data)} />
    </ExampleContainer>
  );
}
