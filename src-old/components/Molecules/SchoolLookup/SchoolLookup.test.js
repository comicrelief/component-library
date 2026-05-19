import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import SchoolLookup from './SchoolLookup';

it('renders correctly', () => {
  const renderer = renderWithTheme(<SchoolLookup onSelect={() => {}} />);

  expect(renderer.toJSON()).toMatchSnapshot();
});
