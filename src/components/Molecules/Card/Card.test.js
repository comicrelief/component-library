import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Card from './Card';
import { desktopImages } from '../../../styleguide/data/data';
it('renders correctly', () => {
  const tree = renderWithTheme(
    <Card image={desktopImages.image} images={desktopImages.image} backgroundColor="yellow">
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with no body', () => {
  const tree = renderWithTheme(
    <Card imageLow={desktopImages.image} images={desktopImages.image} backgroundColor="yellow" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
