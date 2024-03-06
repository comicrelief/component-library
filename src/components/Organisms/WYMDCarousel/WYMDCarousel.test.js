import React from "react";
import "jest-styled-components";

import renderWithTheme from "../../../hoc/shallowWithTheme";
import WYMDCarousel from "./WYMDCarousel";
const { carouselItemsComplete } = require("../../../styleguide/data/data");

it("renders correctly", () => {
  const tree = renderWithTheme(
    <WYMDCarousel data={carouselItemsComplete} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c3 {
      color: #E52630;
      font-size: 1rem;
      line-height: 1rem;
      text-transform: uppercase;
      font-weight: normal;
      font-family: 'Anton',Impact,sans-serif;
      -webkit-letter-spacing: 0.03rem;
      -moz-letter-spacing: 0.03rem;
      -ms-letter-spacing: 0.03rem;
      letter-spacing: 0.03rem;
    }

    .c5 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c2 {
      width: 75%;
      margin: 0 auto;
    }

    .c2:first-child {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 20px;
      line-height: 23px;
    }

    .c4 {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 40px;
      line-height: 40px;
    }

    .c6 {
      margin-bottom: 0;
      text-align: center;
      font-size: 14px;
      line-height: 17px;
    }

    .c0 {
      height: 100%;
      padding: 1.5rem;
    }

    @media (min-width:1024px) {
      .c2:first-child {
        font-size: 21px;
        line-height: 23px;
      }
    }

    @media (min-width:740px) {
      .c4 {
        font-size: 60px;
        line-height: 60px;
      }
    }

    @media (min-width:1024px) {
      .c4 {
        font-size: 75px;
        line-height: 78px;
      }
    }

    @media (min-width:740px) {
      .c6 {
        font-size: 17px;
        line-height: 19px;
      }
    }

    <div
      className="c0 CarouselWrapper"
      id="7zdR84QkZwrTh9NWx2H926"
    >
      <p
        className="c1 c2"
        color="inherit"
        size="s"
      >
        Over the past two years, we’ve supported
      </p>
      <h1
        className="c3 c4"
        color="red"
        size="s"
      >
        11.7 million people
      </h1>
      <p
        className="c5 c6"
        color="inherit"
        size="s"
      >
        including...
      </p>
    </div>
  `);
});
