/* eslint-disable max-len */
import React from 'react';
import { Formik } from 'formik';
import MarketingPreferencesDS from './_MarketingPreferencesDS';
import {
  initialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

// Define the schema based on the default config
let validation = buildValidationSchema();

// Or, alternatively, define it with some custom overrides:
const schemaOverrides = {
  mp_permissionEmail: {
    no: false // Sets associated input field 'required' attr to false when 'No' choice selecteds
  },
  mp_permissionPhone: {
    disableOption: true // Completely removes this option from render and validation
  }
};

validation = buildValidationSchema(schemaOverrides);

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

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
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
              handleCheckChange={setFieldValue}
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
