import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import RichtextCarousel from './RichtextCarousel';
const {
  RichtextCarouselItems,
  RichtextCarouselItemsWithPadding,
} = require('../../../data/data');

it('renders default padding version correctly', () => {
  const tree = renderWithTheme(
    <RichtextCarousel data={RichtextCarouselItems} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
.c2 {
  text-align: center;
}

.c2 * {
  margin-top: 0;
}

.c2 h1,
.c2 h2,
.c2 h3 {
  margin-bottom: 1.5rem;
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

.c1 .splide {
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
}

.c1 .splide .splide__arrows {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.c1 .splide button.splide__arrow {
  position: absolute;
  left: 0;
  top: 0;
  width: 33.3%;
  height: 100%;
  padding: 0;
  box-shadow: none;
  text-indent: -9999px;
  background-color: transparent;
  transform: none;
  border-radius: 0;
  opacity: 1;
}

.c1 .splide button.splide__arrow:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s linear;
  background: linear-gradient(90deg,#FFFFFF,#FFFFFF7a,#FFFFFF00);
}

.c1 .splide button.splide__arrow.splide__arrow--next {
  left: auto;
  right: 0;
}

.c1 .splide button.splide__arrow.splide__arrow--next:after {
  left: auto;
  right: 0;
  background: linear-gradient(90deg,#FFFFFF00,#FFFFFF7a,#FFFFFF);
}

.c1 .splide button.splide__arrow:hover:after {
  opacity: 0.5;
}

.c1 .splide button.splide__arrow svg {
  display: none;
}

.c1 .splide.richtext-carousel .splide__slide {
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 300px;
}

.c0 {
  background-color: #F4F3F5;
  padding: 2rem 0 2rem;
}

@media (min-width: 740px) {
  .c1 .splide.richtext-carousel .splide__slide {
    height: 350px;
  }
}

@media (min-width: 1024px) {
  .c1 .splide.richtext-carousel .splide__slide {
    height: 350px;
  }
}

<div
  className="c0"
  data-testid="richtext-carousel--container"
>
  <div
    className="c1 CarouselWrapper"
    data-testid="richtext-carousel--wrapper"
    id="nqIEHjiYE8Yd2A2a5cI3O"
  >
    <div
      className="c2"
      data-testid="richtext-carousel--heading"
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
.c4 {
  background: #FFFFFF;
  height: 300px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  border: 1px dashed #969598;
  border-radius: 20px;
  position: relative;
  overflow: visible;
  word-wrap: break-word;
  font-size: 0.9rem;
  line-height: 0.9rem;
}

.c4 * {
  font-size: inherit;
  line-height: inherit;
}

.c4:after {
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

.c2 * {
  margin-top: 0;
}

.c2 h1,
.c2 h2,
.c2 h3 {
  margin-bottom: 1.5rem;
}

.c1 {
  height: 100%;
  background: #F4F3F5;
  max-width: 760px;
  padding: 2.5rem 2rem 3.5rem;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
}

.c1 .splide {
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
}

.c1 .splide .splide__arrows {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.c1 .splide button.splide__arrow {
  position: absolute;
  left: 0;
  top: 0;
  width: 33.3%;
  height: 100%;
  padding: 0;
  box-shadow: none;
  text-indent: -9999px;
  background-color: transparent;
  transform: none;
  border-radius: 0;
  opacity: 1;
}

.c1 .splide button.splide__arrow:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s linear;
  background: linear-gradient(90deg,#F4F3F5,#F4F3F57a,#F4F3F500);
}

.c1 .splide button.splide__arrow.splide__arrow--next {
  left: auto;
  right: 0;
}

.c1 .splide button.splide__arrow.splide__arrow--next:after {
  left: auto;
  right: 0;
  background: linear-gradient(90deg,#F4F3F500,#F4F3F57a,#F4F3F5);
}

.c1 .splide button.splide__arrow:hover:after {
  opacity: 0.5;
}

.c1 .splide button.splide__arrow svg {
  display: none;
}

.c1 .splide.richtext-carousel .splide__slide {
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 300px;
}

.c1 .splide.richtext-carousel .splide__slide.last-slide .c3:after {
  content: none!important;
}

.c5 .splide.richtext-carousel .splide__slide.last-slide .c3:after {
  content: none!important;
}

.c0 {
  background-color: #86E4E9;
  padding: 4rem 0 4rem;
}

@media (min-width: 740px) {
  .c4 {
    height: 350px;
    width: 85%;
  }
}

@media (min-width: 1024px) {
  .c4 {
    height: 350px;
  }
}

@media (min-width: 740px) {
  .c1 .splide.richtext-carousel .splide__slide {
    height: 350px;
  }

  .c1 .splide.richtext-carousel .splide__slide .c3 {
    transition: transform 0.75s ease;
    transform-origin: center;
    transform: scale(0.8);
  }

  .c1 .splide.richtext-carousel .splide__slide .c3:after {
    transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
    width: 50%;
    right: calc(-50% - 1px);
    transform: scale(1);
  }

  .c1 .splide.richtext-carousel .splide__slide.is-active .c3 {
    transform: scale(1.0);
  }
}

@media (min-width: 1024px) {
  .c1 .splide.richtext-carousel .splide__slide {
    height: 350px;
  }
}

@media (min-width: 740px) {
  .c5 .splide.richtext-carousel .splide__slide .c3 {
    transition: transform 0.75s ease;
    transform-origin: center;
    transform: scale(0.8);
  }

  .c5 .splide.richtext-carousel .splide__slide .c3:after {
    transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
    width: 50%;
    right: calc(-50% - 1px);
    transform: scale(1);
  }

  .c5 .splide.richtext-carousel .splide__slide.is-active .c3 {
    transform: scale(1.0);
  }
}

<div
  className="c0"
  data-testid="richtext-carousel--container"
>
  <div
    className="c1 CarouselWrapper"
    data-testid="richtext-carousel--wrapper"
    id="nqIEHjiYE8Yd2A2a5cI31"
  >
    <div
      className="c2"
      data-testid="richtext-carousel--heading"
    >
      Some heading copy that will be nicely constructed in-situ
    </div>
    <div
      className="splide richtext-carousel"
      data-testid="richtext-carousel--splide"
    >
      <div
        className="splide__track"
      >
        <ul
          className="splide__list"
        >
          <li
            className="splide__slide"
            data-index={0}
            data-testid="richtext-carousel--slide"
            index={0}
          >
            <div
              className="c3 c4 slide-copy-wrapper"
              data-testid="richtext-carousel--copy"
            >
              Some other longside but not really all that long copy, who knows, it could be this long or LESS.
            </div>
          </li>
          <li
            className="splide__slide"
            data-index={1}
            data-testid="richtext-carousel--slide"
            index={1}
          >
            <div
              className="c3 c4 slide-copy-wrapper"
              data-testid="richtext-carousel--copy"
            >
              140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets.
            </div>
          </li>
          <li
            className="splide__slide"
            data-index={2}
            data-testid="richtext-carousel--slide"
            index={2}
          >
            <div
              className="c3 c4 slide-copy-wrapper"
              data-testid="richtext-carousel--copy"
            >
              Some other longside but not really all that long copy, who knows, it could be this long or LESS
            </div>
          </li>
          <li
            className="splide__slide last-slide"
            data-index={3}
            data-testid="richtext-carousel--slide"
            index={3}
          >
            <div
              className="c3 c4 slide-copy-wrapper"
              data-testid="richtext-carousel--copy"
            >
              140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets. ABIGLONGLINETOFORCEONTOANEWONE
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`);
});
