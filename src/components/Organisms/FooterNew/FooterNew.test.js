/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import FooterNew from './FooterNew';

import footerCopy from '../Footer/data/footerCopy';
import {
  testPrimaryLinksList,
  testSecondaryLinksList
} from './dev-data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <FooterNew
      primaryLinksList={testPrimaryLinksList}
      secondaryLinksList={testSecondaryLinksList}
      legalText={footerCopy.copy}
      copyrightText="© 2026 Comic Relief"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('does not render copyright text when not supplied', () => {
  const tree = renderWithTheme(
    <FooterNew
      primaryLinksList={testPrimaryLinksList}
      secondaryLinksList={testSecondaryLinksList}
      legalText={footerCopy.copy}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
