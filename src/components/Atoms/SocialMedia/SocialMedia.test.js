import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SocialMedia from './SocialMedia';

it('renders correctly with Comic Relief links and default style', () => {
  const tree = renderWithTheme(<SocialMedia campaign="comicrelief" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Sport Relief links and full custom style', () => {
  const tree = renderWithTheme(
    <SocialMedia
      campaign="sportrelief"
      color="black"
      backgroundColor="teal"
      colorOnHover="yellow"
      backgroundColorOnHover="red"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Red Nose Day links and partly custom style', () => {
  const tree = renderWithTheme(
    <SocialMedia campaign="rednoseday" backgroundColor="black" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
