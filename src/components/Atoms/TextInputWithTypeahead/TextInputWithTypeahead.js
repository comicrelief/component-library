import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable
} from './TextInputWithTypeahead.style';
import Text from '../Text/Text';

const TextInputWithTypeahead = ({
  value,
  onChange,
  id,
  name,
  label,
  options,
  dropdownInstructions,
  onSelect,
  ...otherInputProps
}) => {
  const inputProps = {
    value,
    onChange,
    id,
    name,
    label,
    ...otherInputProps
  };

  const optionsProps = {
    options,
    dropdownInstructions,
    onSelect
  };

  return (
    <Container>
      <Input {...inputProps} />
      <Options {...optionsProps} />
    </Container>
  );
};

const Options = ({ options, dropdownInstructions, onSelect }) => {
  if (options.length === 0) {
    return null;
  }
  const getSelectHandler = (option, index) => () => onSelect({ option, index });
  return (
    <Dropdown>
      <DropdownList>
        {dropdownInstructions && (
          <DropdownItem>
            <Text>{dropdownInstructions}</Text>
          </DropdownItem>
        )}
        {options.map((option, index) => (
          <DropdownItemSelectable
            key={option}
            onClick={getSelectHandler(option, index)}
          >
            <Text>{option}</Text>
          </DropdownItemSelectable>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

TextInputWithTypeahead.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  dropdownInstructions: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

TextInputWithTypeahead.defaultProps = {
  value: '',
  options: [],
  dropdownInstructions: ''
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropdownInstructions: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default TextInputWithTypeahead;
