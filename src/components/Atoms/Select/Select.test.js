import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Select from './Select';

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
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c2 {
      width: 100%;
      font-size: 1.25rem;
      display: block;
      box-sizing: border-box;
      padding: 0.8rem 1.5rem;
      padding-right: 4rem;
      margin: 0;
      position: relative;
      height: 48px;
      font-weight: 400;
      background: #F4F3F5 url(mock.asset) calc(100% - 1.5rem) 14px/20px 1.5rem no-repeat;
      border: 1px solid;
      border-color: #E1E2E3;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      cursor: pointer;
    }

    .c2:focus {
      border: 1px solid #666;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-weight: bold;
      color: #5C5C5E;
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
        className="c1 "
        color="inherit"
        size="s"
      >
        Label
      </span>
      <select
        className="c2"
        defaultValue=""
        onChange={[Function]}
      >
        <option
          disabled={true}
          value=""
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
