import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import Input from './Input';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Input
      name="fullname"
      placeholder="Placeholder"
      type="text"
      color="black"
      label="Label"
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
      <input
        className="c2"
        color="black"
        name="fullname"
        placeholder="Placeholder"
        type="text"
      />
    </label>
  `);
});
