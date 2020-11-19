import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

const validationObj = yup.object({

  /* 'Required' attributes needs to be set on checkbox status to ensure validation makes sense */
  email: yup.string().max(50, 'Too long').email('Please enter a valid email address')
    .when('permissionEmail', {
      is: val => val.length > 0,
      then: yup.string().required('This field is required')
    }),

  mobile: yup.string().max(11, 'Too long').when('permissionSMS', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  phone: yup.string().max(11, 'Too long').when('permissionPhone', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  address1: yup.string().max(11, 'Too long').when('permissionPost', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  town: yup.string().max(59, 'Too long').when('permissionPost', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  postcode: yup.string().max(50, 'Too long').when('permissionPost', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  country: yup.string().max(50, 'Too long').when('permissionPost', {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  /*  Non-required fields */
  address2: yup.string().max(50, 'Too long'),
  address3: yup.string().max(50, 'Too long')
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
        validationSchema={validationObj}
        onSubmit={formSubmit}
        initialValues={{
          email: '',
          mobile: '',
          phone: '',
          address1: '',
          address2: '',
          address3: '',
          town: '',
          country: '',
          postcode: '',
          permissionEmail: [],
          permissionPost: [],
          permissionPhone: [],
          permissionSMS: []
        }}
      >
        {({
          handleChange, setFieldValue, setFieldTouched, validateField,
          setFieldError,
          values, errors, touched
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
              handleErrorReset={setFieldError}
              handleTouchedReset={setFieldTouched}
              reValidateField={validateField}
              validation={{ errors, touched }}
            />
            <input type="submit" />
          </form>
        )}
      </Formik>

    </>
  );
};

export default MarketingPreferencesDSForm;
