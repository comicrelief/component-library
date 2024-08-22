"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _RichtextCarousel = _interopRequireDefault(require("./RichtextCarousel"));
const {
  carouselItemsComplete
} = require("../../../styleguide/data/data");
it("renders correctly", () => {
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_RichtextCarousel.default, {
    data: carouselItemsComplete
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c1 {\n      text-align: left;\n    }\n\n    .c0 {\n      height: 100%;\n      background-color: #FFFFFF;\n      max-width: 760px;\n      padding: 2rem 2rem 4rem;\n      margin: 0 auto;\n      border-radius: 20px;\n      box-shadow: 0px 0px 20px rgba(0,0,0,0.15);\n    }\n\n    .c0 .carousel {\n      position: relative;\n      margin: 0 auto;\n      padding-top: 1.5rem;\n    }\n\n    .c0 .carousel button.carousel__back-button,\n    .c0 .carousel button.carousel__next-button {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 33% !important;\n      height: 100%;\n      padding: 0 !important;\n      box-shadow: none;\n      text-indent: -9999px;\n      background-color: transparent;\n      border: none;\n    }\n\n    .c0 .carousel button.carousel__back-button:after,\n    .c0 .carousel button.carousel__next-button:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 50%;\n      height: 100%;\n      -webkit-transition: opacity 0.2s linear;\n      transition: opacity 0.2s linear;\n      background: linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));\n    }\n\n    .c0 .carousel button.carousel__back-button:hover:after,\n    .c0 .carousel button.carousel__next-button:hover:after {\n      opacity: 0.5;\n    }\n\n    .c0 .carousel button.carousel__next-button {\n      left: auto;\n      right: 0;\n    }\n\n    .c0 .carousel button.carousel__next-button:before {\n      -webkit-transform: translate(0,-50%) rotate(-90deg);\n      -ms-transform: translate(0,-50%) rotate(-90deg);\n      transform: translate(0,-50%) rotate(-90deg);\n    }\n\n    .c0 .carousel button.carousel__next-button:after {\n      left: auto;\n      right: 0;\n      background: linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0.5),rgba(255,255,255,0));\n    }\n\n    .c0 .carousel .richtext-carousel {\n      -webkit-transition: -webkit-transform 0.75s;\n      -webkit-transition: -webkit-transform 0.75s;\n      transition: -webkit-transform 0.75s;\n      -o-transition: transform 0.75s;\n      -webkit-transition: -webkit-transform 0.75s;\n      -webkit-transition: transform 0.75s;\n      transition: transform 0.75s;\n      -webkit-transform: 0.75s;\n      will-change: transform;\n    }\n\n    .c0 .carousel .richtext-carousel .last-slide .slide-copy-wrapper:after {\n      content: none;\n    }\n\n    .c0 .carousel .richtext-carousel .carousel__slide {\n      padding-bottom: 300px !important;\n    }\n\n    .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide {\n      text-align: center;\n      display: -webkit-inline-box;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-align-items: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: start;\n      -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n      justify-content: flex-start;\n      -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column;\n    }\n\n    @media (min-width:740px) {\n      .c0 .carousel button.carousel__back-button,\n      .c0 .carousel button.carousel__next-button {\n        width: 33.3% !important;\n      }\n\n      .c0 .carousel button.carousel__back-button:after,\n      .c0 .carousel button.carousel__next-button:after {\n        width: 100%;\n      }\n    }\n\n    @media (min-width:740px) {\n      .c0 .carousel .richtext-carousel .carousel__slide {\n        padding-bottom: 300px !important;\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child {\n        -webkit-transition: -webkit-transform 0.75s ease;\n        -webkit-transition: transform 0.75s ease;\n        transition: transform 0.75s ease;\n        -webkit-transform-origin: center;\n        -ms-transform-origin: center;\n        transform-origin: center;\n        -webkit-transform: scale(0.8);\n        -ms-transform: scale(0.8);\n        transform: scale(0.8);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide > div:first-child:after {\n        -webkit-transition: -webkit-transform 0.75s ease,width 0.75s ease,right 0.75s ease;\n        -webkit-transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;\n        transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;\n        width: 100%;\n        right: calc(-100% - 6px);\n        -webkit-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide > div:first-child:after {\n        width: 33%;\n        right: calc(-33% - 3px);\n        -webkit-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child {\n        -webkit-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {\n        width: 33%;\n        right: calc(-33% + 3px);\n        -webkit-transform: scale(0.8);\n        -ms-transform: scale(0.8);\n        transform: scale(0.8);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child {\n        -webkit-transform: scale(0.8);\n        -ms-transform: scale(0.8);\n        transform: scale(0.8);\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible > div > div:first-child:after {\n        width: 50%;\n        right: calc(-50% - 6px);\n        -webkit-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n\n    @media (min-width:1024px) {\n      .c0 .carousel .richtext-carousel .carousel__slide {\n        padding-bottom: 300px !important;\n      }\n\n      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible + .carousel__slide--visible + .carousel__slide--visible .carousel__inner-slide > div:first-child:after {\n        right: calc(-125% - 5px);\n        width: 125%;\n      }\n    }\n\n    <div\n      className=\"c0 CarouselWrapper\"\n      id=\"7zdR84QkZwrTh9NWx2H926\"\n    >\n      <div\n        className=\"\"\n      >\n        <div\n          className=\"c1\"\n          dangerouslySetInnerHTML={\n            Object {\n              \"__html\": \"Over the past two years, we\u2019ve supported\",\n            }\n          }\n        />\n      </div>\n    </div>\n  ");
});