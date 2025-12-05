/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Footer from './Footer';

import footerCopy from '../FooterLegacy/data/footerCopy';

const primaryLinksList = [
  {
    title: 'Contact us',
    path: 'contact-us',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'FAQs',
    path: 'https://www.comicrelief.com/frequently-asked-questions',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  }
];

const secondaryLinksList = [
  {
    title: 'Terms of use',
    path: 'https://www.comicrelief.com/terms-of-use',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Privacy notice',
    path: 'https://www.comicrelief.com/privacy-notice',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  }
];

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Footer
      primaryLinksList={primaryLinksList}
      secondaryLinksList={secondaryLinksList}
      legalText={footerCopy.copy}
      copyrightText="© 2026 Comic Relief"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
