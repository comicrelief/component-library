import React from 'react';
import PropTypes from 'prop-types';
// import spacing from '../../../theme/shared/spacing';
// import Text from '../../Atoms/Text/Text';
// import ErrorText from '../../Atoms/ErrorText/ErrorText';
import ButtonAsLink from '../../Atoms/ButtonAsLink/ButtonAsLink';

export default function ManualAddress({ showAddressInputs, setShowAddressInputs }) {
  return (
    <>
      <ButtonAsLink
        onClick={() => setShowAddressInputs(true)}
      >
        Or enter address manually
      </ButtonAsLink>

      {showAddressInputs
        && <div>manual address fields</div>}
    </>
  );
}

ManualAddress.propTypes = {
  showAddressInputs: PropTypes.bool.isRequired,
  setShowAddressInputs: PropTypes.bool.isRequired
};
