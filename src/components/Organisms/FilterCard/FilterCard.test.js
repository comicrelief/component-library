import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import FilterCard from './FilterCard';


import {
  filterCardTestDataStandard,
  filterCardTestDataHero,
  filterCardTestDataExpanded,
  filterCardTestDataExpandedLoader,
  filterCardTestDataExpandedLoaderHero,
} from '../../../data/data';

it('renders standard FilterCard correctly', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataStandard}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders standard FilterCard w/hero correctly', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataHero}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders standard FilterCard w/expanded content', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataExpanded}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders standard FilterCard w/expanded content + loader', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataExpandedLoader}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders standard FilterCard w/expanded content, loader + hero', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataExpandedLoaderHero}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});