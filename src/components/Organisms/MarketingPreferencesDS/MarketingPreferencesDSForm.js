import React from 'react';
import { Formik } from 'formik';
import MarketingPreferencesDS from './_MarketingPreferencesDS';
import { prefix, initialValues, validationSchema } from './_MarketingPrefsConfig';

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesDSForm = () => {
  function customSubmitHandler(e, formValues) {
    e.preventDefault();
    console.log('formValues', formValues);
  }

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        initialValues={initialValues}
        validate={values => { console.log('validate!', values); }}

      >
        {({
          handleChange, setFieldValue, setFieldTouched,
          // validateForm, setFieldTouched,
          // handleSubmit, isSubmitting, isValidating
          values, errors, touched
        }) => (

          <form
            noValidate
            onSubmit={e => customSubmitHandler(e, { errors, touched, values })}
          >

            <button type="submit">S U B M I T </button>

            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleCheckChange={setFieldValue}
              handleTouchedReset={setFieldTouched}
              validation={{ errors, touched }}
              validationSchema={validationSchema}
              fieldPrefix={prefix}
            />
          </form>
        )}
      </Formik>

    </>
  );
};
export default MarketingPreferencesDSForm;
