import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
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
      .c1 {
      display: block;
      box-sizing: border-box;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 30px;
      height: 30px;
      margin: 0;
      border: 1px solid #666;
    }

    .c1 + span {
      margin-right: 5px;
      width: 30px;
      height: 30px;
      background-color: #FFFFFF;
      border: 1px solid #666;
      float: left;
    }

    .c1:checked + span {
      background: url(mock.asset) no-repeat center;
      background-color: #7d2ca9;
      background-size: contain;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
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
        <span />
        <span
          className=""
          color="inherit"
        >
          Tenis
        </span>
      </label>,
      .c1 {
      display: block;
      box-sizing: border-box;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 30px;
      height: 30px;
      margin: 0;
      border: 1px solid #666;
    }

    .c1 + span {
      margin-right: 5px;
      width: 30px;
      height: 30px;
      background-color: #FFFFFF;
      border: 1px solid #666;
      float: left;
    }

    .c1:checked + span {
      background: url(mock.asset) no-repeat center;
      background-color: #7d2ca9;
      background-size: contain;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
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
        <span />
        <span
          className=""
          color="inherit"
        >
          Handball
        </span>
      </label>,
    ]
  `);
});
