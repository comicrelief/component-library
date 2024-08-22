import React from "react";
import "jest-styled-components";

import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import RichtextCarousel from "./RichtextCarousel";
const { carouselItemsComplete } = require("../../../styleguide/data/data");

it("renders correctly", () => {
  const tree = renderWithTheme(
    <RichtextCarousel data={carouselItemsComplete} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      text-align: left;
    }

    .c0 {
      height: 100%;
      background-color: #FFFFFF;
      max-width: 760px;
      padding: 2rem 2rem 4rem;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    }

    .c0 .carousel {
      position: relative;
      margin: 0 auto;
      padding-top: 1.5rem;
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
      background: linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));
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
      background: linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));
    }

    .c0 .carousel .richtext-carousel {
      -webkit-transition: -webkit-transform 0.75s;
      -webkit-transition: -webkit-transform 0.75s;
      transition: -webkit-transform 0.75s;
      -o-transition: transform 0.75s;
      -webkit-transition: -webkit-transform 0.75s;
      -webkit-transition: transform 0.75s;
      transition: transform 0.75s;
      -webkit-transform: 0.75s;
      will-change: transform;
    }

    .c0 .carousel .richtext-carousel .last-slide .slide-copy-wrapper:after {
      content: none;
    }

    .c0 .carousel .richtext-carousel .carousel__slide {
      padding-bottom: 300px !important;
    }

    .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide {
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

    @media (min-width:740px) {
      .c0 .carousel button.carousel__back-button,
      .c0 .carousel button.carousel__next-button {
        width: 33.3% !important;
      }

      .c0 .carousel button.carousel__back-button:after,
      .c0 .carousel button.carousel__next-button:after {
        width: 100%;
      }
    }

    @media (min-width:740px) {
      .c0 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 300px !important;
      }

      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child {
        -webkit-transition: -webkit-transform 0.75s ease;
        -webkit-transition: transform 0.75s ease;
        transition: transform 0.75s ease;
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child:after {
        -webkit-transition: -webkit-transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        -webkit-transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        width: 100%;
        right: calc(-100% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% - 3px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% + 3px);
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child:after {
        width: 50%;
        right: calc(-50% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    }

    @media (min-width:1024px) {
      .c0 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 300px !important;
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        right: calc(-125% - 5px);
        width: 125%;
      }
    }

    <div
      className="c0 CarouselWrapper"
      id="7zdR84QkZwrTh9NWx2H926"
    >
      <div
        className=""
      >
        <div
          className="c1"
          dangerouslySetInnerHTML={
            Object {
              "__html": "Over the past two years, we’ve supported",
            }
          }
        />
      </div>
    </div>
  `);
});
