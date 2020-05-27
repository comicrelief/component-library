import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import SchoolLookup from './SchoolLookup';

// todo: can we test the interactions?

it('renders correctly', () => {
  const renderer = renderWithTheme(<SchoolLookup onSelect={() => {}} />);

  expect(renderer.toJSON()).toMatchSnapshot();
});
