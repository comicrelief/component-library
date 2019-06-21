import React from 'react';

import { Label, StyledInput } from './InputStyle';

const InputHelper = ({ changed, elementType, label, tag, value, ...rest }) => {
  let inputElement = null;
  switch (elementType) {
    case 'input':
      inputElement = <StyledInput {...rest} value={value} onChange={changed} />;
      break;
    case 'textarea':
      inputElement = (
        <StyledInput as={tag} {...rest} value={value} onChange={changed} />
      );
      break;
    case 'select':
      inputElement = (
        <select value={value} onChange={changed}>
          {rest.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <StyledInput {...rest} value={value} onChange={changed} />;
  }
  return (
    <>
      <Label>{label}</Label>
      {inputElement}
    </>
  );
};

export default InputHelper;
