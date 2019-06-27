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
      background-color: #FFFFFF;
      z-index: 1;
      top: 0;
      margin: 5px 10px;
      width: 30px;
      height: 30px;
      opacity: 0;
      left: 0;
      right: 0;
    }

    .c1 + span {
      left: 2px;
      border-radius: 30px;
      background-clip: padding-box;
      position: absolute;
      top: 0px;
      width: 30px;
      height: 30px;
      border: 1px solid #666;
    }

    .c1:checked + span {
      background-color: #7d2ca9;
      border: 1px solid #7d2ca9;
    }

    .c1:checked + span:before {
      position: absolute;
      content: '';
      top: 8px;
      left: 0;
      right: 0;
      background-color: #FFFFFF;
      border-radius: 30px;
      width: 12px;
      height: 12px;
      z-index: 1;
      margin: 0 auto;
      opacity: 1;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
    }

    <label
        className="c0"
        htmlFor="Male"
      >
        <input
          className="c1"
          id="male"
          name="gender"
          type="radio"
          value="male"
        />
        <span
          className="c2"
          size="s"
        />
        <span
          className="c2"
          for="Male"
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
      background-color: #FFFFFF;
      z-index: 1;
      top: 0;
      margin: 5px 10px;
      width: 30px;
      height: 30px;
      opacity: 0;
      left: 0;
      right: 0;
    }

    .c1 + span {
      left: 2px;
      border-radius: 30px;
      background-clip: padding-box;
      position: absolute;
      top: 0px;
      width: 30px;
      height: 30px;
      border: 1px solid #666;
    }

    .c1:checked + span {
      background-color: #7d2ca9;
      border: 1px solid #7d2ca9;
    }

    .c1:checked + span:before {
      position: absolute;
      content: '';
      top: 8px;
      left: 0;
      right: 0;
      background-color: #FFFFFF;
      border-radius: 30px;
      width: 12px;
      height: 12px;
      z-index: 1;
      margin: 0 auto;
      opacity: 1;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
    }

    <label
        className="c0"
        htmlFor="Female"
      >
        <input
          className="c1"
          id="female"
          name="gender"
          type="radio"
          value="female"
        />
        <span
          className="c2"
          size="s"
        />
        <span
          className="c2"
          for="Female"
          size="s"
        >
          Female
        </span>
      </label>,
    ]
  `);
});
