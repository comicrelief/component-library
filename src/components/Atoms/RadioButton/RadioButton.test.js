import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import RadioButton from './RadioButton';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <>
      <RadioButton name="gender" value="male" label="Male" />
      <RadioButton name="gender" value="female" label="Female" />
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
          name="gender"
          type="radio"
          value="male"
        />
        <span
          className="c2"
          size="s"
        >
          Male
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
          name="gender"
          type="radio"
          value="female"
        />
        <span
          className="c2"
          size="s"
        >
          Female
        </span>
      </label>,
    ]
  `);
});
