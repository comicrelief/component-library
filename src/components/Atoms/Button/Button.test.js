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
      background-color: #E52630;
      color: #FFFFFF;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c0 >a {
      text-decoration: none;
    }

    .c0:hover,
    .c0:focus,
    .c0:focus-within,
    .c0:focus-visible {
      background-color: #890B11;
      outline-offset: 3px;
    }

    .c0:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @media (min-width: 740px) {
      .c0 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c0 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c0 {
        width: auto;
      }
    }

    @media (min-width: 1024px) {
      .c0 {
        width: auto;
      }
    }

    <button
      buttonType="primary"
      className="c0"
      color="red"
      fullWidth={false}
      type="submit"
    >
      A standard link
    </button>
  `);
});
