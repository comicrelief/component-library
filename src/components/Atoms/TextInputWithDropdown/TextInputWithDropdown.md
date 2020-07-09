# TextInputWithDropdown

```jsx
const [value, setValue] = React.useState('');
const [options, setOptions] = React.useState([]);

const dummyOptions = [
  'Option 1',
  'Another option',
  'And another',
  'Click me',
  'No, click me',
];

<TextInputWithDropdown
  value={value}
  options={options}
  onChange={(e) => {
    setValue(e.currentTarget.value);
    setOptions(value.trim().length > 2 ? dummyOptions : []);
  }}
  onSelect={(value, index) => {
    alert(`Selected [${value}] at index [${index}]`);
    setValue('');
    setOptions([]);
  }}
  id="input-with-dropdown"
  name="query"
  label="Text input with dropdown"
  dropdownInstruction="Choose one from the list below..."
/>;
```
