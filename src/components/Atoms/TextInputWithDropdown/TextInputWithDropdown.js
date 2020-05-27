import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable
} from './TextInputWithDropdown.style';
import Text from '../Text/Text';

/**
 * This component handles the visual aspect of a text input with typeahead-style functionality, but not
 *  the logic, API querying, state management, etc.
 * See the Typeahead molecule for the full functionality.
 *
 * Todo: does the dropdown need accessibility improvements?
 */
const TextInputWithDropdown = ({
  value,
  options,
  onChange,
  onSelect,
  id,
  name,
  label,
  dropdownInstruction,
  ...otherInputProps
}) => {
  const inputProps = {
    value,
    onChange,
    id,
    name,
    label,
    autoComplete: 'off',
    type: 'text',
    ...otherInputProps
  };

  const optionsProps = {
    options,
    onSelect,
    dropdownInstruction
  };

  return (
    <Container className="TextInputWithDropdown">
      <Input {...inputProps} />
      <Options {...optionsProps} />
    </Container>
  );
};

const Options = ({ options, dropdownInstruction, onSelect }) => {
  if (options.length === 0) {
    return null;
  }
  return (
    <Dropdown className="TextInputWithDropdown__dropdown">
      <DropdownList>
        {dropdownInstruction && (
          <DropdownItem>
            <Text>{dropdownInstruction}</Text>
          </DropdownItem>
        )}
        {options.map((option, index) => (
          <DropdownItemSelectable
            key={option}
            onClick={() => onSelect(option, index)}
          >
            <Text>{option}</Text>
          </DropdownItemSelectable>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

TextInputWithDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdownInstruction: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

TextInputWithDropdown.defaultProps = {
  dropdownInstruction: null
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  dropdownInstruction: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Options.defaultProps = {
  dropdownInstruction: null
};

export default TextInputWithDropdown;
