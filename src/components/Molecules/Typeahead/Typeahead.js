import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import TextInputWithDropdown from '../../Atoms/TextInputWithDropdown/TextInputWithDropdown';

// These just felt about right to me but could be changed.
const DELAY_DURATION = 300;
const MIN_CHARS_FOR_FETCH = 2;

const Typeahead = React.forwardRef(
  (
    {
      optionFetcher,
      optionParser = null,
      onSelect,
      id,
      label,
      name,
      dropdownInstruction = null,
      notFoundMessage,
      fetchErrorHandler = () => 'Sorry, there was an unexpected error. Please try again',
      ...rest
    },
    ref
  ) => {
    const [options, setOptions] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = async query => {
      // Resetting options / errorMsg as soon as the input changes seemed to me to be the nicest UX
      // (but happy to take advice on this!)
      setOptions([]);
      setErrorMsg('');

      const queryTrimmed = query.trim();

      if (queryTrimmed.length < MIN_CHARS_FOR_FETCH) {
        return;
      }

      try {
        const newOptions = await optionFetcher(query);

        if (newOptions.length > 0) {
          setOptions(newOptions);
        } else {
          setErrorMsg(notFoundMessage);
        }
      } catch (err) {
        const newErrorMessage = fetchErrorHandler(err);

        setErrorMsg(newErrorMessage || '');
      }
    };

    // useCallback is needed so that the debounced function is not recreated on each render.
    // (Dependency array needs to be empty to ensure that this is the case).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandleChange = useCallback(debounce(handleChange, DELAY_DURATION), []);

    return (
      <TextInputWithDropdown
        defaultValue=""
        options={optionParser ? options.map(optionParser) : options}
        errorMsg={errorMsg}
        onChange={e => {
          const newValue = e.currentTarget.value;
          debouncedHandleChange(newValue);
        }}
        onSelect={(parsedOption, optionIndex) => {
          // return the original option, not the parsed value
          const selectedOption = options[optionIndex];

          // pass the selected value up to the parent via callback
          onSelect(selectedOption);

          // reset
          setOptions([]);
          setErrorMsg('');
        }}
        id={id}
        label={label}
        name={name}
        dropdownInstruction={dropdownInstruction}
        {...rest}
        ref={ref}
      />
    );
  }
);

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
   * An optional error handling function which can either return a bespoke error message to
   * be displayed here,
   *  or re-throw so the error can be handled further up the tree e.g. be an error boundary.
   */
  fetchErrorHandler: PropTypes.func,
  dropdownInstruction: PropTypes.string
};

export default Typeahead;
