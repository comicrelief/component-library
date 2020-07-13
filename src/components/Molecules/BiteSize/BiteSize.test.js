import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import BiteSize from './BiteSize';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <BiteSize
      target=""
      link="/home"
      linkLabel="Main action"
      backgroundColor="white"
      title="Heading"
      subtitle="Subtitle"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
