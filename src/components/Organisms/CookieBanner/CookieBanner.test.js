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

    .c3 :hover,
    .c3 :focus {
      color: #FFFFFF;
      text-decoration: none;
    }

    .c5 {
      display: inline-flex;
      position: relative;
      text-decoration: none;
      transition: all 0.2s;
      height: 2.5rem;
      width: 100%;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background-color: #FFFFFF;
      color: #000000;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c5:hover,
    .c5:focus,
    .c5:focus-within,
    .c5:focus-visible {
      background-color: #E1E2E3;
      outline-offset: 3px;
    }

    .c5:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .c0 {
      display: flex;
      position: relative;
      padding: 1rem;
      background: #2C0230;
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

    @media (min-width: 740px) {
      .c1 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c1 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c5 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c5 {
        width: auto;
      }
    }

    @media (min-width: 1024px) {
      .c5 {
        width: auto;
      }
    }

    @media (min-width: 740px) {
      .c2 {
        width: 75%;
        margin: 0 auto;
      }

      .c2:first-of-type {
        margin-bottom: 1rem;
      }
    }

    @media (min-width: 740px) {
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
      >
        Hello! Comic Relief uses cookies to help make this website better and improve our services. You can learn more about
        <a
          buttonType="primary"
          className="c3 c4"
          color="red"
          fullWidth={false}
          home={false}
          href="https://www.comicrelief.com/cookies-policy"
          iconFirst={false}
          mobileColour={null}
          target="_self"
          type="standard_white"
          underline={true}
        >
          our use of cookies
        </a>
        . We also use optional cookies for marketing purposes:
      </p>
      <p
        className="c1 c2"
      >
        <a
          buttonType="primary"
          className="c5 c6"
          color="white"
          fullWidth={false}
          home={false}
          href="/comic"
          iconFirst={false}
          mobileColour={null}
          onClick={[Function]}
          target="_self"
          type="button"
          underline={true}
        >
          Accept
        </a>
        Or click
        <a
          buttonType="primary"
          className="c3 c4"
          color="red"
          fullWidth={false}
          home={false}
          href=""
          iconFirst={false}
          mobileColour={null}
          onClick={[Function]}
          target="_self"
          type="standard_white"
          underline={true}
        >
          here
        </a>
        to deny these.
      </p>
    </div>
  `);
});
