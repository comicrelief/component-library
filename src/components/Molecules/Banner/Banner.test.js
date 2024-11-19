import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Banner from './Banner';
import Text from '../../Atoms/Text/Text';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Banner backgroundColor="purple_dark">
      <Text tag="p" color="white">
        Mental health issues affect 1 in 4 of us in the UK.
        Join now and with your help we can provide vital support for people like Jordan.
        You know what to do.
      </Text>
    </Banner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
