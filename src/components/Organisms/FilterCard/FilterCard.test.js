import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import FilterCard from './FilterCard';
import {
  filterCardTestData, filterCardTestDataHero, filterCardTestDataExtra, filterCardTestDataHeroExtra
} from '../../../data/data';

it('renders standard FilterCard correctly', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestData}
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

it('renders dynamic-loading FilterCard correctly', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataExtra}
      showMoreIncrement={2}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders dynamic-loading FilterCard w/hero correctly', () => {
  const tree = renderWithTheme(
    <FilterCard
      data={filterCardTestDataHeroExtra}
      showMoreIncrement={2}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});