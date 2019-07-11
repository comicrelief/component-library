import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SocialIcons from './SocialIcons';

it('renders correctly with Comic Relief links', () => {
  const tree = renderWithTheme(<SocialIcons campaign="comicrelief" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Sport Relief links', () => {
  const tree = renderWithTheme(<SocialIcons campaign="sportrelief" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Red Nose Day links and self target', () => {
  const tree = renderWithTheme(
    <SocialIcons campaign="rednoseday" target="self" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
