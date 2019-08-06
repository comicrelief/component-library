import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import TextArea from './TextArea';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <TextArea
      name="description"
      placeholder="This is text area"
      label="Label"
      rows="5"
      cols="5"
      errorMsg=""
      id="Please leave your comment here"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      text-transform: inherit;
      font-weight: bold;
    }

    .c2 {
      box-sizing: border-box;
      width: 100%;
      margin: 10px 0;
      min-height: 65px;
      padding: 6px 12px;
      font-size: 1.2rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-radius: 0;
      border-color: #2C0230;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #2C0230;
    }

    .c2:focus {
      border: 1px solid #918791;
    }

    .c2:focus::-webkit-input-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c2:focus:-moz-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c2:focus::-moz-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c2:focus:-ms-input-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    @media (min-width:740px) {
      .c2 {
        max-width: 100%;
        height: 96px;
      }
    }

    <label
      className="c0"
      htmlFor="undefined"
    >
      <span
        className="c1"
        color="inherit"
      >
        Label
      </span>
      <textarea
        aria-describedby="Please leave your comment here"
        className="c2"
        cols="5"
        name="description"
        placeholder="This is text area"
        rows="5"
      />
      
    </label>
  `);
});
