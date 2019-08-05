import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import CookieBanner from './CookieBanner';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CookieBanner
      acceptCookie={e => {
        e.preventDefault();
        return 'User accept';
      }}
      denyCookie={e => {
        e.preventDefault();
        return 'User does not accept cookies';
      }}
      cookiePolicyUrl="https://www.comicrelief.com/cookies-policy"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      color: #FFFFFF;
      text-transform: inherit;
    }

    .c4 {
      color: #000;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      border-bottom: 2px solid;
      border-bottom-color: #000;
    }

    .c4:hover {
      font-weight: 700;
    }

    .c6 {
      display: inline-block;
      padding: 11px 17px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: point;
      background-color: #2C0230;
      background: #FFFFFF;
      color: #2C0230;
    }

    .c6:hover {
      background: #918791;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      padding: 1rem;
      background: #2C0230;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      z-index: 3;
    }

    .c1 {
      line-height: 1.5;
      margin: 0;
    }

    .c1:first-of-type {
      margin-bottom: 0.5rem;
    }

    .c5 {
      padding: 0.5rem 1rem;
      display: block;
      margin-bottom: 10px;
    }

    .c3 {
      color: #FFFFFF;
      padding: 0 0.25rem 1px;
      border-bottom: 2px solid;
    }

    @media (min-width:1440px) {
      .c6 {
        padding: 16px 30px;
      }
    }

    @media (min-width:740px) {
      .c1 {
        width: 75%;
        margin: 0 auto;
      }

      .c1:first-of-type {
        margin-bottom: 1rem;
      }
    }

    @media (min-width:740px) {
      .c5 {
        margin: 0 0.25rem 0 0;
        display: inline-block;
      }
    }

    <div
      className="c0"
    >
      <p
        className="c1 c2"
        color="white"
      >
        Hello! Comic Relief uses cookies to help make this website better and improve our services. You can learn more about our use of cookies
        <a
          className="c3 c4"
          color="red"
          href="https://www.comicrelief.com/cookies-policy"
          target="_self"
        >
          here
        </a>
        . We also use optional cookies for marketing purposes:
      </p>
      <p
        className="c1 c2"
        color="white"
      >
        <a
          className="c5 c6"
          color="deep_violet"
          href="/comic"
          onClick={[Function]}
          target="_self"
        >
          Accept
        </a>
        Or click
        <a
          className="c3 c4"
          color="red"
          href=""
          onClick={[Function]}
          target="_self"
        >
          here
        </a>
        to deny these.
      </p>
    </div>
  `);
});
