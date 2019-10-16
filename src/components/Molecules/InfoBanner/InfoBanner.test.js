import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import InfoBanner from './InfoBanner';

it('renders correctly', () => {
  const title = 'Hello There';
  const amount = '£ 2,000,000';
  const theme = 'Be happy';
  const startDate = '1st June 2010';
  const endDate = '1st June 2020';
  const country = 'Uk';
  const tree = renderWithTheme(
    <InfoBanner
      background="#2C0230"
      title={title}
      amount={amount}
      theme={theme}
      startDate={startDate}
      endDate={endDate}
      country={country}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
