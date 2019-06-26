import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
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
      color: inherit;
      font-size: 1rem;
    }

    .c2 {
      box-sizing: border-box;
      width: 100%;
      margin: 10px 0;
      min-height: 65px;
      padding: 12px 50px 14px 10px;
      font-size: 1.2rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #030e1a;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #030e1a;
    }

    .c2:focus {
      border: 1px solid #666;
    }

    .c2:focus::-webkit-input-placeholder {
      color: transparent;
    }

    .c2:focus:-moz-placeholder {
      color: transparent;
    }

    .c2:focus::-moz-placeholder {
      color: transparent;
    }

    .c2:focus:-ms-input-placeholder {
      color: transparent;
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

    <label
      className="c0"
      htmlFor="undefined"
    >
      <span
        className="c1"
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
