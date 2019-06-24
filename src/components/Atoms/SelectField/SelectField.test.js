import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import Select from './SelectField';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Select
      label="Label"
      description="Please choose an option"
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
      color: inherit;
      font-size: 1rem;
    }

    .c2 {
      background-color: white;
      outline: none;
      width: 100%;
      font-size: 1.2rem;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      border-width: 1px;
      border-style: solid;
      border-color: inherit;
      margin: 0;
    }

    .c0 {
      display: block;
      margin-bottom: 8px;
    }

    <label
      className="c0"
    >
      <span
        className="c1"
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
