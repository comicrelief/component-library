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
      color: #FFFFFF;
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
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

    @media (min-width:740px) {
      .c2 {
        width: 75%;
        margin: 0 auto;
      }

      .c2:first-of-type {
        margin-bottom: 1rem;
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
        HERE IS A FUNNY TEST
      </p>
      <p
        className="c1 c2"
        color="white"
        size="s"
      >
        HERE IS A FUNNY TEST
      </p>
    </div>
  `);
});
