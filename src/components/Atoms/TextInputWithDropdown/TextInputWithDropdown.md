# TextInputWithDropdown

```jsx
initialState = {
  value: '',
  options: []
};

const dummyOptions = [
  'Option 1',
  'Another option',
  'And another',
  'Click me',
  'No, click me'
];

<TextInputWithDropdown
  value={state.value}
  options={state.options}
  onChange={e => {
    setState({
      value: e.currentTarget.value,
      options: state.value.trim().length > 2 ? dummyOptions : []
    });
  }}
  onSelect={(value, index) => {
    alert(`Selected [${value}] at index [${index}]`);
    setState(initialState);
  }}
  id="input-with-dropdown"
  name="query"
  label="Text input with dropdown"
  dropdownInstruction="Choose one from the list below..."
/>;
```
