import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import data from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      images={data.images}
      image={data.image}
      date=" 01 July 2019"
      title="News article"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      font-size: 0.69375rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .c7 {
      font-size: 1.725rem;
      text-transform: uppercase;
    }

    .c3 {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .c4 {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
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

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      border: 0;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: inherit;
    }

    .c2 {
      height: 100%;
    }

    .c5 {
      padding: 40px;
    }

    .c5 h3 {
      margin: 0;
    }

    @media (min-width:740px) {
      .c1 {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:1440px) {
      .c1 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }
    }

    @media (min-width:740px) {
      .c2 {
        width: 45%;
      }
    }

    @media (min-width:1440px) {
      .c2 {
        width: 100%;
      }
    }

    @media (min-width:740px) {
      .c5 {
        width: 55%;
      }
    }

    @media (min-width:1440px) {
      .c5 {
        width: 100%;
        height: 100%;
      }
    }

    <article
      className="c0"
    >
      <a
        className="c1"
        href="/test"
        type="standard"
      >
        <div
          className="c2"
        >
          <div
            className="c3"
          >
            <img
              alt="Image's description"
              className="lazyload c4"
              data-lowsrc={null}
              data-sizes="auto"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="auto"
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
        <div
          className="c5"
        >
          <span
            className="c6"
            color="inherit"
            size="xxs"
          >
             01 July 2019
          </span>
          <h3
            className="c7"
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
