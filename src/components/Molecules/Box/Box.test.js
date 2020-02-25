import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Box from './Box';
import data from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Box image={data.image} images={data.image}>
      <h2>Title</h2>
      <p>Description</p>
    </Box>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with no body', () => {
  const tree = renderWithTheme(
    <Box imageLow={data.image} images={data.image} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
