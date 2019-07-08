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
            .c4 {
              color: #FFFFFF;
              font-size: 2.075rem;
              text-transform: inherit;
            }

            .c5 {
              color: #FFFFFF;
              text-transform: inherit;
            }

            .c2 {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .c6 {
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
              position: relative;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              background: #7d2ca9;
            }

            .c3 {
              padding: 20px;
              -webkit-flex: 0 0 50%;
              -ms-flex: 0 0 50%;
              flex: 0 0 50%;
              -webkit-flex: 0 0 50%;
              -ms-flex: 0 0 50%;
              flex: 0 0 50%;
            }

            .c1 {
              width: 100%;
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
              <div
                className="c1"
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
                    className="c2"
                    height="100%"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    width="100%"
                  />
                </picture>
              </div>
              <div
                className="c3"
              >
                <h1
                  className="c4"
                  color="white"
                  size="xxl"
                >
                  title
                </h1>
                <p
                  className="c5"
                  color="white"
                >
                  description
                </p>
                <a
                  className="c6"
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

it('renders Single Message with no Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage backgroundColor="purple" copyFirst={false}>
      <Text tag="p" color="white">
        description
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
        .c2 {
          color: #FFFFFF;
          text-transform: inherit;
        }

        .c0 {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          position: relative;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          background: #7d2ca9;
        }

        .c1 {
          padding: 20px;
          -webkit-flex: 0 0 50%;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          -webkit-flex: 0 0 60%;
          -ms-flex: 0 0 60%;
          flex: 0 0 60%;
          margin: auto;
          padding: 100px 20px;
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
          <div
            className="c1"
          >
            <p
              className="c2"
              color="white"
            >
              description
            </p>
          </div>
        </div>
    `);
});

it('renders fullWidth Single Message correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage backgroundColor="purple" copyFirst={false}>
      <Text tag="p" color="white">
        description
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      color: #FFFFFF;
      text-transform: inherit;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      background: #7d2ca9;
    }

    .c1 {
      padding: 20px;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      -webkit-flex: 0 0 60%;
      -ms-flex: 0 0 60%;
      flex: 0 0 60%;
      margin: auto;
      padding: 100px 20px;
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
      <div
        className="c1"
      >
        <p
          className="c2"
          color="white"
        >
          description
        </p>
      </div>
    </div>
  `);
});
