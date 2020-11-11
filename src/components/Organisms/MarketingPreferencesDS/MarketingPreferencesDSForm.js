import React, { useState } from 'react';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

/* This component exists purely  to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation
*/
const MarketingPreferencesDSForm = () => {
  // Dummy validation state
  const [currValidation, setCurrValidation] = useState({
    email: { value: '', errorMessage: '' },
    address1: { value: '', errorMessage: '' },
    address2: { value: '', errorMessage: '' },
    address3: { value: '', errorMessage: '' },
    town: { value: '', errorMessage: '' },
    postcode: { value: '', errorMessage: '' },
    country: { value: '', errorMessage: '' },
    phone: { value: '', errorMessage: '' },
    mobile: { value: '', errorMessage: '' },
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
      const errorMsg = 'This field is empty'; // fake an error
      newValues[key].errorMessage = isInvalid ? errorMsg : '';
    });

    setCurrValidation(newValues);
  }

  /* Updates state with the most recent values */
  function updateFormData(data) {
    setCurrValidation(data);
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log('formSubmit:', e);
  }

  return (
    <form onSubmit={e => formSubmit(e)}>
      <MarketingPreferencesDS
        fieldValuesFromParent={currValidation}
        passFieldValues={updateFormData}
        // copyTop={} Overridable
        // copyBottom={} Overridable
      />
      <input type="submit" />
      <button type="button" onClick={validateFields}>
        validateFields
      </button>
    </form>
  );
};

export default MarketingPreferencesDSForm;
