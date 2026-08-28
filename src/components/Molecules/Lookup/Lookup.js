import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextInputWithDropdown from '../../Atoms/TextInputWithDropdown/TextInputWithDropdown';
import spacing from '../../../theme/shared/spacing';
import ButtonWithStates from '../../Atoms/ButtonWithStates/ButtonWithStates';

const Button = styled(ButtonWithStates)`${({
  theme,
  buttonTextColour,
  buttonBgColour,
  buttonTextHoverColour,
  buttonHoverBgColour
}) => css`
  margin-top: ${spacing('m')};
  color: ${buttonTextColour || theme.color('white')};
  background-color: ${buttonBgColour || theme.color('red')};
  &:hover {
    color: ${buttonTextHoverColour || theme.color('white')};
    background-color: ${buttonHoverBgColour || theme.color('red_dark')};
  }
  padding: 0 ${spacing('lg')};
`}`;

const KEY_CODE_ENTER = 13;

/**
 * @param name
 * @param label
 * @param placeholder
 * @param buttonText
 * @param buttonTextColour
 * @param buttonBgColour
 * @param buttonHoverBgColour
 * @param buttonHoverTextColour
 * @param lookupHandler
 * @param mapOptionToString
 * @param onSelect
 * @param noResultsMessage
 * @param dropdownInstruction
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Lookup = ({
  name,
  label,
  placeholder,
  buttonText,
  buttonTextColour,
  buttonBgColour,
  buttonHoverBgColour,
  buttonHoverTextColour,
  lookupHandler,
  mapOptionToString,
  onSelect,
  noResultsMessage,
  dropdownInstruction,
  ...rest
}) => {
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [options, setOptions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handler = useCallback(async () => {
    setErrorMessage('');
    setIsSearching(true);
    try {
      // If lookupHandler throws an error, the message will be displayed to the user
      const results = await lookupHandler(query);
      setOptions(results);
      if (results.length === 0) {
        setErrorMessage(noResultsMessage);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSearching(false);
  }, [query, setOptions, setErrorMessage, noResultsMessage, lookupHandler]);

  return (
    <div {...rest}>
      <TextInputWithDropdown
        css={{ marginBottom: spacing('md') }}
        name={name}
        id={name}
        value={query}
        options={options.map(mapOptionToString)}
        label={label}
        placeholder={placeholder}
        onChange={e => {
          setQuery(e.target.value);
          setErrorMessage('');
          setOptions([]);
        }}
        onKeyPress={e => {
          const keyCode = e.keyCode || e.which;
          if (keyCode === KEY_CODE_ENTER) {
            e.preventDefault();
            return handler();
          }
          return null;
        }}
        onSelect={(text, index) => {
          const selection = options[index];
          onSelect(selection);
          setQuery('');
          setErrorMessage('');
          setOptions([]);
        }}
        errorMsg={errorMessage}
        dropdownInstruction={dropdownInstruction}
      />
      <Button
        type="button"
        onClick={() => handler()}
        loading={isSearching}
        disabled={isSearching}
        loadingText="Searching"
        buttonTextColour={buttonTextColour}
        buttonBgColour={buttonBgColour}
        buttonHoverBgColour={buttonHoverBgColour}
        buttonHoverTextColour={buttonHoverTextColour}
      >
        {buttonText}
      </Button>
    </div>
  );
};

Lookup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonTextColour: PropTypes.string,
  buttonBgColour: PropTypes.string,
  buttonHoverBgColour: PropTypes.string,
  buttonHoverTextColour: PropTypes.string,
  lookupHandler: PropTypes.func.isRequired,
  mapOptionToString: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  noResultsMessage: PropTypes.string,
  dropdownInstruction: PropTypes.string
};

Lookup.defaultProps = {
  noResultsMessage: 'Sorry, could not find any results for your search',
  dropdownInstruction: '',
  buttonTextColour: 'white',
  buttonBgColour: '#E52630',
  buttonHoverTextColour: 'white',
  buttonHoverBgColour: '#890B11'
};

export default Lookup;
