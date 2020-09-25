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
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c2 {
      box-sizing: border-box;
      width: 100%;
      margin: 10px 0;
      min-height: 65px;
      padding: 6px 12px;
      font-size: 1.25rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-radius: 0;
      border-color: #000000;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
    }

    .c2:focus {
      border: 1px solid #666;
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
        size="s"
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
