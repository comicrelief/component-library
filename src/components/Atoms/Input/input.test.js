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
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      padding: 13px;
      margin: 10px 0;
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

    @media (min-width:740px) {
      .c2 {
        max-width: 290px;
      }
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
