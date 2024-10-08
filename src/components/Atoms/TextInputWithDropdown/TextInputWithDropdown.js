import React, { useState, useEffect } from 'react';
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

const KEY_CODE_ENTER = 13;
const KEY_CODE_SPACE = 32;
const KEY_CODE_UP = 38;
const KEY_CODE_DOWN = 40;
const KEY_CODE_ESCAPE = 27;

/**
 * This component deals with the visual aspect of a text input with typeahead-style functionality
 *
 * API querying and state management (aside from that related to keyboard usage/accessibility) are
 *  handled by the parent component (options, onChange and onSelect props)
 *
 * See the Typeahead and SchoolLookup molecules for the full implementation
 */
const TextInputWithDropdown = React.forwardRef(
  (
    {
      options,
      onChange,
      onSelect,
      id,
      name,
      label,
      dropdownInstruction = null,
      className = '',
      ...otherInputProps
    },
    ref
  ) => {
    const [activeOption, setActiveOption] = useState(-1);
    const [forceClosed, setForceClosed] = useState(false);
    useEffect(() => {
      // reset if options change
      setActiveOption(-1);
      setForceClosed(false);
    }, [options]);

    const down = () => (activeOption < options.length - 1
      ? setActiveOption(activeOption + 1)
      : setActiveOption(0));
    const up = () => (activeOption < 1
      ? setActiveOption(options.length - 1)
      : setActiveOption(activeOption - 1));

    const navigateOptions = e => {
      if (options.length === 0) {
        return;
      }

      const keyCode = e.keyCode || e.which;

      if (keyCode === KEY_CODE_DOWN) {
        e.preventDefault();
        down();
      } else if (keyCode === KEY_CODE_UP) {
        e.preventDefault();
        up();
      } else if (keyCode === KEY_CODE_ESCAPE) {
        setForceClosed(true);
      }
    };

    const inputProps = {
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
      dropdownInstruction,
      activeOption,
      resetActiveOption: () => setActiveOption(-1)
    };

    return (
      <Container
        className={`TextInputWithDropdown ${className}`.trim()}
        onKeyDown={navigateOptions}
      >
        <Input
          {...inputProps}
          className="TextInputWithDropdown__input"
          ref={ref}
        />
        {options.length > 0 && forceClosed === false && (
          <Options
            {...optionsProps}
            className="TextInputWithDropdown__options"
          />
        )}
      </Container>
    );
  }
);

const Options = ({
  options,
  dropdownInstruction,
  onSelect,
  activeOption,
  resetActiveOption,
  ...rest
}) => {
  // Reset 'activeOption' when the list is unfocused.
  const onBlur = e => {
    const { target } = e;
    // There's a delay before the new activeOption becomes the document.activeElement when
    //  scrolling through the dropdown list via keyboard.
    setTimeout(() => {
      if (document.activeElement.parentNode !== target.parentNode) {
        resetActiveOption();
      }
    }, 100);
  };

  return (
    <Dropdown {...rest}>
      <DropdownList
        role="listbox"
        onBlur={onBlur}
        aria-activedescendant={
          activeOption > -1 ? `option-${activeOption}` : undefined
        }
      >
        {dropdownInstruction && (
          <DropdownItem role="option">
            <TextItalic>{dropdownInstruction}</TextItalic>
          </DropdownItem>
        )}
        {options.map((option, index) => (
          <DropdownItemSelectable
            id={`option-${index}`}
            role="option"
            key={option}
            onClick={() => onSelect(option, index)}
            onKeyPress={e => {
              const keyCode = e.keyCode || e.which;
              if (keyCode === KEY_CODE_SPACE || keyCode === KEY_CODE_ENTER) {
                onSelect(option, index);
              }
            }}
            tabIndex="-1"
            aria-selected={index === activeOption}
            ref={
              index === activeOption
                ? element => element && element.focus()
                : null
            }
          >
            <Text>{option}</Text>
          </DropdownItemSelectable>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

TextInputWithDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  dropdownInstruction: PropTypes.string
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  dropdownInstruction: PropTypes.string,
  activeOption: PropTypes.number.isRequired,
  resetActiveOption: PropTypes.func.isRequired
};

export default TextInputWithDropdown;
