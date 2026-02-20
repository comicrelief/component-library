import 'jest-styled-components';
import React from 'react';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import QuoteSlice from './QuoteSlice';
import { defaultData } from '../../../styleguide/data/data';

it('renders an empty Quote Slice with no options set', () => {
  const quoteEl = renderWithTheme(<QuoteSlice />).toJSON();
  expect(quoteEl).toMatchSnapshot();
});

it('renders a Quote Slice with basic props', () => {
  const quoteEl = renderWithTheme(<QuoteSlice
    heading="Heading"
    body="Body text"
    imageS={defaultData.pictures.small}
    imageM={defaultData.pictures.medium}
    imageL={defaultData.pictures.large}
    ctaUrl="http://www.google.com"
    ctaLabel="An external link"
     />).toJSON();
  expect(quoteEl).toMatchSnapshot();
});
