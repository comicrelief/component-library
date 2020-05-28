import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Text from '../Text/Text';
import {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable,
  TextItalic
} from './TextInputWithDropdown.style';
import makeOnEnterHandler from '../../../utils/makeOnEnterHandler';

/**
 * This component deals with the visual aspect of a text input with typeahead-style functionality
 *
 * Proper functionality / behaviour (e.g. API querying, state management, etc.) are handled by the parent
 *  component (via the value, options, onChange and onSelect props)
 *
 * See the Typeahead and SchoolLookup molecules for the full implementation
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
  className,
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
    <Container className={`TextInputWithDropdown ${className}`.trim()}>
      <Input {...inputProps} className="TextInputWithDropdown__input" />
      <Options {...optionsProps} className="TextInputWithDropdown__options" />
    </Container>
  );
};

const Options = ({ options, dropdownInstruction, onSelect, ...rest }) => {
  if (options.length === 0) {
    return null;
  }
  return (
    <Dropdown {...rest}>
      <DropdownList>
        {dropdownInstruction && (
          <DropdownItem>
            <TextItalic>{dropdownInstruction}</TextItalic>
          </DropdownItem>
        )}
        {options.map((option, index) => {
          const handler = () => onSelect(option, index);
          return (
            <DropdownItemSelectable
              key={option}
              onClick={handler}
              onKeyPress={makeOnEnterHandler(handler)}
              tabIndex="0"
            >
              <Text>{option}</Text>
            </DropdownItemSelectable>
          );
        })}
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
  className: PropTypes.string,
  dropdownInstruction: PropTypes.string
};

TextInputWithDropdown.defaultProps = {
  dropdownInstruction: null,
  className: ''
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  dropdownInstruction: PropTypes.string
};

Options.defaultProps = {
  dropdownInstruction: null
};

export default TextInputWithDropdown;
