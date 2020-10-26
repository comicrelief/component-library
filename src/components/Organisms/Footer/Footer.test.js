/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Footer from './Footer';

import data from './data/data';
import footerCopy from './data/footerCopy';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Footer navItems={data} footerCopy={footerCopy.copy} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
