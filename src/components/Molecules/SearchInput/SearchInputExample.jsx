import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function SearchInputExample() {
  const [search, setSearch] = useState('');

  return (
    <ExampleContainer>
      <SearchInput
        onChange={e => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
        value={search}
        placeholder="Search..."
      />
    </ExampleContainer>
  );
}
