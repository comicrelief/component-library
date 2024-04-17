import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Card from './Card';
import { defaultData } from '../../../styleguide/data/data';
it('renders correctly', () => {
  const tree = renderWithTheme(
    <Card image={defaultData.image} images={defaultData.image} backgroundColor="yellow">
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Card
      image={defaultData.image}
      images={defaultData.image}
      backgroundColor="yellow"
      smallBreakpointLayout="Row"
      mediumBreakpointLayout="Row"
    >
      <h2>Title</h2>
      <p>Text body copy description. Loads more text test. Loads more text test.</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with no body', () => {
  const tree = renderWithTheme(
    <Card imageLow={defaultData.image} images={defaultData.image} backgroundColor="yellow" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
