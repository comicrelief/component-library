import React, { useState } from 'react';
import TextInputWithDropdown from './TextInputWithDropdown';

const dummyOptions = [
  'Option 1',
  'Another option',
  'And another',
  'Click me',
  'No, click me',
];

export default function TextInputWithDropdownExample() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  return (
    <TextInputWithDropdown
      value={value}
      options={options}
      onChange={(e) => {
        setValue(e.currentTarget.value);
        setOptions(e.currentTarget.value.trim().length > 2 ? dummyOptions : []);
      }}
      onSelect={(selectedValue, index) => {
        alert(`Selected [${selectedValue}] at index [${index}]`);
        setValue('');
        setOptions([]);
      }}
      id="input-with-dropdown"
      name="query"
      label="Text input with dropdown"
      dropdownInstruction="Choose one from the list below..."
    />
  );
}
