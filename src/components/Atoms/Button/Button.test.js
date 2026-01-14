import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Button from './Button';

it('renders a standard styled link correctly', () => {
  const tree = renderWithTheme(
    <Button type="submit">A standard link</Button>
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
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      height: 2.5em;
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
      background-color: #E52630;
      color: #FFFFFF;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
    }

    .c0 > a {
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0:hover,
    .c0:focus,
    .c0:focus-within,
    .c0:focus-visible {
      background-color: #890B11;
      outline-offset: 2px;
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
        margin: 0 auto 2rem;
      }
    }

    <button
      className="c0"
      color="red"
      type="submit"
    >
      A standard link
    </button>
  `);
});
