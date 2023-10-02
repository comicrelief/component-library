import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import PostcodeLookup from './PostcodeLookup';

it('renders correctly', () => {
  const renderer = renderWithTheme(<PostcodeLookup onSelect={() => {}} />);

  expect(renderer.toJSON()).toMatchSnapshot();
});
