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
      background-color: #FFFFFF;
    }

    .c0 .carousel {
      position: relative;
      margin: 0 auto;
      padding-top: 2rem;
    }

    .c0 .carousel button.carousel__back-button,
    .c0 .carousel button.carousel__next-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 33% !important;
      height: 100%;
      padding: 0 !important;
      box-shadow: none;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
    }

    .c0 .carousel button.carousel__back-button:before,
    .c0 .carousel button.carousel__next-button:before {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      top: 50%;
      left: 0;
      -webkit-transform: translate(0,-50%) rotate(90deg);
      -ms-transform: translate(0,-50%) rotate(90deg);
      transform: translate(0,-50%) rotate(90deg);
    }

    .c0 .carousel button.carousel__back-button:after,
    .c0 .carousel button.carousel__next-button:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      -webkit-transition: opacity 0.2s linear;
      transition: opacity 0.2s linear;
      background: linear-gradient(90deg,rgba(255,255,255,0.95),rgba(255,255,255,0.5),rgba(255,255,255,0));
    }

    .c0 .carousel button.carousel__back-button:hover:after,
    .c0 .carousel button.carousel__next-button:hover:after {
      opacity: 0.5;
    }

    .c0 .carousel button.carousel__next-button {
      left: auto;
      right: 0;
    }

    .c0 .carousel button.carousel__next-button:before {
      -webkit-transform: translate(0,-50%) rotate(-90deg);
      -ms-transform: translate(0,-50%) rotate(-90deg);
      transform: translate(0,-50%) rotate(-90deg);
    }

    .c0 .carousel button.carousel__next-button:after {
      left: auto;
      right: 0;
      background: linear-gradient(270deg,rgba(255,255,255,0.95),rgba(255,255,255,0.75),rgba(255,255,255,0));
    }

    .c0 .carousel .wymd-carousel {
      -webkit-transition: -webkit-transform 0.5s;
      -webkit-transition: -webkit-transform 0.5s;
      transition: -webkit-transform 0.5s;
      -o-transition: transform 0.5s;
      -webkit-transition: -webkit-transform 0.5s;
      -webkit-transition: transform 0.5s;
      transition: transform 0.5s;
      -webkit-transform: 0.5s;
      will-change: transform;
    }

    .c0 .carousel .wymd-carousel .last-slide .image-wrapper:after {
      content: none;
    }

    .c0 .carousel .wymd-carousel .carousel__slide {
      padding-bottom: 500px !important;
    }

    .c0 .carousel .wymd-carousel .carousel__slide .carousel__inner-slide {
      text-align: center;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
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

    @media (min-width:1024px) {
      .c0 .carousel {
        padding-top: 3rem;
      }
    }

    @media (min-width:1024px) {
      .c0 .carousel button.carousel__back-button,
      .c0 .carousel button.carousel__next-button {
        width: 33.3% !important;
      }

      .c0 .carousel button.carousel__back-button:after,
      .c0 .carousel button.carousel__next-button:after {
        width: 100%;
      }
    }

    @media (min-width:1024px) {
      .c0 .carousel .wymd-carousel .carousel__slide {
        padding-bottom: 550px !important;
      }

      .c0 .carousel .wymd-carousel .carousel__slide .carousel__inner-slide > div:first-child {
        -webkit-transition: -webkit-transform 0.5s ease;
        -webkit-transition: transform 0.5s ease;
        transition: transform 0.5s ease;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
      }

      .c0 .carousel .wymd-carousel .carousel__slide .carousel__inner-slide > div:first-child:after {
        -webkit-transition: -webkit-transform 0.5s ease,width 0.5s ease,right 0.5s ease;
        -webkit-transition: transform 0.5s ease,width 0.5s ease,right 0.5s ease;
        transition: transform 0.5s ease,width 0.5s ease,right 0.5s ease;
        right: calc(-300% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        width: 300%;
      }

      .c0 .carousel .wymd-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        right: calc(-250% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        width: 250%;
      }

      .c0 .carousel .wymd-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c0 .carousel .wymd-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        right: calc(-187% - 6px);
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        width: 250%;
      }

      .c0 .carousel .wymd-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child {
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
      }

      .c0 .carousel .wymd-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child:after {
        right: calc(-250% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        width: 250%;
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
