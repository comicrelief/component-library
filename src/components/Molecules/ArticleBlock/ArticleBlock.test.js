import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ArticleBlock from './ArticleBlock';
import images from '../../Atoms/Picture/data/pictures';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ArticleBlock
      href="/test"
      target="blank"
      images={images}
      date=" 2 July 2019"
      uppercase
      weight="bold"
      copy="News article"
      objectFit="cover"
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
        target="_blank"
      >
        <div
          className="c2"
        >
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="src/components/Atoms/Picture/assets/picture-3.jpg"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="src/components/Atoms/Picture/assets/picture-2.jpg"
            />
            <source
              srcSet="src/components/Atoms/Picture/assets/picture-1.jpg"
            />
            <img
              alt=""
              className="c3"
              height="auto"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </picture>
        </div>
        <div
          className="c4"
        >
          <span
            className="c5"
            color="inherit"
            size="xxs"
          >
             2 July 2019
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
