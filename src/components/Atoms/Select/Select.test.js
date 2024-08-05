import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
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

  expect(tree).toMatchSnapshot();
});
