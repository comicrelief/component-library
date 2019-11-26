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
      font-size: 0.6875rem;
      text-transform: uppercase;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c9 {
      font-size: 1.625rem;
      text-transform: uppercase;
      font-weight: normal;
      font-family: 'Anton',Impact,sans-serif;
    }

    .c4 {
      position: relative;
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
      color: #2C0230;
      font-weight: normal;
    }

    .c1:hover {
      color: #2C0230;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background-color: #fff;
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
    }

    .c7 {
      padding: 2rem;
    }

    .c10 {
      margin: 0;
    }

    .c5 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    @supports not (object-fit:cover) {
      .c4 {
        background-color: red;
      }
    }

    @supports not (object-fit:cover) {
      .c6 {
        display: none;
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
            className="c8"
            color="inherit"
            size="xxs"
          >
             01 July 2019
          </span>
          <h3
            className="c9 c10"
            color="inherit"
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
      font-size: 0.6875rem;
      text-transform: uppercase;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c9 {
      font-size: 1.625rem;
      text-transform: uppercase;
      font-weight: normal;
      font-family: 'Anton',Impact,sans-serif;
    }

    .c4 {
      position: relative;
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
      color: #2C0230;
      font-weight: normal;
    }

    .c1:hover {
      color: #2C0230;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background-color: #fff;
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
      padding-left: 1rem;
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
    }

    .c7 {
      padding: 2rem;
    }

    .c10 {
      margin: 0;
    }

    .c5 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    @supports not (object-fit:cover) {
      .c4 {
        background-color: red;
      }
    }

    @supports not (object-fit:cover) {
      .c6 {
        display: none;
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
            className="c8"
            color="inherit"
            size="xxs"
          >
             01 July 2019
          </span>
          <h3
            className="c9 c10"
            color="inherit"
            size="xl"
          >
            Press Release
          </h3>
        </div>
      </a>
    </article>
  `);
});
