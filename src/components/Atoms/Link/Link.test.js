import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import Link from './Link';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Link button color="yellow">
      My paragraph small and yellow
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot();
});
