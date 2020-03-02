import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import CardDs from './CardDs';
import data from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CardDs
      target="_blank"
      link="/home"
      imageLow={data.image}
      images={data.images}
      backgroundColor="white"
      height="auto"
    >
      Text body copy description
    </CardDs>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
