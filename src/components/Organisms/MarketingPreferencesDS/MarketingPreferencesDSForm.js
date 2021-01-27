/* eslint-disable max-len */
import React from 'react';
import { Formik } from 'formik';
import MarketingPreferencesDS from './_MarketingPreferencesDS';
import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

// Define the form schema based on the default config...
let validation = buildValidationSchema();

// ...or define it with some custom overrides:
const schemaOverrides = {
  mp_permissionEmail: { no: false }, // Sets associated input field 'required' attribute to false when 'No' choice selecteds
  mp_permissionPost: { disableOption: true } // Completely removes this option from render and validation
};

validation = buildValidationSchema(schemaOverrides);

// Define the initial form values based on the default config...
let initialValues = setInitialValues();

// ...or override with any (validated) value the user has already supplied in the journey
const initialValueOverrides = {
  mp_address1: '10 King Road',
  mp_town: 'London',
  mp_postcode: 'SE1 7TP',
  mp_country: 'UK',
  mp_email: 'a.partridge@radio-norwich.com'
  // mp_permissionPost: ['yes'],  // We can also pre-select options if required
};

initialValues = setInitialValues(initialValueOverrides);

const {
  validationSchema,
  options
} = validation;

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesDSForm = () => {
  function customSubmitHandler(e, formValues) {
    e.preventDefault();
    console.log('customSubmitHandler', formValues);
  }

  // Customised wrapper function
  const customSetFieldValue = (name, value, setFieldValue) => {
    setFieldValue(name, value);
    // Force validation to remove any old errors?
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        validateOnMount
        initialValues={initialValues}
        validate={values => { console.log('Validate:', values); }}
      >
        {({
          handleChange, setFieldValue, setFieldTouched, isValid, values, errors, touched
          // validateForm, setFieldTouched, dirty,
          // handleSubmit, isSubmitting, isValidating

        }) => (

          <form
            noValidate
            onSubmit={e => customSubmitHandler(e, { errors, touched, values })}
          >

            <button type="submit" disabled={!(isValid)}>S U B M I T </button>

            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleCheckChange={(name, value) => customSetFieldValue(name, value, setFieldValue)}
              handleTouchedReset={setFieldTouched}
              validation={{ errors, touched, options }} // Pass form state and config
            />
          </form>
        )}
      </Formik>
    </>
  );
};
export default MarketingPreferencesDSForm;
