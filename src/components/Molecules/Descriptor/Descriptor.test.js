import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Descriptor from './Descriptor';

it('renders article teaser correctly', () => {
  const tags = ['tag1', 'tag2', 'tag2', 'tag3', 'tag4'];
  const tree = renderWithTheme(
    <Descriptor
      title="Title"
      date="Date"
      tags={tags}
      categoryIcon="Icon"
      file="download"
    >
      Description go here...
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </Descriptor>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c3 {
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c5 {
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: inherit;
    }

    .c7 {
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

    .c9 {
      color: #969598;
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: normal;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c15 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      margin-left: 1rem;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      right: 1.5rem;
    }

    .c12 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: relative;
      padding: 0.5rem 1.25rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 2rem;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 3.125rem;
      width: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      background-color: #E52630;
      color: #FFFFFF;
    }

    .c12:hover {
      background-color: #890B11;
      color: #FFFFFF;
    }

    .c14 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
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
    }

    .c1 {
      position: relative;
      padding: 2rem;
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c4 {
      font-size: 1rem;
      display: block;
      color: #969598;
      margin-bottom: 1rem;
    }

    .c6 {
      font-size: 1rem;
      display: block;
      color: #969598;
      margin-bottom: 1rem;
    }

    .c8 {
      margin: 0 0 1rem;
    }

    .c10 {
      display: block;
      margin: 0 0 1rem;
    }

    .c11 {
      margin: 0 0 1rem;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c13 {
      width: 48px;
      height: 48px;
      margin-left: auto;
      position: absolute;
      bottom: -15px;
      right: 20px;
      border-radius: 24px;
      box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c13:hover {
      box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
      -webkit-transform: translateY(4px);
      -ms-transform: translateY(4px);
      transform: translateY(4px);
    }

    .c13 span {
      margin-left: auto;
      width: 20px;
      height: 22px;
    }

    @media (min-width:740px) {
      .c15 {
        width: auto;
        right: auto;
        position: relative;
      }
    }

    @media (min-width:740px) {
      .c12 {
        width: auto;
      }
    }

    <article
      className="c0"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
        >
          <span
            className="c3 c4"
            color="inherit"
            size="xs"
          >
            Date
          </span>
          <span
            className="c5 c6"
            color="inherit"
            size="xs"
          />
        </div>
        <h3
          className="c7 c8"
          color="inherit"
          height="2rem"
          size="xl"
        >
          Title
        </h3>
        <span
          className="c9 c10"
          color="grey"
          size="xs"
        >
          tag1 tag2 tag2
        </span>
        <div
          className="c11"
        >
          Description go here...
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <a
          className="c12 c13"
          color="red"
          href="download"
          rel="noopener noreferrer"
          target="_blank"
          type="button"
        >
          <span />
          <span
            className="c14"
          >
            (opens in new window)
          </span>
          <span
            className="c15"
          >
            <svg
              fill="#FFFFFF"
              heiht={24}
              viewBox="0 0 96 96"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.171 38.829a4 4 0 015.657-5.657L44 54.343V8a4 4 0 018 0v46.343l21.172-21.172a4 4 0 115.656 5.657l-28 28-.005.004a3.976 3.976 0 01-.604.493c-.101.068-.211.115-.317.172-.123.067-.241.141-.372.195-.133.055-.273.087-.41.127-.113.033-.22.077-.337.1a3.89 3.89 0 01-1.566.002c-.116-.023-.224-.067-.336-.1-.138-.04-.277-.072-.411-.128-.13-.054-.248-.128-.37-.195-.106-.058-.216-.105-.318-.173a4.037 4.037 0 01-.604-.493l-.005-.004-28.002-27.999zM84 68a4 4 0 00-4 4v12H16V72a4 4 0 00-8 0v16a4 4 0 004 4h72a4 4 0 004-4V72a4 4 0 00-4-4z"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  `);
});
