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
      -webkit-transition: -webkit-transform;
      -webkit-transition: transform;
      transition: transform;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: laawda;
      animation-name: laawda;
    }

    .c1:hover {
      -webkit-animation-name: dFkhNN;
      animation-name: dFkhNN;
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

    @media (min-width:1150px) {
      .c0 {
        width: 51px;
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
