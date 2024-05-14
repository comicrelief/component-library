// !! example for could not find address - n22 4qa
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Lookup from '../Lookup/Lookup';
import AddressInputs from './utils/AddressInputs';
import { addressToString, addressFetcher } from './utils/PostcodeFunctions';

const StyledLookup = styled(Lookup)`
  /* margin-bottom: ${spacing('md')}; */
`;

const Button = styled.div`
  ${({ theme }) => theme.linkStyles('standard')};
`;

export default function PostcodeLookup({
  onSelect, label, name, placeholder, buttonText, noResultsMessage, reportError, ...rest
}) {
  const [showFields, setShowFields] = useState(false);

  // Address field state
  const [addressFields, setAddressFields] = useState({
    line1: '',
    line2: '',
    line3: '',
    posttown: ''
  });

  // Function to update address fields
  const handleAddressSelect = selectedAddress => {
    setShowFields(true);
    setAddressFields({
      line1: selectedAddress.Line1 || '',
      line2: selectedAddress.Line2 || '',
      line3: selectedAddress.Line3 || '',
      posttown: selectedAddress.posttown || ''
    });
  };

  const handleManualClick = event => {
    event.preventDefault();
    setShowFields(true);
  };

  return (
    <>
      <StyledLookup
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
      <Button onClick={handleManualClick}>
        Or enter your address manually
      </Button>
      {showFields && <AddressInputs addressFields={addressFields} />}
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
  reportError: undefined
};
