import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import SchoolLookup from './SchoolLookup';

it('renders correctly', () => {
  const renderer = renderWithTheme(<SchoolLookup onSelect={() => {}} />);

  expect(renderer.toJSON()).toMatchSnapshot();
});
