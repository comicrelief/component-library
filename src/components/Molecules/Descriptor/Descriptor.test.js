import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Descriptor from './Descriptor';

it('renders article teaser correctly', () => {
  const tags = ['tag1', 'tag2', 'tag3', 'tag4'];
  const categories = ['How we fund', 'Social Tech', 'Sport for Change'];
  const tree = renderWithTheme(
    <Descriptor
      title="Title"
      date="15/06/2020"
      tags={tags}
      categories={categories}
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

    .c10 {
      color: #969598;
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-transform: inherit;
      font-weight: normal;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      position: relative;
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
      display: block;
    }

    .c4 {
      font-size: 1rem;
      display: inline-block;
      color: #969598;
      margin-bottom: 1rem;
    }

    .c5 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 2rem;
      margin-top: 1.5rem;
    }

    .c5 img:not(:last-child) {
      margin-right: 8px;
    }

    .c6 {
      object-fit: cover;
      width: 24px;
      height: 24px;
    }

    .c8 {
      margin: 0 0 1.5rem;
    }

    .c9 {
      margin: 0 0 1rem 0;
    }

    .c9 span:not(:first-child) {
      margin-left: 1rem;
    }

    .c9 span:not(:first-child)::before {
      content: '';
      position: absolute;
      left: -9px;
      bottom: 5px;
      width: 3px;
      height: 3px;
      background-color: currentColor;
      border-radius: 50%;
    }

    .c11 {
      position: relative;
      text-transform: uppercase;
    }

    .c12 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
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
            15/06/2020
          </span>
          <div
            className="c5"
          >
            <img
              alt="How we fund icon"
              className="c6"
              src="mock.asset"
            />
            <img
              alt="Social Tech icon"
              className="c6"
              src="mock.asset"
            />
            <img
              alt="Sport for Change icon"
              className="c6"
              src="mock.asset"
            />
          </div>
        </div>
        <h3
          className="c7 c8"
          color="inherit"
          height="2rem"
          size="xl"
        >
          Title
        </h3>
        <div
          className="c9"
        >
          <span
            className="c10 c11"
            color="grey"
            size="xs"
          >
            tag1
          </span>
          <span
            className="c10 c11"
            color="grey"
            size="xs"
          >
            tag2
          </span>
          <span
            className="c10 c11"
            color="grey"
            size="xs"
          >
            tag3
          </span>
          <span
            className="c10 c11"
            color="grey"
            size="xs"
          >
            tag4
          </span>
        </div>
        <div
          className="c12"
        >
          Description go here...
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
    </article>
  `);
});
