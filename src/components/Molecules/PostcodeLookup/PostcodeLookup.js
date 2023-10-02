import React from 'react';
import PropTypes from 'prop-types';
import { isValid, toNormalised } from 'postcode';
import axios from 'axios';
import Lookup from '../Lookup/Lookup';

const validatePostcode = postcode => {
  const trimmed = typeof postcode === 'string' ? postcode.trim() : '';
  return isValid(trimmed) && toNormalised(trimmed);
};

const getAddresses = postcode => axios.get(
  `${process.env.GATSBY_LOOKUP_SERVICE_BASE_URL}/postcode/lookup`,
  {
    timeout: 10000,
    params: { query: postcode }
  }
).then(res => res.data.addresses || []);

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
const PostcodeLookup = ({ onSelect, ...rest }) => (
  <Lookup
    name="postcode_lookup"
    label="Find address by postcode"
    placeholder="Enter postcode..."
    buttonText="Find address"
    noResultsMessage="Sorry, could not find any addresses for that postcode"
    mapOptionToString={addressToString}
    lookupHandler={addressFetcher}
    onSelect={onSelect}
    {...rest}
  />
);

PostcodeLookup.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default PostcodeLookup;
