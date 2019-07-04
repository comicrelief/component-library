import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessage from './SingleMessage';
import data from './data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      title={data.title}
      text={data.text}
      textColor="white"
      ctaText={data.ctaText}
      ctaLink="/"
      ctaColor="red"
      ctaTarget="self"
      backgroundColor="purple"
      imageSet={data.pictures}
      imageAltText=""
      copyFirst={false}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c3 {
      color: #FFFFFF;
      font-size: 2.075rem;
      text-transform: inherit;
    }

    .c4 {
      color: #FFFFFF;
      font-size: 1.2rem;
      text-transform: inherit;
    }

    .c1 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c5 {
      display: inline-block;
      padding: 16px 30px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: point;
      background-color: #f04257;
      background: #f04257;
      color: #FFFFFF;
    }

    .c5:hover {
      background: #00beca;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      background: #7d2ca9;
    }

    .c2 {
      padding: 20px;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
    }

    @media (min-width:740px) {
      .c0 {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    <div
      className="c0"
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
          className="c1"
          height="100%"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          width="100%"
        />
      </picture>
      <div
        className="c2"
      >
        <h2
          className="c3"
          color="white"
          size="xxl"
        >
          What your money does
        </h2>
        <p
          className="c4"
          color="white"
          size="m"
        >
          When you donate to Comic Relief or Sport Relief, you’re supporting vulnerable people and communities in the UK and internationally.
        </p>
        <a
          className="c5"
          color="red"
          href="/"
          target="_self"
        >
          Find out how
        </a>
      </div>
    </div>
  `);
});
