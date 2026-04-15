import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import RichtextCarousel from './RichtextCarousel';
const {
  RichtextCarouselItems,
  RichtextCarouselItemsWithPadding,
} = require('../../../styleguide/data/data');

it('renders default padding version correctly', () => {
  const tree = renderWithTheme(
    <RichtextCarousel data={RichtextCarouselItems} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      text-align: center;
    }

    .c1 {
      height: 100%;
      background: #FFFFFF;
      max-width: 760px;
      padding: 2.5rem 2rem 3.5rem;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
    }

    .c1 > div:first-child * {
      margin-top: 0;
    }

    .c1 > div:first-child h1,
    .c1 > div:first-child h2,
    .c1 > div:first-child h3 {
      margin-bottom: 1.5rem;
    }

    .c1 .carousel {
      position: relative;
      margin: 0 auto;
      padding-top: 2rem;
    }

    .c1 .carousel button.carousel__back-button,
    .c1 .carousel button.carousel__next-button {
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

    .c1 .carousel button.carousel__back-button:after,
    .c1 .carousel button.carousel__next-button:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      -webkit-transition: opacity 0.2s linear;
      transition: opacity 0.2s linear;
      background: linear-gradient(90deg,#FFFFFF,#FFFFFF7a,#FFFFFF00);
    }

    .c1 .carousel button.carousel__back-button:hover:after,
    .c1 .carousel button.carousel__next-button:hover:after {
      opacity: 0.5;
    }

    .c1 .carousel button.carousel__next-button {
      left: auto;
      right: 0;
    }

    .c1 .carousel button.carousel__next-button:before {
      -webkit-transform: translate(0,-50%) rotate(-90deg);
      -ms-transform: translate(0,-50%) rotate(-90deg);
      transform: translate(0,-50%) rotate(-90deg);
    }

    .c1 .carousel button.carousel__next-button:after {
      left: auto;
      right: 0;
      background: linear-gradient(90deg,#FFFFFF00,#FFFFFF7a,#FFFFFF);
    }

    .c1 .carousel .richtext-carousel {
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

    .c1 .carousel .richtext-carousel .last-slide .slide-copy-wrapper:after {
      content: none;
    }

    .c1 .carousel .richtext-carousel .carousel__slide {
      padding-bottom: 300px !important;
    }

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide {
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

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide .slide-copy-wrapper {
      font-size: 0.9rem;
      line-height: 0.9rem;
    }

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide .slide-copy-wrapper * {
      font-size: inherit;
      line-height: inherit;
    }

    .c0 {
      background-color: #F4F3F5;
      padding: 2rem 0 2rem;
    }

    @media (min-width:740px) {
      .c1 .carousel button.carousel__back-button,
      .c1 .carousel button.carousel__next-button {
        width: 33.3% !important;
      }

      .c1 .carousel button.carousel__back-button:after,
      .c1 .carousel button.carousel__next-button:after {
        width: 100%;
      }
    }

    @media (min-width:740px) {
      .c1 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px !important;
      }

      .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child {
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

      .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child:after {
        -webkit-transition: -webkit-transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        -webkit-transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        width: 100%;
        right: calc(-100% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% - 3px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% + 3px);
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child:after {
        width: 50%;
        right: calc(-50% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    }

    @media (min-width:1024px) {
      .c1 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px !important;
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        right: calc(-125% - 5px);
        width: 125%;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1 CarouselWrapper"
        id="nqIEHjiYE8Yd2A2a5cI3O"
      >
        <div
          className="c2"
        >
          Some heading copy that will be nicely constructed in-situ
        </div>
      </div>
    </div>
  `);
});

it('renders custom padding + background colour version correctly', () => {
  const tree = renderWithTheme(
    <RichtextCarousel data={RichtextCarouselItemsWithPadding} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c3 {
      background: #FFFFFF;
      height: 300px;
      width: 75%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 25px;
      border: 1px dashed #969598;
      border-radius: 20px;
      position: relative;
      overflow: visible;
      word-wrap: break-word;
    }

    .c3:after {
      position: absolute;
      content: '';
      top: 50%;
      width: 34%;
      right: calc(-34% - 0px);
      height: 2px;
      border-bottom: 1px dashed #969598;
    }

    .c2 {
      text-align: center;
    }

    .c1 {
      height: 100%;
      background: #FFFFFF;
      max-width: 760px;
      padding: 2.5rem 2rem 3.5rem;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
    }

    .c1 > div:first-child * {
      margin-top: 0;
    }

    .c1 > div:first-child h1,
    .c1 > div:first-child h2,
    .c1 > div:first-child h3 {
      margin-bottom: 1.5rem;
    }

    .c1 .carousel {
      position: relative;
      margin: 0 auto;
      padding-top: 2rem;
    }

    .c1 .carousel button.carousel__back-button,
    .c1 .carousel button.carousel__next-button {
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

    .c1 .carousel button.carousel__back-button:after,
    .c1 .carousel button.carousel__next-button:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      -webkit-transition: opacity 0.2s linear;
      transition: opacity 0.2s linear;
      background: linear-gradient(90deg,#FFFFFF,#FFFFFF7a,#FFFFFF00);
    }

    .c1 .carousel button.carousel__back-button:hover:after,
    .c1 .carousel button.carousel__next-button:hover:after {
      opacity: 0.5;
    }

    .c1 .carousel button.carousel__next-button {
      left: auto;
      right: 0;
    }

    .c1 .carousel button.carousel__next-button:before {
      -webkit-transform: translate(0,-50%) rotate(-90deg);
      -ms-transform: translate(0,-50%) rotate(-90deg);
      transform: translate(0,-50%) rotate(-90deg);
    }

    .c1 .carousel button.carousel__next-button:after {
      left: auto;
      right: 0;
      background: linear-gradient(90deg,#FFFFFF00,#FFFFFF7a,#FFFFFF);
    }

    .c1 .carousel .richtext-carousel {
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

    .c1 .carousel .richtext-carousel .last-slide .slide-copy-wrapper:after {
      content: none;
    }

    .c1 .carousel .richtext-carousel .carousel__slide {
      padding-bottom: 300px !important;
    }

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide {
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

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide .slide-copy-wrapper {
      font-size: 0.9rem;
      line-height: 0.9rem;
    }

    .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide .slide-copy-wrapper * {
      font-size: inherit;
      line-height: inherit;
    }

    .c0 {
      background-color: #86E4E9;
      padding: 4rem 0 4rem;
    }

    @media (min-width:740px) {
      .c3 {
        height: 350px;
        width: 85%;
      }
    }

    @media (min-width:1024px) {
      .c3 {
        height: 350px;
      }
    }

    @media (min-width:740px) {
      .c1 .carousel button.carousel__back-button,
      .c1 .carousel button.carousel__next-button {
        width: 33.3% !important;
      }

      .c1 .carousel button.carousel__back-button:after,
      .c1 .carousel button.carousel__next-button:after {
        width: 100%;
      }
    }

    @media (min-width:740px) {
      .c1 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px !important;
      }

      .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child {
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

      .c1 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child:after {
        -webkit-transition: -webkit-transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        -webkit-transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        width: 100%;
        right: calc(-100% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% - 3px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        width: 33%;
        right: calc(-33% + 3px);
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child:after {
        width: 50%;
        right: calc(-50% - 6px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    }

    @media (min-width:1024px) {
      .c1 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px !important;
      }

      .c1 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {
        right: calc(-125% - 5px);
        width: 125%;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1 CarouselWrapper"
        id="nqIEHjiYE8Yd2A2a5cI31"
      >
        <div
          className="c2"
        >
          Some heading copy that will be nicely constructed in-situ
        </div>
        <div
          className="carousel"
        >
          <div
            aria-label="slider"
            aria-live="polite"
            className="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal"
            onKeyDown={[Function]}
            role="listbox"
            style={Object {}}
            tabIndex={0}
          >
            <div
              className="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal"
              style={Object {}}
            >
              <div
                className="sliderTray___-vHFQ richtext-carousel carousel__slider-tray carousel__slider-tray--horizontal"
                onClickCapture={[Function]}
                onMouseDown={[Function]}
                onTouchCancel={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                style={
                  Object {
                    "flexDirection": "row",
                    "transform": "translateX(0%) translateX(0px)",
                    "width": "200%",
                  }
                }
              >
                <div
                  aria-label="slide"
                  aria-selected={true}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={0}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  />
                </div>
                <div
                  aria-label="slide"
                  aria-selected={true}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={0}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  >
                    <div
                      className="c3 slide-copy-wrapper"
                    >
                      Some other longside but not really all that long copy, who knows, it could be this long or LESS.
                    </div>
                  </div>
                </div>
                <div
                  aria-label="slide"
                  aria-selected={true}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={0}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  >
                    <div
                      className="c3 slide-copy-wrapper"
                    >
                      140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets.
                    </div>
                  </div>
                </div>
                <div
                  aria-label="slide"
                  aria-selected={false}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={-1}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  >
                    <div
                      className="c3 slide-copy-wrapper"
                    >
                      Some other longside but not really all that long copy, who knows, it could be this long or LESS
                    </div>
                  </div>
                </div>
                <div
                  aria-label="slide"
                  aria-selected={false}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden last-slide"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={-1}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  >
                    <div
                      className="c3 slide-copy-wrapper"
                    >
                      140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets. ABIGLONGLINETOFORCEONTOANEWONE
                    </div>
                  </div>
                </div>
                <div
                  aria-label="slide"
                  aria-selected={false}
                  className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  role="option"
                  style={
                    Object {
                      "paddingBottom": "66.66666666666667%",
                      "width": "16.666666666666668%",
                    }
                  }
                  tabIndex={-1}
                >
                  <div
                    className="slideInner___2mfX9 carousel__inner-slide"
                    style={Object {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="previous"
            className="buttonBack___1mlaL carousel__back-button"
            disabled={false}
            onClick={[Function]}
            type="button"
          >
            Back
          </button>
          <button
            aria-label="next"
            className="buttonNext___2mOCa carousel__next-button"
            disabled={false}
            onClick={[Function]}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  `);
});
