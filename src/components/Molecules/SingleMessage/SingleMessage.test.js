import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessage from './SingleMessage';
import data from '../../../styleguide/data/data';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={data.pictures}
      imageAltText=""
      copyFirst={false}
    >
      <Text tag="h1" color="white" size="xxl">
        title
      </Text>
      <Text tag="p" color="white">
        description
      </Text>
      <Link href="/" color="white">
        CTA
      </Link>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c3 {
      color: #FFFFFF;
      font-size: 2.075rem;
      text-transform: inherit;
    }

    .c4 {
      color: #FFFFFF;
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
      background-color: #FFFFFF;
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
          srcSet="picture-3.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="picture-2.jpg"
        />
        <source
          srcSet="picture-1.jpg"
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
        <h1
          className="c3"
          color="white"
          size="xxl"
        >
          title
        </h1>
        <p
          className="c4"
          color="white"
        >
          description
        </p>
        <a
          className="c5"
          color="white"
          href="/"
          target="_self"
        >
          CTA
        </a>
      </div>
    </div>
  `);
});
