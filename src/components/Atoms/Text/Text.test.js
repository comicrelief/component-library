import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Text from './Text';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" color="yellow">
      My paragraph small and yellow
    </Text>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      color: #fbef51;
      font-size: 1.725rem;
    }

    <p
      className="c0"
      color="yellow"
      size="xl"
    >
      My paragraph small and yellow
    </p>
  `);
});
