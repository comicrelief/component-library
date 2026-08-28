import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import PostcodeLookup from './PostcodeLookup';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <PostcodeLookup />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
