import React from 'react';
import { Formik } from 'formik';
import MarketingPreferencesDS from './_MarketingPreferencesDS';
import {
  initialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

// Define the schema based on the default config...
let thisValidationSchema = buildValidationSchema();

// Alternatively, we can define it with some custom overrides:
const schemaOverrides = {
  mp_permissionEmail: {
    yes: true,
    no: true
  }
};

thisValidationSchema = buildValidationSchema(schemaOverrides);

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
        validationSchema={thisValidationSchema}
        validateOnChange
        validateOnBlur
        initialValues={initialValues}
        validate={values => { console.log('Validate:', values); }}
      >
        {({
          handleChange, setFieldValue, setFieldTouched, isValid, values, errors, touched
          // validateForm, setFieldTouched,
          // handleSubmit, isSubmitting, isValidating

        }) => (

          <form
            noValidate
            onSubmit={e => customSubmitHandler(e, { errors, touched, values })}
          >

            <button type="submit" disabled={!isValid}>S U B M I T </button>

            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleCheckChange={setFieldValue}
              handleTouchedReset={setFieldTouched}
              validation={{ errors, touched }}
            />
          </form>
        )}
      </Formik>

    </>
  );
};
export default MarketingPreferencesDSForm;
