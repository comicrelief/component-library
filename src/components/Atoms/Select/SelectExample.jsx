import React from 'react';
import Select from './Select';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function SelectExample() {
  return (
    <>
      <ExampleContainer>
        <h4>DROPDOWN MENU</h4>
        <Select
          id="one"
          label="Label"
          description="Please choose an option"
          defaultValue="Option four"
          errorMsg=""
          data-testid="select-one"
          options={[
            { value: 'Option one', displayValue: 'The first option' },
            { value: 'Option two', displayValue: 'The second option' },
            { value: 'Option three', displayValue: 'The third option' },
            { value: 'Option four', displayValue: 'The fourth option' }
          ]}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h4>DROPDOWN MENU with error</h4>
        <Select
          id="two"
          label="Label"
          errorMsg="This is an error message"
          description="Please choose an option"
          greyDescription
          data-testid="select-two"
          options={[
            { value: 'Option one', displayValue: 'The first option' },
            { value: 'Option two', displayValue: 'The second option' },
            { value: 'Option three', displayValue: 'The third option' },
            { value: 'Option four', displayValue: 'The fourth option' }
          ]}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h4>DROPDOWN MENU - hide arrow / just one option</h4>
        <Select
          id="three"
          label="Label"
          errorMsg="This is an error message"
          description="Select an option"
          greyDescription
          hideArrow
          data-testid="select-three"
          options={[
            { value: 'Option one', displayValue: 'The first option' }
          ]}
        />
      </ExampleContainer>
    </>
  );
}
