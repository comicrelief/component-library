import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import TextArea from './TextArea';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <TextArea
      name="fullname"
      placeholder="Placeholder"
      label="Label"
      color="black"
      rows="5"
      cols="5"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      color: inherit;
      font-size: 1rem;
    }

    .c2 {
      background-color: white;
      outline: none;
      width: 100%;
      font-size: 1.2rem;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      border-width: 1px;
      border-style: solid;
      border-color: #030e1a;
      margin: 0;
    }

    .c0 {
      display: block;
      margin-bottom: 8px;
    }

    <label
      className="c0"
    >
      <span
        className="c1"
        size="s"
      >
        Label
      </span>
      <textarea
        className="c2"
        color="black"
        cols="5"
        name="fullname"
        placeholder="Placeholder"
        rows="5"
      />
    </label>
  `);
});
