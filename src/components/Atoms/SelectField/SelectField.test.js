import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Select from './SelectField';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Select
      label="Label"
      description="Please choose an option"
      errorMsg=""
      options={[
        { value: 'Option one', displayValue: 'The first option' },
        {
          value: 'Option two',
          displayValue: 'The second option'
        },
        { value: 'Option three', displayValue: 'The third option' },
        { value: 'Option four', displayValue: 'The fourth option' }
      ]}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c2 {
      background-color: #FFFFFF;
      width: 100%;
      font-size: 1.2rem;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      border-width: 1px;
      border-style: solid;
      border-color: #2C0230;
      margin: 0;
      position: relative;
      -moz-appearance: none;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 50px 8px 10px;
      height: 50px;
      font-weight: 300;
      background: transparent url(mock.asset) calc(100% - 20px) 18px/20px 20px no-repeat;
      cursor: pointer;
      margin-bottom: 0;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      box-shadow: border-box;
      border-radius: 0;
    }

    .c2:focus {
      border: 1px solid #666;
    }

    .c0 {
      display: block;
      margin-bottom: 8px;
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
        color="inherit"
        size="s"
      >
        Label
      </span>
      <select
        className="c2"
      >
        <option
          disabled={true}
        >
          Please choose an option
        </option>
        <option
          value="Option one"
        >
          The first option
        </option>
        <option
          value="Option two"
        >
          The second option
        </option>
        <option
          value="Option three"
        >
          The third option
        </option>
        <option
          value="Option four"
        >
          The fourth option
        </option>
      </select>
      
    </label>
  `);
});
