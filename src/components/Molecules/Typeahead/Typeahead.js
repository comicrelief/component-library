import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import TextInputWithDropdown from '../../Atoms/TextInputWithDropdown/TextInputWithDropdown';
import useStateObject from '../../../utils/useStateObject';

const initialState = {
  value: '',
  options: [],
  errorMsg: ''
};

// These just felt about right to me but could be changed.
const DELAY_DURATION = 200;
const MIN_CHARS_FOR_FETCH = 2;

const Typeahead = ({
  optionFetcher,
  optionParser,
  onSelect,
  id,
  label,
  name,
  dropdownInstruction,
  notFoundMessage,
  fetchErrorHandler,
  ...rest
}) => {
  const [state, updateState] = useStateObject(initialState);

  const debouncedFetch = useCallback(
    debounce(async value => {
      const valueTrimmed = value.trim();
      let { options, errorMsg } = initialState;
      if (valueTrimmed.length >= MIN_CHARS_FOR_FETCH) {
        try {
          options = await optionFetcher(valueTrimmed);
          if (options.length === 0) {
            errorMsg = notFoundMessage;
          }
        } catch (err) {
          errorMsg = fetchErrorHandler(err);
        }
        updateState({ options, errorMsg });
      }
    }, DELAY_DURATION),
    []
  );

  const onChange = e => {
    const { value } = e.currentTarget;
    // Resetting options / errorMsg as soon as the input changes seemed to me to be the nicest UX
    // (but happy to take advice on this!)
    const { options, errorMsg } = initialState;
    updateState({ value, options, errorMsg });
    debouncedFetch(value);
  };

  const { value, options, errorMsg } = state;

  return (
    <TextInputWithDropdown
      value={value}
      options={optionParser ? options.map(optionParser) : options}
      errorMsg={errorMsg}
      onChange={onChange}
      onSelect={(v, index) => {
        const selected = options[index];
        // pass the selected value up to the parent via callback
        onSelect(selected);
        // reset
        updateState(initialState);
      }}
      id={id}
      label={label}
      name={name}
      dropdownInstruction={dropdownInstruction}
      {...rest}
    />
  );
};

Typeahead.propTypes = {
  /** Takes the value and returns an array of options (e.g. by calling some lookup api.) */
  optionFetcher: PropTypes.func.isRequired,
  /**
   * Used to parse the options returned by the optionFetcher into strings - if they aren't already
   *  strings - which can then be displayed in the dropdown list.
   */
  optionParser: PropTypes.func,
  /** This function is used to provide data to the parent component when a selection is made. */
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  notFoundMessage: PropTypes.string.isRequired,
  /**
   * An optional error handling function which can either return a bespoke error message to be displayed here,
   *  or re-throw so the error can be handled further up the tree e.g. be an error boundary.
   */
  fetchErrorHandler: PropTypes.func,
  dropdownInstruction: PropTypes.string
};

Typeahead.defaultProps = {
  dropdownInstruction: null,
  optionParser: null,
  fetchErrorHandler: () =>
    'Sorry, there was an unexpected error. Please try again'
};

export default Typeahead;
