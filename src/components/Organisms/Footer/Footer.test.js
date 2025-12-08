/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Footer from './Footer';

import footerCopy from '../FooterLegacy/data/footerCopy';
import {
  testPrimaryLinksList,
  testSecondaryLinksList
} from './dev-data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Footer
      primaryLinksList={testPrimaryLinksList}
      secondaryLinksList={testSecondaryLinksList}
      legalText={footerCopy.copy}
      copyrightText="© 2026 Comic Relief"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
