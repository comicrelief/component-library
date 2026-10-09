import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import FilterCard from './FilterCard';
import {
  filterCardTestData, filterCardTestDataHero, filterCardTestDataExtra, filterCardTestDataHeroExtra
} from '../../../data/data';

it('renders FilterCard correctly', () => {
  const tree = renderWithTheme(
        <FilterCard
          data={filterCardTestData}
        />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});