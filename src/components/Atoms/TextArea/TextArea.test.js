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

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: #5C5C5E;
    }

    .c2 {
      margin-bottom: 0.5rem;
    }

    .c3 {
      box-sizing: border-box;
      width: 100%;
      margin: 0 0 10px 0;
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

    .c3:focus {
      border: 1px solid #666;
    }

    .c3:focus::-webkit-input-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c3:focus:-moz-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c3:focus::-moz-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    .c3:focus:-ms-input-placeholder {
      color: transparent;
      color: $color;
      font-size: $font-size;
      opacity: 1;
      overflow: visible;
    }

    <label
      className="c0"
      htmlFor="Please leave your comment here"
    >
      <span
        className="c1 c2"
        color="inherit"
        dangerouslySetInnerHTML={
          Object {
            "__html": "Label",
          }
        }
        size="s"
      />
      <textarea
        aria-describedby="Please leave your comment here"
        className="c3"
        cols="5"
        name="description"
        placeholder="This is text area"
        rows="5"
      />
      
    </label>
  `);
});
