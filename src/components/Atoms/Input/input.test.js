import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Input from './Input';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Input
      name="fullname"
      placeholder="This is the hint text"
      type="text"
      label="Label"
      errorMsg=""
      id="Accessibility info go here"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c2 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 13px;
      font-size: 1.25rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #000000;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
    }

    .c2:focus {
      border: 1px solid #666;
    }

    .c2:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c2:focus::-moz-placeholder {
      color: #666;
    }

    .c2:focus:-ms-input-placeholder {
      color: #666;
    }

    .c2:focus::placeholder {
      color: #666;
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
      htmlFor="Accessibility info go here"
    >
      <span
        className="c1 "
        color="inherit"
        size="s"
      >
        Label
      </span>
      <input
        aria-describedby="Accessibility info go here"
        className="c2"
        id="Accessibility info go here"
        name="fullname"
        placeholder="This is the hint text"
        type="text"
      />
      
    </label>
  `);
});
