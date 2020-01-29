import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Link from './Link';
import { Internal } from '../Icons/index';

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
      line-height: 1.5rem;
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

it('renders a button with an icon', () => {
  const tree = renderWithTheme(
    <Link
      href="/test"
      type="standard"
      color="red"
      icon={<Internal colour="white" />}
    >
      Internal link
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
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
      Internal link
      <svg
        fill="none"
        height="19"
        viewBox="0 0 22 19"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          stroke="white"
          stroke-linecap="round"
          stroke-width="1.5"
          x1="0.75"
          x2="19.25"
          y1="9.71143"
          y2="9.71143"
        />
        <line
          stroke="white"
          stroke-linecap="round"
          stroke-width="1.5"
          x1="12.5992"
          x2="20.0001"
          y1="2"
          y2="9.40088"
        />
        <line
          stroke="white"
          stroke-linecap="round"
          stroke-width="1.5"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.5386 17.1538)"
          x1="0.75"
          x2="11.2164"
          y1="-0.75"
          y2="-0.75"
        />
      </svg>
    </a>
  `);
});

it('renders a standard styled link correctly with target blank and assistive text', () => {
  const tree = renderWithTheme(
    <Link href="/test" type="standard" target="blank">
      A standard link
    </Link>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c0:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
    }

    .c1 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    <a
      className="c0"
      color="red"
      href="/test"
      target="_blank"
      type="standard"
    >
      A standard link
      <span
        className="c1"
      >
        (opens in new window)
      </span>
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
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      padding: 1rem 1.5rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 2rem;
      line-height: 1.4rem;
      -webkit-transition: background 0.5s;
      transition: background 0.5s;
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
