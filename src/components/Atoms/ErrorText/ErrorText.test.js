import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import ErrorText from './ErrorText';

it('renders correctly', () => {
  const renderer = renderWithTheme(
    <ErrorText size="sm">This is an error</ErrorText>
  );
  expect(renderer.toJSON()).toMatchSnapshot();
});
