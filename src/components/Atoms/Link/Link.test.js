import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Link from './Link';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Link href="/test" button color="yellow">
      My paragraph small and yellow
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: block;
      padding: 16px 30px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: point;
      background-color: #fbef51;
    }

    <a
      className="c0"
      color="yellow"
      href="/test"
      target="_self"
    >
      My paragraph small and yellow
    </a>
  `);
});
