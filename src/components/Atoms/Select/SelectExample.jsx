import React from 'react';
import Select from './Select';

export default function SelectExample() {
  return (
    <>
      <h4>DROPDOWN MENU</h4>
      <Select
        label="Label"
        description="Please choose an option"
        defaultValue="Option four"
        errorMsg=""
        options={[
          { value: 'Option one', displayValue: 'The first option' },
          { value: 'Option two', displayValue: 'The second option' },
          { value: 'Option three', displayValue: 'The third option' },
          { value: 'Option four', displayValue: 'The fourth option' },
        ]}
      />

      <h4>DROPDOWN MENU with error</h4>
      <Select
        label="Label"
        errorMsg="This is an error message"
        description="Please choose an option"
        greyDescription
        options={[
          { value: 'Option one', displayValue: 'The first option' },
          { value: 'Option two', displayValue: 'The second option' },
          { value: 'Option three', displayValue: 'The third option' },
          { value: 'Option four', displayValue: 'The fourth option' },
        ]}
      />

      <h4>DROPDOWN MENU - hide arrow / just one option</h4>
      <Select
        label="Label"
        errorMsg="This is an error message"
        description="Select an option"
        greyDescription
        hideArrow={true}
        options={[
          { value: 'Option one', displayValue: 'The first option' },
        ]}
      />
    </>
  );
}
