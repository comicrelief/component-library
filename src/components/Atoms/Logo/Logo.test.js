import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import Logo from "./Logo";

it("renders correctly", () => {
  const tree = renderWithTheme(<Logo rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      object-fit: cover;
      width: 100%;
      display: block;
      height: auto;
      margin-right: 1rem;
    }

    .c0 {
      display: inline-block;
      z-index: 3;
      width: 51px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
      vertical-align: bottom;
    }

    @media (min-width:1300px) {
      .c0 {
        width: 70px;
      }
    }

    <div
      className="c0"
      rotate={1}
    >
      <img
        alt="Comic Relief logo"
        className="c1"
        src="mock.asset"
      />
    </div>
  `);
});
