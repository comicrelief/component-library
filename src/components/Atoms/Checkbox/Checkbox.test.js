import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
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
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c1 {
      display: block;
      box-sizing: border-box;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 24px;
      height: 24px;
      margin: 0;
      border: 1px solid #969598;
    }

    .c1 + span {
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 4px;
      background-color: #FFFFFF;
      border: 1px solid #969598;
      float: left;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c1:checked + span {
      background: url(mock.asset) no-repeat center;
      background-color: #E52630;
      border-color: #E52630;
      background-size: contain;
    }

    .c1:focus + span {
      border-color: #E52630;
      border-width: 1px;
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
          className="c2"
          color="inherit"
          size="s"
        >
          Tenis
        </span>
      </label>,
      .c2 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c1 {
      display: block;
      box-sizing: border-box;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 24px;
      height: 24px;
      margin: 0;
      border: 1px solid #969598;
    }

    .c1 + span {
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 4px;
      background-color: #FFFFFF;
      border: 1px solid #969598;
      float: left;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c1:checked + span {
      background: url(mock.asset) no-repeat center;
      background-color: #E52630;
      border-color: #E52630;
      background-size: contain;
    }

    .c1:focus + span {
      border-color: #E52630;
      border-width: 1px;
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
          className="c2"
          color="inherit"
          size="s"
        >
          Handball
        </span>
      </label>,
    ]
  `);
});
