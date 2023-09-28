import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValid, toNormalised } from 'postcode';
import axios from 'axios';
import Lookup from '../Lookup/Lookup';
import ButtonAsLink from '../../Atoms/ButtonAsLink/ButtonAsLink';
import StyledButtonWrapper from './PostcodeLookup.style';

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
    if (typeof Sentry !== 'undefined') {
      Sentry.captureException(error);
    }
    throw new Error('Sorry, something unexpected went wrong. Please try again or enter your address manually');
  }
};

export default function PostcodeLookup({ onSelect, ...rest }) {
  const [showAddressInputs, setShowAddressInputs] = useState(false);
  const line1 = false;
  const town = true;
  const postcode = true;

  return (
    <>
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
      {showAddressInputs && (
        <div>address inputs</div>
      )}
      <StyledButtonWrapper>
        <ButtonAsLink onClick={() => setShowAddressInputs(true)}>
          {(line1 && town && postcode)
            ? 'Edit address'
            : 'Or enter address manually'}
        </ButtonAsLink>
      </StyledButtonWrapper>
    </>
  );
}

PostcodeLookup.propTypes = {
  onSelect: PropTypes.func.isRequired
};
