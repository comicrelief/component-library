import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SchoolLookup from '../../Molecules/SchoolLookup/SchoolLookup';
import AddressForm from '../../Molecules/AddressForm/AddressForm';
import Text from '../../Atoms/Text/Text';

const ENTER_MANUALLY_TEXT = 'Or enter details manually';
const EDIT_TEXT = 'Edit address';
const NOT_FOUND_MESSAGE =
  "Sorry, we can't find this. If the school or postcode you entered is correct then please add the address manually below.";
const LABEL_MAP = {
  name: 'Establishment name',
  line1: 'Address line 1',
  line2: 'Address line 2',
  line3: 'Address line 3',
  town: 'Town',
  postcode: 'Postcode'
};

/* eslint-disable camelcase */
const getAddressFromSchoolObject = ({
  name,
  address_1,
  address_2,
  address_3,
  town,
  post_code
}) => ({
  name,
  line1: address_1,
  line2: address_2 || '',
  line3: address_3 || '',
  town,
  postcode: post_code
});
/* eslint-enable camelcase */

/**
 * Todo:
 *  - How best to provide data back up to parent component?
 *  - Proper styling
 *  - Responsiveness
 *  - Accessibility
 *  - Tests
 *  - ??
 */
const SchoolAddressFormWithLookup = ({
  isEditing,
  onSetState,
  ...formikProps
}) => {
  const [state, _setState] = useState({
    address: null,
    valid: false,
    editing: false
  });
  const setState = newState => {
    _setState(newState);
    onSetState(newState);
  };
  const afterValidation = (address, errors) => {
    setState({
      address,
      valid: Object.keys(errors).length === 0,
      editing: false
    });
  };
  const onSelect = school => {
    setState({
      address: getAddressFromSchoolObject(school),
      // Assuming addresses from the school lookup API are valid.
      valid: true,
      editing: false
    });
  };

  return (
    <>
      <SchoolLookup
        onSelect={onSelect}
        // Clearing any address if the lookup is used again.
        // todo: not sure this is the correct behaviour.
        // todo fix this: ...state is stale in this closure.
        onChangeAction={() => setState({ ...state, address: null })}
        notFoundMessage={NOT_FOUND_MESSAGE}
      />

      {state.editing && (
        <AddressForm
          labelMap={LABEL_MAP}
          afterValidation={afterValidation}
          {...state.address}
          {...formikProps}
        />
      )}

      {state.editing === false && (
        <>
          {state.address && <SchoolAddress {...state.address} />}
          <button
            type="button"
            // todo fix this: ...state is stale in this closure.
            onClick={() => setState({ ...state, editing: true })}
          >
            {state.address ? EDIT_TEXT : ENTER_MANUALLY_TEXT}
          </button>
        </>
      )}
    </>
  );
};

const SchoolAddress = ({ name, line1, line2, line3, town, postcode }) => (
  <>
    <Text tag="p">{name}</Text>
    <Text tag="p">{line1}</Text>
    {line2 && <Text tag="p">{line2}</Text>}
    {line3 && <Text tag="p">{line3}</Text>}
    <Text tag="p">{town}</Text>
    <Text tag="p">{postcode}</Text>
  </>
);

SchoolAddress.propTypes = {
  name: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
  line3: PropTypes.string,
  town: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired
};

SchoolAddress.defaultProps = {
  line2: '',
  line3: ''
};

SchoolAddressFormWithLookup.propTypes = {
  isEditing: PropTypes.bool,
  onSetState: PropTypes.func.isRequired
};

SchoolAddressFormWithLookup.defaultProps = {
  isEditing: false
};

export default SchoolAddressFormWithLookup;
