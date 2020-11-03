import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MarketingPreferencesDS from './MarketingPreferencesDS';

/* Init dummy validation state */
const formValidationObject = {
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
};

/* This is really to just show the MPs working in the CL;
* applications to set out own forms and validations */
const MarketingPreferencesDSForm = ({ copyTop, copyBottom }) => {
  const [currValidation, setCurrValidation] = useState(formValidationObject); // Init default values

  /* Dummy validation update */
  function validateFields() {
    const updateValues = { ...currValidation };

    Object.keys(updateValues).forEach(key => {
      if (updateValues[key].value === 'invalid') {
        updateValues[key].errorMessage = Math.random().toString(36).substring(7); // dummy error
      } else {
        updateValues[key].errorMessage = '';
      }
    });

    setCurrValidation(updateValues);
  }

  // Updates state with the most recent values, validating as we go
  function validateFormData(data) {
    setCurrValidation(data);
    validateFields();
  }

  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={e => formSubmit(e)}>
      <MarketingPreferencesDS
        copyTop={copyTop}
        copyBottom={copyBottom}
        fieldValuesFromParent={formValidationObject}
        passFieldValues={validateFormData}
      />
      <input type="submit" />
      {'  '}
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
