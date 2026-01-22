import 'jest-styled-components';
import React from 'react';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import DynamicGallery from './DynamicGallery';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('renders an empty Dynamic Gallery with no options set', () => {
  const tree = renderWithTheme(<DynamicGallery />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('handle a Dynamic Gallery with no content', () => {
  //TODO implement test
});

it('renders a Dynamic Gallery with a specific number of columns', () => {
  //TODO implement test
});

it('renders a Dynamic Gallery with a specific number of columns', () => {
  //TODO implement test
});

it('responds to different screen sizes', () => {
  //TODO implement test
});

it('correctly labels cards', () => {
  //TODO implement test
});

it('correctly handles lightbox functionality', () => {
  //TODO implement test
});

it('correctly advanced lightbox functionality', () => {
  //TODO implement tests for looping/stopping at first/last images, handles only 1 image etc
});
