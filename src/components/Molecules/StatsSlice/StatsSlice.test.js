import 'jest-styled-components';
import React from 'react';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import StatsSlice from './StatsSlice';
import './_test-utils';

it('Stats Slices with no nodes should not render', () => {
  const statsEl = renderWithTheme(<StatsSlice />).toJSON();
  expect(statsEl).toBeNull();
});

it('Stats Slices with a single node should render', () => {
  const statsEl = renderWithTheme(<StatsSlice ease="none" nodes={[{
    title: "123",
    stat: "123,456,789.02",
    body: "hello"
}]} />).toJSON();
  expect(statsEl).toMatchSnapshot();
});

it('Stats Slices with multiple nodes should render', () => {
  const statsEl = renderWithTheme(<StatsSlice nodes={[{
    title: "123",
    stat: "123,456,789.02",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    title: "456",
    stat: "456,789,123.02",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    title: "789",
    stat: "789,123,456.02",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }]} />).toJSON();
  expect(statsEl).toMatchSnapshot();
});