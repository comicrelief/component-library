import React from 'react';
import PropTypes from 'prop-types';
import { isValid, toNormalised } from 'postcode';
import Lookup from '../Lookup/Lookup';
import StyledWrapper from './PostcodeLookup.style';

const validatePostcode = postcode => {
  const trimmed = typeof postcode === 'string' ? postcode.trim() : '';
  return isValid(trimmed) && toNormalised(trimmed);
};

const getAddresses = async postcode => {
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
    throw new Error('Sorry, something unexpected went wrong. Please try again or enter your address manually');
  }
};

const addressToString = address => [address.Line1, address.Line2, address.Line3, address.posttown]
  .filter(line => line)
  .join(', ');

const addressFetcher = async postcode => {
  const valid = validatePostcode(postcode);
  if (!valid) {
    throw new Error('Please provide a valid postcode');
  }
  try {
    return await getAddresses(valid);
  } catch (error) {
    // if (typeof Sentry !== 'undefined') {
    //   Sentry.captureException(error);
    // }
    throw new Error('Sorry, something unexpected went wrong. Please try again or enter your address manually');
  }
};

/**
 * A simple postcode lookup component
 *
 * The parent component must provide an `onSelect` prop in order to receive the selected address.
 *
 * @param onSelect
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const PostcodeLookup = ({
  onSelect, label, placeholder, buttonText, noResultsMessage, ...rest
}) => (
  <StyledWrapper>
    <Lookup
      label={label}
      placeholder={placeholder}
      buttonText={buttonText}
      noResultsMessage={noResultsMessage}
      mapOptionToString={addressToString}
      lookupHandler={addressFetcher}
      onSelect={onSelect}
      {...rest}
    />
  </StyledWrapper>
);

PostcodeLookup.propTypes = {
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  noResultsMessage: PropTypes.string
};

PostcodeLookup.defaultProps = {
  label: 'Find address by postcode',
  placeholder: 'Enter postcode...',
  buttonText: 'Find address',
  noResultsMessage: 'Sorry, could not find any addresses for that postcode'
};

export default PostcodeLookup;
