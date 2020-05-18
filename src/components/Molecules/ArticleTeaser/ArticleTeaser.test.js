import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import data from '../../../styleguide/data/data';

it('renders article teaser correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      images={data.images}
      image={data.image}
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
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: inherit;
    }

    .c10 {
      font-size: 2rem;
      line-height: 2rem;
      text-transform: uppercase;
      font-weight: normal;
      line-height: 2rem;
      font-family: 'Anton',Impact,sans-serif;
      -webkit-letter-spacing: 0.03rem;
      -moz-letter-spacing: 0.03rem;
      -ms-letter-spacing: 0.03rem;
      letter-spacing: 0.03rem;
    }

    .c4 {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }

    .c6 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c1 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      font-weight: normal;
    }

    .c1:hover {
      color: #000000;
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
      box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c0:hover {
      box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
      -webkit-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
      transform: translateY(-4px);
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

    .c3 img {
      border-radius: 1rem 1rem 0 0;
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

      .c3 img {
        border-radius: 1rem 0 0 1rem;
      }
    }

    @media (min-width:1024px) {
      .c3 {
        width: 100%;
      }

      .c3 img {
        border-radius: 1rem 1rem 0 0;
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
        color="red"
        href="/test"
        target="_self"
        type="standard"
      >
        <div
          className="c3"
        >
          <div
            className="c4 c5"
            height="100%"
            width="100%"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="100%"
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
            color="inherit"
            size="xs"
          >
             01 July 2019
          </span>
          <h3
            className="c10 c11"
            color="inherit"
            height="2rem"
            size="xl"
          >
            News article
          </h3>
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
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: inherit;
    }

    .c10 {
      font-size: 2rem;
      line-height: 2rem;
      text-transform: uppercase;
      font-weight: normal;
      line-height: 2rem;
      font-family: 'Anton',Impact,sans-serif;
      -webkit-letter-spacing: 0.03rem;
      -moz-letter-spacing: 0.03rem;
      -ms-letter-spacing: 0.03rem;
      letter-spacing: 0.03rem;
    }

    .c4 {
      position: relative;
      display: block;
      width: 80px;
      height: 80px;
    }

    .c6 {
      display: block;
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

    .c1 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      font-weight: normal;
    }

    .c1:hover {
      color: #000000;
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
      box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c0:hover {
      box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
      -webkit-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
      transform: translateY(-4px);
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
      padding-left: 1rem;
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
    }

    @media (min-width:740px) {
      .c2 {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
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
        color="red"
        href="/test"
        target="_self"
        type="standard"
      >
        <div
          className="c3"
        >
          <div
            className="c4 c5"
            height="80px"
            width="80px"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc="mock.asset"
              data-sizes="auto"
              data-src={null}
              data-srcset="mock.asset"
              height="80px"
              src={null}
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
            color="inherit"
            size="xs"
          >
             01 July 2019
          </span>
          <h3
            className="c10 c11"
            color="inherit"
            height="2rem"
            size="xl"
          >
            Press Release
          </h3>
        </div>
      </a>
    </article>
  `);
});
