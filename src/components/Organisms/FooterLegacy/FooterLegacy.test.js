/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import FooterLegacy from './FooterLegacy';

import data from './data/data';
import footerCopy from './data/footerCopy';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <FooterLegacy navItems={data} footerCopy={footerCopy.copy} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
