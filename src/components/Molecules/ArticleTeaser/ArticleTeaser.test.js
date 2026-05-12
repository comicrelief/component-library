import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import { defaultData } from '../../../styleguide/data/data';
it('renders article teaser correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      images={defaultData.images}
      image={defaultData.image}
      date=" 01 July 2019"
      title="News article"
      copy="News article copy"
      alt="Image's description"
      smallImageWidth="25%"
      largeImageWidth="100%"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c8 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c8 {
      font-size: 0.75rem;
      line-height: normal;
      font-weight: bold;
    }

    .c8 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c10 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c10 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c4 {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
    }

    .c6 {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    .c1 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c1:hover,
    .c1:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background-color: #FFFFFF;
      border-radius: 1rem;
      overflow: hidden;
      -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      -webkit-transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      -webkit-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
    }

    .c0:hover,
    .c0:focus {
      -webkit-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
      transform: translateY(-4px);
    }

    .c0 img {
      -webkit-transform: scale(1.02);
      -ms-transform: scale(1.02);
      transform: scale(1.02);
      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
      -webkit-transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
      transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
    }

    .c0:hover {
      box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
    }

    .c0:hover img {
      -webkit-transform: scale(1.04);
      -ms-transform: scale(1.04);
      transform: scale(1.04);
    }

    .c2 {
      padding: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: inherit;
      width: 100%;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
    }

    .c7 {
      padding: 2rem;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c11 {
      margin: 0;
    }

    .c9 {
      display: block;
      margin-bottom: 1rem;
    }

    .c5 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      overflow: hidden;
    }

    @media (min-width:740px) {
      .c8 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c8 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c10 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c10 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c2 {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }
    }

    @media (min-width:740px) {
      .c3 {
        width: 45%;
      }
    }

    @media (min-width:1024px) {
      .c3 {
        width: 100%;
      }
    }

    @media (min-width:740px) {
      .c7 {
        width: 55%;
      }
    }

    @media (min-width:1024px) {
      .c7 {
        width: 100%;
      }
    }

    <article
      className="c0"
    >
      <a
        className="c1 c2"
        href="/test"
        target="_self"
        type="standard"
      >
        <div
          className="c3"
        >
          <div
            className="c4 c5"
            height="auto"
            width="100%"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="auto"
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
        <div
          className="c7"
        >
          <span
            className="c8 c9"
          >
             01 July 2019
          </span>
          <h4
            className="c10 c11"
          >
            News article
          </h4>
        </div>
      </a>
    </article>
  `);
});

it('renders press realese correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      category=""
      date=" 01 July 2019"
      title="Press Release"
      alt="Image's description"
      logoSize="80px"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c8 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c8 {
      font-size: 0.75rem;
      line-height: normal;
      font-weight: bold;
    }

    .c8 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c10 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c10 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c4 {
      display: block;
      width: 80px;
      height: auto;
      position: relative;
    }

    .c6 {
      width: 80px;
      height: auto;
      display: block;
      object-fit: cover;
    }

    .c1 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c1:hover,
    .c1:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background-color: #FFFFFF;
      border-radius: 1rem;
      overflow: hidden;
      -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      -webkit-transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
      -webkit-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
    }

    .c0:hover,
    .c0:focus {
      -webkit-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
      transform: translateY(-4px);
    }

    .c0 img {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
      -webkit-transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
      transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
    }

    .c0:hover {
      box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
    }

    .c0:hover img {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    .c2 {
      padding: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: inherit;
      width: 100%;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      padding: 1rem 0 1rem 1rem;
      padding: 1rem 0px 1rem 2rem;
    }

    .c3 img {
      border-radius: 0;
    }

    .c7 {
      padding: 2rem;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c11 {
      margin: 0;
    }

    .c9 {
      display: block;
      margin-bottom: 1rem;
    }

    .c5 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      overflow: hidden;
    }

    @media (min-width:740px) {
      .c8 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c8 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c10 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c10 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c2 {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:1024px) {

    }

    @media (min-width:1024px) {
      .c7 {
        width: 100%;
      }
    }

    <article
      className="c0"
    >
      <a
        className="c1 c2"
        href="/test"
        target="_self"
        type="standard"
      >
        <div
          className="c3"
        >
          <div
            className="c4 c5"
            height="auto"
            width="80px"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc="mock.asset"
              data-sizes="auto"
              data-src="mock.asset"
              data-srcset="mock.asset"
              height="auto"
              src="mock.asset"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="80px"
            />
          </div>
        </div>
        <div
          className="c7"
        >
          <span
            className="c8 c9"
          >
             01 July 2019
          </span>
          <h4
            className="c10 c11"
          >
            Press Release
          </h4>
        </div>
      </a>
    </article>
  `);
});
