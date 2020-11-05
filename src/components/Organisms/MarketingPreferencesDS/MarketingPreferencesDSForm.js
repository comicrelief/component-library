import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MarketingPreferencesDS from './MarketingPreferencesDS';

/* This is component purely exists to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation
*/
const MarketingPreferencesDSForm = ({ copyTop, copyBottom }) => {
  // Dummy validation state
  const [currValidation, setCurrValidation] = useState({
    address1: { value: '', errorMessage: '' },
    address2: { value: '', errorMessage: '' },
    address3: { value: '', errorMessage: '' },
    town: { value: '', errorMessage: '' },
    postcode: { value: '', errorMessage: '' },
    country: { value: '', errorMessage: '' },
    mobile: { value: '', errorMessage: '' },
    phone: { value: '', errorMessage: '' },
    email: { value: '', errorMessage: '' },
    permissionEmail: { value: '', errorMessage: '' },
    permissionPost: { value: '', errorMessage: '' },
    permissionPhone: { value: '', errorMessage: '' },
    permissionSMS: { value: '', errorMessage: '' }
  });

  /* Dummy validation update */
  function validateFields() {
    const newValues = { ...currValidation };

    // Setting up a dummy rule and dummy error msg to test
    Object.keys(newValues).forEach(key => {
      const isInvalid = newValues[key].value.length === 0; // fake a validation rule
      const errorMsg = Math.random().toString(36).substring(7); // fake an error
      newValues[key].errorMessage = isInvalid ? errorMsg : '';
    });

    setCurrValidation(newValues);
  }

  // Updates state with the most recent values
  function validateFormData(data) {
    setCurrValidation(data);
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log('formSubmit:', e);
  }

  return (
    <form onSubmit={e => formSubmit(e)}>
      <MarketingPreferencesDS
        copyTop={copyTop}
        copyBottom={copyBottom}
        fieldValuesFromParent={currValidation}
        passFieldValues={validateFormData}
      />
      <input type="submit" />
      <button type="button" onClick={validateFields}>
        validateFields
      </button>
    </form>
  );
};

MarketingPreferencesDSForm.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node
};

MarketingPreferencesDSForm.defaultProps = {
  copyTop: null,
  copyBottom: null
};

export default MarketingPreferencesDSForm;
