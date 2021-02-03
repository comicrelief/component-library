/* eslint-disable max-len */
import React, { useState } from 'react';
import { Formik } from 'formik';

import MarketingPreferencesDS from './_MarketingPreferencesDS';
import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

// Define the form schema based on the default config:
let validation = buildValidationSchema();

// OR we can define it with some custom overrides:
const schemaOverrides = {
  // mp_permissionEmail: { hideInput: true } // Hides associated input field(s) for when values are passed from elsewhere (overrides all validation)
  // mp_permissionEmail: { no: false }, // Sets associated input field 'required' attribute to false when 'No' choice selecteds
  // mp_permissionPost: { disableOption: true } // Completely removes this option from render and validation
};

// Define the initial form values based on the default config:
let initialValues = setInitialValues();

// OR, override with any (validated) value the user has previous supplied in the journey
const initialValueOverrides = {
  // mp_address1: '10 King Road',
  // mp_town: 'London',
  // mp_postcode: 'SE1 7TP',
  // mp_country: 'UK',
  // mp_email: 'a.partridge@radio-norwich.com',
  // mp_permissionPost: ['yes'],  // We can also pre-select options if required
};

// Used as Formik props
validation = buildValidationSchema(schemaOverrides);
initialValues = setInitialValues(initialValueOverrides);

const {
  validationSchema,
  validationOptions
} = validation;

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesDSForm = () => {
  const [fieldOverrides, setFieldOverrides] = useState({});
  const [, forceUpdate] = useState(0);

  function customSubmitHandler(e, formValues) {
    e.preventDefault();
    console.log('customSubmitHandler', formValues);
  }

  // Practical example of how to overwrite MP fields with other fields on the same page
  function setFieldOverride(e) {
    const updatedOverrides = fieldOverrides; // Cache current overrides
    let mappedField = '';

    // Map project field names to MP field names
    switch (e.target.id) {
      case 'existing_email_field':
        mappedField = 'mp_email';
        break;
      case 'existing_mobile_field':
        mappedField = 'mp_mobile';
        break;
      default:
    }

    updatedOverrides[mappedField] = e.target.value;

    forceUpdate(n => !n); // TO-DO: find a better way of addressing this?
    setFieldOverrides(updatedOverrides); // Update our example 'fieldOverrides' state, which is being passed via prop to the MP component
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur={false}
        validateOnMount={false}
      >
        {({
          handleChange, setFieldValue, setFieldTouched, isValid, values, errors, touched
          // validateForm, setFieldTouched, dirty, handleSubmit, isSubmitting, isValidating
        }) => (

          <form
            noValidate
            onSubmit={e => customSubmitHandler(e, { errors, touched, values })}
          >
            <label htmlFor="existing_email_field">
              Represents an existing Email field in the journey
              <input name="existing_email_field" id="existing_email_field" onChange={e => { setFieldOverride(e); }} style={{ display: 'block' }} />
            </label>

            <label htmlFor="existing_mobile_field">
              Represents an existing Mobile field in the journey
              <input name="existing_mobile_field" id="existing_mobile_field" onChange={e => { setFieldOverride(e); }} style={{ display: 'block' }} />
            </label>

            <label htmlFor="touchedtest">
              touchedtest
              <input name="touchedtest" id="touchedtest" style={{ display: 'block' }} />
            </label>

            <button type="submit" disabled={!(isValid)}>S U B M I T </button>

            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleTouchedReset={setFieldTouched}
              validation={{ errors, touched, validationOptions }}
              setFieldValue={setFieldValue}
              // inputFieldOverrides={fieldOverrides}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};
export default MarketingPreferencesDSForm;
