import React, { useState } from 'react';
import SearchInput from './SearchInput';

export default function SearchInputExample() {
  const [search, setSearch] = useState('');

  return (
    <SearchInput
      onChange={e => {
        e.preventDefault();
        setSearch(e.target.value);
      }}
      value={search}
      placeholder="Search..."
    />
  );
}
