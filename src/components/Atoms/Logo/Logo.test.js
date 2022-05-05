import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../hoc/shallowWithTheme";
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
      width: 50px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    @media (min-width:1150px) {
      .c0 {
        width: 60px;
      }
    }

    <div
      className="c0"
      rotate={true}
    >
      <img
        alt="Comic Relief logo"
        className="c1"
        src="mock.asset"
      />
    </div>
  `);
});
