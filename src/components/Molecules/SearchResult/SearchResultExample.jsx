import React from 'react';
import SearchResult from './SearchResult';
import { defaultData } from '../../../styleguide/data/data';

export default function SearchResultExample() {
  return (
    <>
      <h3>Minimalist</h3>
      <SearchResult
        href="/test"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        title="News article"
        alt="Image's description"
      />

      <h3>With copy</h3>
      <SearchResult
        href="/test"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        title="News article"
        copy="News article copy"
        alt="Image's description"
      />

      <h3>With date</h3>
      <SearchResult
        href="/test"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        date="01 July 2019"
        title="News article"
        alt="Image's description"
      />

      <h3>With date and type</h3>
      <SearchResult
        href="/test"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        date="01 July 2019"
        type="article"
        title="News article"
        alt="Image's description"
      />
    </>
  );
}
