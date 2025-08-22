# Select

```js
<h4>DROPDOWN MENU</h4>
<Select
  label="Label"
  description="Please choose an option"
  // note: defaultValue is just using the built-in React defaultValue prop. It adds the HTML prop "selected" to one of the options elements. This is why defaultValue must be set to one of the existing options values:
  defaultValue="Option four"
  errorMsg=""
  options={[
    { value: 'Option one', displayValue: 'The first option' },
    { value: 'Option two', displayValue: 'The second option' },
    { value: 'Option three', displayValue: 'The third option' },
    { value: 'Option four', displayValue: 'The fourth option' }
  ]}
/>

<h4>DROPDOWN MENU</h4>
<Select
  label="Label"
  errorMsg="This is an error message"
  description="Please choose an option"
  greyDescription
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

<h4>DROPDOWN MENU - hide arrow / just one option</h4>
<Select
    label="Label"
    errorMsg="This is an error message"
    description="Select an option"
    greyDescription
    hideArrow={true}
    options={[
        { value: 'Option one', displayValue: 'The first option' }
    ]}
/>
```
