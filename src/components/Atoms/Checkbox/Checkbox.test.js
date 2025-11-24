import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Checkbox from './Checkbox';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <>
      <Checkbox name="sport1" value="Tennis" label="Tennis" />
      <Checkbox name="sport2" value="Handball" label="Handball" />
    </>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    Array [
      .c2 {
      font-size: 1.125rem;
      line-height: 1.375rem;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-weight: bold;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
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

    .c1 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
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
      background-size: contain;
      background-color: #E52630;
      border: 1px solid #E52630;
    }

    .c1:focus + span {
      border: 1px solid #E52630;
    }

    <label
        className="c0"
        htmlFor="sport1"
      >
        <input
          className="c1"
          id="sport1"
          name="sport1"
          type="checkbox"
          value="Tennis"
        />
        <span />
        <span
          className="c2"
          color="inherit"
          size="s"
        >
          Tennis
        </span>
      </label>,
      .c2 {
      font-size: 1.125rem;
      line-height: 1.375rem;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-weight: bold;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
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

    .c1 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
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
      background-size: contain;
      background-color: #E52630;
      border: 1px solid #E52630;
    }

    .c1:focus + span {
      border: 1px solid #E52630;
    }

    <label
        className="c0"
        htmlFor="sport2"
      >
        <input
          className="c1"
          id="sport2"
          name="sport2"
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
