import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

const prefix = 'testprefix-';

const validationSchema = yup.object({
  /* 'Required' attributes needs to be set on checkbox status to ensure validation makes sense */
  [`${prefix}email`]: yup.string().max(50, 'Too long').email('Please enter a valid email address')
    .when(`${prefix}permissionEmail`, {
      is: val => val.length > 0,
      then: yup.string().required('This field is required')
    }),

  [`${prefix}mobile`]: yup.string().max(11, 'Too long').when(`${prefix}permissionSMS`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}phone`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPhone`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}address1`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPost`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}town`]: yup.string().max(59, 'Too long').when(`${prefix}permissionPost`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}postcode`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}country`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  /*  Non-required fields */
  [`${prefix}address2`]: yup.string().max(50, 'Too long'),
  [`${prefix}address3`]: yup.string().max(50, 'Too long')
});

/* This component exists purely  to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation
*/
const MarketingPreferencesDSForm = () => {
  function formSubmit() {
    console.log('formSubmit');
  }

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur
        initialValues={{
          [`${prefix}email`]: '',
          [`${prefix}mobile`]: '',
          [`${prefix}phone`]: '',
          [`${prefix}address1`]: '',
          [`${prefix}address2`]: '',
          [`${prefix}address3`]: '',
          [`${prefix}town`]: '',
          [`${prefix}country`]: '',
          [`${prefix}postcode`]: '',
          [`${prefix}permissionEmail`]: [],
          [`${prefix}permissionPost`]: [],
          [`${prefix}permissionPhone`]: [],
          [`${prefix}permissionSMS`]: []
        }}
      >
        {({
          handleChange, setFieldValue, setFieldTouched, values, errors, touched, isValid
        }) => (

          <form onSubmit={e => formSubmit(e)}>
            <button type="button" onClick={() => { console.clear(); console.log('values', values); }}>
              Print values
            </button>

            <button type="button" onClick={() => console.log('erorrs', errors)}>
              Print errors
            </button>

            <button type="button" onClick={() => console.log('touched', touched)}>
              Print touched
            </button>

            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleCheckChange={setFieldValue}
              handleTouchedReset={setFieldTouched}
              validation={{ errors, touched }}
              validationSchema={validationSchema}
              fieldPrefix={prefix}
            />
            <input type="submit" disabled={!isValid} />
          </form>
        )}
      </Formik>

    </>
  );
};

export default MarketingPreferencesDSForm;
