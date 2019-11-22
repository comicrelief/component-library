import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Link from './Link';

it('renders a standard styled link correctly', () => {
  const tree = renderWithTheme(
    <Link href="/test" type="standard">
      A standard link
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c0:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
    }

    <a
      className="c0"
      color="red"
      href="/test"
      target="_self"
      type="standard"
    >
      A standard link
    </a>
  `);
});

it('renders link styled as button correctly', () => {
  const tree = renderWithTheme(
    <Link href="/test" type="button" color="yellow">
      A yellow button
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: inline-block;
      padding: 1rem 1.5rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 2rem;
      cursor: pointer;
      background-color: #FFE400;
      color: #2C0230;
    }

    .c0:hover {
      background-color: #FEFD5A;
      color: #2C0230;
    }

    <a
      className="c0"
      color="yellow"
      href="/test"
      target="_self"
      type="button"
    >
      A yellow button
    </a>
  `);
});
