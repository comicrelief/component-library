import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Card from './Card';
import data from '../../../styleguide/data/data';

it('renders correctly without label', () => {
  const tree = renderWithTheme(
    <Card image={data.image} images={data.image} backgroundColor="yellow">
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with label on a light background', () => {
  const tree = renderWithTheme(
    <Card
      image={data.image}
      images={data.image}
      backgroundColor="yellow"
      label="test label"
    >
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with label on a dark background', () => {
  const tree = renderWithTheme(
    <Card
      image={data.image}
      images={data.image}
      backgroundColor="purple_dark"
      label="test label"
    >
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
