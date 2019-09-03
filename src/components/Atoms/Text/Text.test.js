import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Text from './Text';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" color="yellow" family="Anton">
      My paragraph extra large, yellow and font family Anton
    </Text>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      color: #FFE400;
      font-size: 1.725rem;
      text-transform: inherit;
      font-family: 'Anton',Impact,sans-serif;
    }

    <p
      className="c0"
      color="yellow"
      size="xl"
    >
      My paragraph extra large, yellow and font family Anton
    </p>
  `);
});
