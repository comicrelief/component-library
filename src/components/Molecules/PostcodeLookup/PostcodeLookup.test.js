import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import PostcodeLookup from './PostcodeLookup';

// const goodPostcode = "bs5 6hq";
// const badPostcode = "555 6hq";

it('renders correctly', () => {
  const tree = renderWithTheme(
    <PostcodeLookup onSelect={address => alert(JSON.stringify(address, null, 2))} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
