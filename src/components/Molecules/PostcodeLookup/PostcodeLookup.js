// !! example for could not find address - n22 4qa
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValid, toNormalised } from 'postcode';
import Lookup from '../Lookup/Lookup';
import AddressInputs from './AddressInputs';

const validatePostcode = postcode => {
  const trimmed = typeof postcode === 'string' ? postcode.trim() : '';
  return isValid(trimmed) && toNormalised(trimmed);
};

// report Error - Sentry function passed as a prop
const getAddresses = async (postcode, reportError) => {
  const url = `https://lookups-staging.sls.comicrelief.com/postcode/lookup?query=${postcode}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.addresses || [];
  } catch (error) {
    // Report the error to Sentry if available, or handle it locally
    if (reportError) {
      reportError(error);
    }
    throw new Error('Sorry, something unexpected went wrong. Please try again or enter your address manually');
  }
};

const addressToString = address => [address.Line1, address.Line2, address.Line3, address.posttown]
  .filter(line => line)
  .join(', ');

const addressFetcher = async (postcode, reportError) => {
  const valid = validatePostcode(postcode);
  if (!valid) {
    throw new Error('Please provide a valid postcode');
  }
  try {
    return await getAddresses(valid, reportError);
  } catch (error) {
    /* eslint-disable-next-line */
    console.error('Error fetching addresses:', error);
    return [];
  }
};

export default function PostcodeLookup({
  onSelect, label, name, placeholder, buttonText, noResultsMessage, reportError, ...rest
}) {
  // Address field state
  const [addressFields, setAddressFields] = useState({
    line1: '',
    line2: '',
    line3: '',
    posttown: ''
  });

  // Function to update address fields
  const handleAddressSelect = selectedAddress => {
    setAddressFields({
      line1: selectedAddress.Line1 || '',
      line2: selectedAddress.Line2 || '',
      line3: selectedAddress.Line3 || '',
      posttown: selectedAddress.posttown || ''
    });
  };

  return (
    <>
      <Lookup
        name={name}
        label={label}
        placeholder={placeholder}
        buttonText={buttonText}
        noResultsMessage={noResultsMessage}
        mapOptionToString={addressToString}
        lookupHandler={postcode => addressFetcher(postcode, reportError)}
        onSelect={handleAddressSelect}
        {...rest}
      />
      <AddressInputs addressFields={addressFields} />
    </>
  );
}

PostcodeLookup.propTypes = {
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  noResultsMessage: PropTypes.string,
  reportError: PropTypes.oneOfType([
    PropTypes.func
  ])
};

PostcodeLookup.defaultProps = {
  name: 'postcode_lookup',
  label: 'Find address by postcode',
  placeholder: 'Enter postcode...',
  buttonText: 'Find address',
  noResultsMessage: 'Sorry, could not find any addresses for that postcode',
  reportError: undefined // Set reportError default value to undefined
};
