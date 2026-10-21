import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Padlock from './Padlock';

it('renders a padlock svg at the given size', () => {
  const renderer = renderWithTheme(<Padlock size={48} />);
  expect(renderer.toJSON()).toMatchSnapshot();
});
