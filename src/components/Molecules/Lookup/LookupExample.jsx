import React, { useState } from 'react';
import Lookup from './Lookup';

const MOCK_CITIES = [
  { id: 1, name: 'London', country: 'UK' },
  { id: 2, name: 'Manchester', country: 'UK' },
  { id: 3, name: 'Birmingham', country: 'UK' },
  { id: 4, name: 'Edinburgh', country: 'UK' },
  { id: 5, name: 'Bristol', country: 'UK' },
  { id: 6, name: 'Liverpool', country: 'UK' },
  { id: 7, name: 'Leeds', country: 'UK' },
  { id: 8, name: 'Cardiff', country: 'UK' },
];

const mockLookup = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 600));
  if (!query || query.trim().length < 2) {
    throw new Error('Please enter at least 2 characters to search.');
  }
  return MOCK_CITIES.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );
};

const mockLookupError = async () => {
  await new Promise(resolve => setTimeout(resolve, 600));
  throw new Error('Sorry, the lookup service is currently unavailable. Please try again later.');
};

export default function LookupExample() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h3>Default</h3>
      <p style={{ marginBottom: '1rem' }}>
        Type a city name (min 2 chars) and click Search or press Enter. Try &ldquo;lon&rdquo;, &ldquo;man&rdquo;, or &ldquo;xyz&rdquo; to see no results.
      </p>
      <Lookup
        name="city-lookup"
        label="Search for a city"
        placeholder="e.g. London"
        buttonText="Search"
        lookupHandler={mockLookup}
        mapOptionToString={city => `${city.name}, ${city.country}`}
        onSelect={city => setSelected(city)}
        dropdownInstruction="Select a city from the list below"
      />
      {selected && (
        <p style={{ marginTop: '1rem' }}>
          Selected: <strong>{selected.name}, {selected.country}</strong>
        </p>
      )}

      <h3 style={{ marginTop: '2rem' }}>Service error state</h3>
      <p style={{ marginBottom: '1rem' }}>
        This example&apos;s lookup handler always throws — showing how errors surface to the user.
      </p>
      <Lookup
        name="city-lookup-error"
        label="Search for a city"
        placeholder="e.g. London"
        buttonText="Search"
        lookupHandler={mockLookupError}
        mapOptionToString={city => city.name}
        onSelect={() => {}}
      />

      <h3 style={{ marginTop: '2rem' }}>Custom no-results message</h3>
      <p style={{ marginBottom: '1rem' }}>
        Try searching for &ldquo;xyz&rdquo; to see the custom no-results message.
      </p>
      <Lookup
        name="city-lookup-noresults"
        label="Search for a city"
        placeholder="e.g. London"
        buttonText="Search"
        lookupHandler={mockLookup}
        mapOptionToString={city => city.name}
        onSelect={() => {}}
        noResultsMessage="No cities matched your search — please try a different term."
      />
    </>
  );
}
