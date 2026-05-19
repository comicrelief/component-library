import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import SearchResult from './SearchResult';
import { defaultData } from '../../../styleguide/data/data';

it('renders correctly in minimalist form', () => {
  const tree = renderWithTheme(
    <SearchResult
      href="/test"
      image={defaultData.image}
      title="News article"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with copy', () => {
  const tree = renderWithTheme(
    <SearchResult
      href="/test"
      image={defaultData.image}
      title="News article"
      copy="News article copy"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with date', () => {
  const tree = renderWithTheme(
    <SearchResult
      href="/test"
      image={defaultData.image}
      date="01 July 2019"
      title="News article"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with date and type', () => {
  const tree = renderWithTheme(
    <SearchResult
      href="/test"
      image={defaultData.image}
      date="01 July 2019"
      type="article"
      title="News article"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
