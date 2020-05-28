import React from 'react';
import 'jest-styled-components';
import axios from 'axios';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import Typeahead from './Typeahead';

const schoolsLookup = async query => {
  const response = await axios.get(
    'https://lookups.sls.comicrelief.com/schools/lookup',
    { params: { query } }
  );
  return response.data.data.schools.map(school => school.name);
};

it('renders correctly', () => {
  const renderer = renderWithTheme(
    <Typeahead
      optionFetcher={schoolsLookup}
      onSelect={() => {}}
      id="typeahead-test"
      label="Typeahead test"
      name="q"
      placeholder="Type to start searching..."
      notFoundMessage="Sorry, we couldn't find anything"
    />
  );

  expect(renderer.toJSON()).toMatchSnapshot();
});
