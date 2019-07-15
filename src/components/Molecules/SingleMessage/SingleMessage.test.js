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
      imageSet={data.images}
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
    .c2 {
      color: #FFFFFF;
      font-size: 2.075rem;
      text-transform: inherit;
    }

    .c3 {
      color: #FFFFFF;
      text-transform: inherit;
    }

    .c4 {
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

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
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
      <div
        className="c1"
      >
        <h1
          className="c2"
          color="white"
          size="xxl"
        >
          title
        </h1>
        <p
          className="c3"
          color="white"
        >
          description
        </p>
        <span>
          <a
            className="c4"
            color="white"
            href="/"
            target="_self"
          >
            CTA
          </a>
        </span>
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
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-flex-direction: column;
                      -ms-flex-direction: column;
                      flex-direction: column;
                      -webkit-box-pack: center;
                      -webkit-justify-content: center;
                      -ms-flex-pack: center;
                      justify-content: center;
                      -webkit-box-flex: 0;
                      -webkit-flex-grow: 0;
                      -ms-flex-positive: 0;
                      flex-grow: 0;
                      -webkit-flex-shrink: 0;
                      -ms-flex-negative: 0;
                      flex-shrink: 0;
                      -webkit-flex-basis: 50%;
                      -ms-flex-preferred-size: 50%;
                      flex-basis: 50%;
                      padding: 20px;
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
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-flex-direction: column;
                      -ms-flex-direction: column;
                      flex-direction: column;
                      -webkit-box-pack: center;
                      -webkit-justify-content: center;
                      -ms-flex-pack: center;
                      justify-content: center;
                      -webkit-box-flex: 0;
                      -webkit-flex-grow: 0;
                      -ms-flex-positive: 0;
                      flex-grow: 0;
                      -webkit-flex-shrink: 0;
                      -ms-flex-negative: 0;
                      flex-shrink: 0;
                      -webkit-flex-basis: 50%;
                      -ms-flex-preferred-size: 50%;
                      flex-basis: 50%;
                      padding: 20px;
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
