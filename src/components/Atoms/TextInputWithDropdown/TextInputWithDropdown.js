import React, { useState, useEffect, useRef } from 'react';
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
      hideBorder = false,
      ...otherInputProps
    },
    forwardedRef
  ) => {
    const [activeOption, setActiveOption] = useState(-1);
    const [forceClosed, setForceClosed] = useState(false);
    const dropdownRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = event => {
        if (dropdownRef.current
          && !dropdownRef.current.contains(event.target)
          && !containerRef.current.contains(event.target)) {
          console.log('clicked outside');
          setForceClosed(true);
          // Clear the input
          if (onChange) {
            onChange({ target: { value: '' } });
          }
        }
      };

      // Only add the listener if we have options showing
      if (options.length > 0 && !forceClosed) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [options.length, forceClosed, onChange]);

    // Reset forceClosed when options change
    useEffect(() => {
      setForceClosed(false);
      setActiveOption(-1);
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
        ref={containerRef}
      >
        <Input
          {...inputProps}
          className="TextInputWithDropdown__input"
          ref={forwardedRef}
        />
        {options.length > 0 && !forceClosed && (
          <Options
            {...optionsProps}
            className="TextInputWithDropdown__options"
            ref={dropdownRef}
            hideBorder={hideBorder}
          />
        )}
      </Container>
    );
  }
);

const Options = React.forwardRef(({
  options,
  dropdownInstruction,
  onSelect,
  activeOption,
  resetActiveOption,
  ...rest
}, ref) => {
  // Reset 'activeOption' when the list is unfocused.
  const onBlur = e => {
    const { target } = e;
    setTimeout(() => {
      if (document.activeElement.parentNode !== target.parentNode) {
        resetActiveOption();
      }
    }, 100);
  };

  return (
    <Dropdown {...rest}>
      <DropdownList
        ref={ref}
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
});

TextInputWithDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  dropdownInstruction: PropTypes.string,
  hideBorder: PropTypes.bool
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  dropdownInstruction: PropTypes.string,
  activeOption: PropTypes.number.isRequired,
  resetActiveOption: PropTypes.func.isRequired,
  hideBorder: PropTypes.bool
};

TextInputWithDropdown.displayName = 'TextInputWithDropdown';

export default TextInputWithDropdown;
