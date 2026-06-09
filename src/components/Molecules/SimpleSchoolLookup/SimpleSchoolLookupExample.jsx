import React from 'react';
import SimpleSchoolLookup from './SimpleSchoolLookup';

export default function SimpleSchoolLookupExample() {
  return (
    <SimpleSchoolLookup onSelect={data => console.log(data)} />
  );
}
