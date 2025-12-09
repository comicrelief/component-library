import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import RadioButton from './RadioButton';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <>
      <RadioButton id="male" name="gender" value="male" label="Male" />
      <RadioButton id="female" name="gender" value="female" label="Female" />
    </>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    Array [
      .c2 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c2 {
      font-weight: bold;
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
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
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
      background-color: #6F3AAB;
      border: 1px solid #6F3AAB;
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

    @media (min-width:740px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    <label
        className="c0"
        htmlFor="male"
      >
        <input
          className="c1"
          id="male"
          name="gender"
          type="radio"
          value="male"
        />
        <span />
        <span
          className="c2"
          color="inherit"
        >
          Male
        </span>
      </label>,
      .c2 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c2 {
      font-weight: bold;
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
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
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
      background-color: #6F3AAB;
      border: 1px solid #6F3AAB;
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

    @media (min-width:740px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    <label
        className="c0"
        htmlFor="female"
      >
        <input
          className="c1"
          id="female"
          name="gender"
          type="radio"
          value="female"
        />
        <span />
        <span
          className="c2"
          color="inherit"
        >
          Female
        </span>
      </label>,
    ]
  `);
});
