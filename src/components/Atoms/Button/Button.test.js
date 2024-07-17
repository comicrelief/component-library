import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import Button from "./Button";

it("renders a standard styled link correctly", () => {
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
      border: none;
      cursor: pointer;
      background-color: #E52630;
      color: #FFFFFF;
    }

    .c0 > a {
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0:hover {
      background-color: #890B11;
      color: #FFFFFF;
    }

    @media (min-width:740px) {
      .c0 {
        width: auto;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        width: auto;
        padding: 1rem 2rem;
        margin: 0 auto 2rem;
      }
    }

    <button
      className="c0"
      type="submit"
    >
      A standard link
    </button>
  `);
});
