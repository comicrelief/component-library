import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import CookieBanner from './CookieBanner';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CookieBanner
      acceptCookie={(e) => {
        e.preventDefault();
        return 'User accept';
      }}
      denyCookie={(e) => {
        e.preventDefault();
        return 'User does not accept cookies';
      }}
      cookiePolicyUrl="https://www.comicrelief.com/cookies-policy"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c1 {
      color: #FFFFFF;
    }

    .c1 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c3 {
      position: relative;
      display: inline;
      color: #FFFFFF;
      font-weight: normal;
    }

    .c3:hover,
    .c3:focus {
      color: #FFFFFF;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c5 {
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
      height: 3.125rem;
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
      background-color: #FFFFFF;
      color: #000000;
    }

    .c5:hover {
      background-color: #969598;
      color: #000000;
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

    .c2 {
      line-height: 1.5;
      margin: 0;
    }

    .c2:first-of-type {
      margin-bottom: 0.5rem;
    }

    .c6 {
      padding: 0.5rem 1rem;
      display: block;
      margin-bottom: 10px;
    }

    .c4 {
      color: #FFFFFF;
      padding: 0 0.25rem 1px;
      border-bottom: 2px solid;
    }

    @media (min-width:740px) {
      .c1 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c1 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c5 {
        width: auto;
      }
    }

    @media (min-width:1024px) {
      .c5 {
        background-color: #FFFFFF;
        color: #000000;
      }

      .c5:hover {
        background-color: #969598;
        color: #000000;
      }
    }

    @media (min-width:740px) {
      .c2 {
        width: 75%;
        margin: 0 auto;
      }

      .c2:first-of-type {
        margin-bottom: 1rem;
      }
    }

    @media (min-width:740px) {
      .c6 {
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
        Hello! Comic Relief uses cookies to help make this website better and improve our services. You can learn more about
        <a
          className="c3 c4"
          color="red"
          href="https://www.comicrelief.com/cookies-policy"
          target="_self"
          type="standard_white"
        >
          our use of cookies
        </a>
        . We also use optional cookies for marketing purposes:
      </p>
      <p
        className="c1 c2"
        color="white"
      >
        <a
          className="c5 c6"
          color="white"
          href="/comic"
          onClick={[Function]}
          target="_self"
          type="button"
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
          type="standard_white"
        >
          here
        </a>
        to deny these.
      </p>
    </div>
  `);
});
