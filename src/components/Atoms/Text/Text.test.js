import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Text from './Text';

it('renders high heading correctly', () => {
  const tree = renderWithTheme(
    <Text tag="h3" height="5">
      Heading 3 high
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders heavy heading correctly', () => {
  const tree = renderWithTheme(
    <Text tag="h3" weight="1000">
      Heading 3 heavy
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders large heading correctly', () => {
  const tree = renderWithTheme(
    <Text tag="h3" size="l">
      Heading 3 large
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders xl yellow paragraph correctly', () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" color="yellow">
      My paragraph xl and yellow
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders xl paragraph with Anton font correctly', () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" family="Anton">
      My paragraph xl and font Anton
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
