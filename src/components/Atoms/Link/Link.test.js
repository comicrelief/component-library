import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
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
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c0:hover,
    .c0:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    <a
      className="c0"
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
      right: 1.5rem;
      position: absolute;
      right: -2rem;
      top: 0;
      bottom: 0;
    }

    .c0 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c0:hover,
    .c0:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c2 {
      fill: #FFFFFF;
    }

    @media (min-width:740px) {
      .c1 {
        width: auto;
        right: auto;
        position: relative;
        position: absolute;
        right: -2rem;
        top: 0;
        bottom: 0;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        fill: #FFFFFF;
      }
    }

    <a
      className="c0"
      href="/test"
      target="_self"
      type="standard"
    >
      Internal link
      <span
        className="c1"
        type="standard"
      >
        <svg
          className="c2"
          fill="#FFFFFF"
          height={20}
          viewBox="0 0 15 15"
          width={20}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58496 1.3501C9.1395 0.88346 8.40641 0.883488 7.96094 1.3501C7.52803 1.80361 7.5281 2.53033 7.96094 2.98389L11.1582 6.3335H1.13672C0.48748 6.3335 0 6.87834 0 7.50049C2.15408e-05 8.12262 0.487494 8.66748 1.13672 8.66748H11.1582L7.96094 12.0171C7.52806 12.4706 7.52899 13.1974 7.96191 13.6509C8.18163 13.8804 8.47556 14.0005 8.77344 14.0005C9.07114 14.0004 9.36533 13.8809 9.58496 13.6509L14.6758 8.31689L14.6748 8.31592L14.6875 8.30322L14.6865 8.30225C14.6954 8.29227 14.7044 8.28494 14.71 8.27783C14.7117 8.27557 14.7133 8.27298 14.7148 8.271C14.7485 8.23215 14.7824 8.18937 14.8135 8.14111L14.8154 8.13818C14.8354 8.1067 14.8493 8.07854 14.8564 8.06396L14.8652 8.04639L14.8662 8.04443L14.8672 8.04346C14.8672 8.04346 14.868 8.0407 14.8691 8.03857C14.8709 8.03524 14.8758 8.02683 14.8799 8.01904L14.8802 8.01851C14.8888 8.00212 14.9034 7.97435 14.917 7.93994V7.93799C14.9303 7.90387 14.9391 7.87297 14.9443 7.854C14.9469 7.8447 14.9498 7.83579 14.9512 7.83057C14.9527 7.82466 14.9535 7.82292 14.9541 7.8208C14.9541 7.8208 14.9542 7.81765 14.9551 7.81494L14.958 7.80615L14.9586 7.80434C14.9631 7.78973 14.9718 7.76131 14.9785 7.72705V7.7251C15.0066 7.57717 15.0066 7.42472 14.9785 7.27686V7.2749L14.958 7.1958L14.9551 7.18604L14.9531 7.18018L14.9512 7.17236C14.9497 7.16652 14.9481 7.15689 14.9453 7.14697C14.9398 7.12707 14.9307 7.09666 14.917 7.06201C14.9032 7.027 14.8885 6.99825 14.8799 6.98193C14.8758 6.97415 14.8709 6.96574 14.8691 6.9624L14.8564 6.93701C14.849 6.92189 14.8351 6.89384 14.8154 6.86279L14.8145 6.86084L14.7529 6.77393C14.7316 6.74671 14.7094 6.72141 14.6875 6.69775C14.6837 6.69353 14.6802 6.68867 14.6758 6.68408L9.58496 1.3501Z"
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
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c0:hover,
    .c0:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
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
      -webkit-text-decoration: none;
      text-decoration: none;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      height: 2.5rem;
      width: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: none;
      cursor: pointer;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background-color: #FFE400;
      color: #000000;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c0:hover,
    .c0:focus,
    .c0:focus-within,
    .c0:focus-visible {
      background-color: #FEFD5A;
      outline-offset: 3px;
    }

    .c0:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @media (min-width:740px) {
      .c0 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c0 {
        width: auto;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        width: auto;
      }
    }

    <a
      className="c0"
      href="/test"
      target="_self"
      type="button"
    >
      A yellow button
    </a>
  `);
});
