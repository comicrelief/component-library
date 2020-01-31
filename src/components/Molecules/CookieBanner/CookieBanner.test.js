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
    .c1 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c3 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #FFFFFF;
      border-bottom: 2px solid #FFFFFF;
      font-weight: normal;
    }

    .c3:hover {
      color: #FFFFFF;
      border-bottom: 2px solid #FFFFFF;
    }

    .c5 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      padding: 0.875rem 1.5rem 0.625rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 2rem;
      line-height: 1.4rem;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      height: 50px;
      width: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      cursor: pointer;
      background-color: #FFFFFF;
      color: #2C0230;
    }

    .c5:hover {
      background-color: #918791;
      color: #2C0230;
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
      .c5 {
        width: auto;
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
        size="s"
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
        size="s"
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
