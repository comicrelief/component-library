import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import Checkbox from './Checkbox';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <>
      <Checkbox name="sport" value="Tenis" label="Tenis" />
      <Checkbox name="sport" value="Handball" label="Handball" />
    </>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    Array [
      .c2 {
      color: inherit;
      font-size: 1rem;
    }

    .c1 {
      background-color: white;
      outline: none;
      display: block;
      box-sizing: border-box;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 8px;
    }

    <label
        className="c0"
      >
        <input
          className="c1"
          name="sport"
          type="checkbox"
          value="Tenis"
        />
        <span
          className="c2"
          size="s"
        >
          Tenis
        </span>
      </label>,
      .c2 {
      color: inherit;
      font-size: 1rem;
    }

    .c1 {
      background-color: white;
      outline: none;
      display: block;
      box-sizing: border-box;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 8px;
    }

    <label
        className="c0"
      >
        <input
          className="c1"
          name="sport"
          type="checkbox"
          value="Handball"
        />
        <span
          className="c2"
          size="s"
        >
          Handball
        </span>
      </label>,
    ]
  `);
});
