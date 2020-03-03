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
      color: #000000;
      border-bottom: 2px solid #000000;
      font-weight: normal;
    }

    .c0:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
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
    .c1 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      margin-left: 1rem;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      right: 1.5rem;
    }

    .c0 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      border-bottom: 2px solid #000000;
      font-weight: normal;
    }

    .c0:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
    }

    @media (min-width:740px) {
      .c1 {
        width: auto;
        right: auto;
        position: relative;
      }
    }

    <a
      className="c0"
      color="red"
      href="/test"
      target="_self"
      type="standard"
    >
      Internal link
      <span
        className="c1"
      >
        <svg
          fill="#FFFFFF"
          heiht={24}
          viewBox="0 0 96 96"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.871 50.776c-.016.016-.026.036-.043.052l-32 32C58.047 83.609 57.024 84 56 84s-2.047-.391-2.829-1.171a4 4 0 010-5.657L78.343 52H8a4 4 0 010-8h70.343L53.171 18.829a4 4 0 015.657-5.657l32 32c.016.016.027.036.043.052.167.172.321.357.455.557.069.104.118.216.176.325.065.121.138.236.191.364.057.137.09.279.13.42.032.109.074.214.097.327a4.017 4.017 0 010 1.568c-.023.113-.065.217-.097.327-.041.141-.074.283-.13.42-.053.128-.126.243-.191.364-.059.109-.107.221-.176.325a4.035 4.035 0 01-.455.555z"
          />
        </svg>
      </span>
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
      color: #000000;
      border-bottom: 2px solid #000000;
      font-weight: normal;
    }

    .c0:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
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
      position: relative;
      padding: 0.5rem 1.25rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 2rem;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 50px;
      width: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      background-color: #FFE400;
      color: #000000;
    }

    .c0:hover {
      background-color: #FEFD5A;
      color: #000000;
    }

    @media (min-width:740px) {
      .c0 {
        width: auto;
      }
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
