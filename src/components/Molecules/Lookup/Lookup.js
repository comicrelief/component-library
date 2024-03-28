import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextInputWithDropdown from '../../Atoms/TextInputWithDropdown/TextInputWithDropdown';
import spacing from '../../../theme/shared/spacing';
import ButtonWithStates from '../../Atoms/ButtonWithStates/ButtonWithStates';

const StyledButton = styled(ButtonWithStates)`${({ theme }) => css`
  color: ${theme.color('grey_dark')};
  border: 2px solid ${theme.color('grey_dark')};
  background-color: ${theme.color('white')};
  padding-left: ${spacing('lg')};
  padding-right: ${spacing('lg')};
  &:hover {
    color: ${theme.color('grey_dark')};
    background-color: ${theme.color('white')};
  }
`}`;

const KEY_CODE_ENTER = 13;

/**
 * A simple lookup component
 *
 * The `lookupHandler` should be an async function which is called when a lookup is triggered
 *  (either by hitting enter or clicking the button)
 *
 * It will receive the current search term and should:
 * - take care of any validation on the search term
 * - perform the actual lookup request
 * - return an array of options (or an empty array if none were found)
 * - only throw errors with user-friendly messages
 *
 * Any errors thrown will be caught and the message will be displayed to the user.
 *
 * The `onSelect` function will receive the chosen option.
 *
 * @param name
 * @param label
 * @param placeholder
 * @param buttonText
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
      <StyledButton
        type="button"
        onClick={() => handler()}
        loading={isSearching}
        disabled={isSearching}
        loadingText="Searching"
      >
        {buttonText}
      </StyledButton>
    </div>
  );
};

Lookup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  lookupHandler: PropTypes.func.isRequired,
  mapOptionToString: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  noResultsMessage: PropTypes.string,
  dropdownInstruction: PropTypes.string
};

Lookup.defaultProps = {
  noResultsMessage: 'Sorry, could not find any results for your search',
  dropdownInstruction: ''
};

export default Lookup;
