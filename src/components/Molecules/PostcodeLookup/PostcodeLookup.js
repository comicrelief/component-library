import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lookup from '../Lookup/Lookup';
import AddressInputs from './utils/AddressInputs';
import { addressToString, addressFetcher } from './utils/PostcodeFunctions';
import spacing from '../../../theme/shared/spacing';

const AddressManually = styled.button`
  margin: ${spacing('md')} 0 0 ${spacing('sm')};
  background: inherit;
  border: none;
  font-size: 1rem;
  &:hover, &:active {
    text-decoration: underline;
  }
`;

export default function PostcodeLookup({
  label,
  name,
  placeholder,
  buttonText,
  noResultsMessage,
  reportError,
  dropdownInstruction,
  buttonColour
}) {
  const [showFields, setShowFields] = useState(false);

  const [addressFields, setAddressFields] = useState({
    postcode: '',
    line1: '',
    line2: '',
    line3: '',
    posttown: ''
  });

  const handleAddressSelect = selectedAddress => {
    setShowFields(true);
    setAddressFields({
      postcode: selectedAddress.postcode || '',
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
      <Lookup
        name={name}
        label={label}
        placeholder={placeholder}
        buttonText={buttonText}
        mapOptionToString={addressToString}
        lookupHandler={postcode => addressFetcher(postcode, reportError)}
        onSelect={handleAddressSelect}
        dropdownInstruction={dropdownInstruction}
        noResultsMessage={noResultsMessage}
        buttonColour={buttonColour}
      />
      {!showFields && (
        <AddressManually onClick={handleManualClick}>
          Or enter your address manually
        </AddressManually>
      )}
      {showFields && <AddressInputs addressFields={addressFields} />}
    </>
  );
}

PostcodeLookup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  noResultsMessage: PropTypes.string,
  dropdownInstruction: PropTypes.string,
  reportError: PropTypes.oneOfType([
    PropTypes.func
  ]),
  buttonColour: PropTypes.string
};

PostcodeLookup.defaultProps = {
  name: 'postcode_lookup',
  label: 'Find address by postcode',
  placeholder: 'Enter postcode...',
  buttonText: 'Find address',
  noResultsMessage: 'Sorry, could not find any addresses for that postcode',
  dropdownInstruction: 'Please select an organisation from the list below',
  reportError: undefined,
  buttonColour: '#f04257'
};
