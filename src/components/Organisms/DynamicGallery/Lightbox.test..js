import 'jest-styled-components';
import React from 'react';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Lightbox from './Lightbox';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('renders an empty Lightbox with no options set', () => {
  const tree = renderWithTheme(<Lightbox />).toJSON();
  expect(tree).toMatchSnapshot();
});
