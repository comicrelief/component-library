import React, { useState } from 'react';
import SchoolLookup from './SchoolLookup';

export default function SchoolLookupExample() {
  const [enterManually, setEnterManually] = useState(false);

  if (enterManually) {
    return <p>Sorry, there appears to be a problem. Please enter the school's details manually.</p>;
  }

  return (
    <SchoolLookup
      onSelect={school => alert(JSON.stringify(school, null, 2))}
      fetchErrorHandler={() => setEnterManually(true)}
    />
  );
}
