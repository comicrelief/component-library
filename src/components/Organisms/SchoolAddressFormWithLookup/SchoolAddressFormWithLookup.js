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
 *  - Buttons: Edit / Or edit manually etc.
 *  - Provide address to parent (whether selected or manual)
 *  - Proper styling
 *  - Responsiveness
 *  - Accessibility
 *  - Tests
 *  - ??
 */
const SchoolAddressFormWithLookup = () => {
  const [address, setAddress] = useState(null);
  const [editing, setEditing] = useState(false);

  const onSelect = school => {
    setAddress(getAddressFromSchoolObject(school));
    setEditing(false);
  };

  // Todo: what happens if they don't submit it?
  //  ... need to change the way this works.
  const onValidSubmission = manualAddress => {
    setAddress(manualAddress);
    setEditing(false);
  };

  const EditButton = () => (
    <button type="button" onClick={() => setEditing(true)}>
      {address ? EDIT_TEXT : ENTER_MANUALLY_TEXT}
    </button>
  );

  return (
    <>
      <SchoolLookup onSelect={onSelect} notFoundMessage={NOT_FOUND_MESSAGE} />

      {editing && (
        <AddressForm
          onValidSubmission={onValidSubmission}
          labelMap={LABEL_MAP}
          enableReinitialize
          {...address}
        />
      )}

      {editing === false && (
        <>
          {address && <SchoolAddress {...address} />}
          <EditButton />
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

export default SchoolAddressFormWithLookup;
