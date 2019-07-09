import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import images from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      images={images.pictures}
      date=" 01 July 2019"
      title="News article"
      alt="Image's description"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c5 {
      font-size: 0.69375rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .c6 {
      font-size: 1.725rem;
      text-transform: uppercase;
    }

    .c3 {
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
      color: #000;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      border-bottom: 2px solid;
      border-bottom-color: #000;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      border: 0;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c2 {
      height: 100%;
    }

    .c4 {
      padding: 40px;
    }

    .c4 h3 {
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
      .c4 {
        width: 55%;
      }
    }

    @media (min-width:1440px) {
      .c4 {
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
      >
        <div
          className="c2"
        >
          <img
            alt="Image's description"
            className="lazyload c3"
            data-sizes="auto"
            data-srcset={
              Object {
                "large": "picture-3.jpg",
                "medium": "picture-2.jpg",
                "small": "picture-1.jpg",
              }
            }
            height="auto"
            src="image3.jpg"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            width="100%"
          />
        </div>
        <div
          className="c4"
        >
          <span
            className="c5"
            color="inherit"
            size="xxs"
          >
             01 July 2019
          </span>
          <h3
            className="c6"
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
