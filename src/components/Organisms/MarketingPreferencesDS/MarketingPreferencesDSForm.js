import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

const validationObj = Yup.object({
  email: Yup.string().required('This field is required').email('Please enter a valid email address').max(50, 'Too long'),
  mobile: Yup.string().required('This field is required').max(11),
  phone: Yup.string().required('This field is required').max(11),
  address1: Yup.string().required('This field is required').max(50, 'Too long'),
  address2: Yup.string().max(50, 'Too long'),
  address3: Yup.string().max(50, 'Too long'),
  town: Yup.string().required('This field is required').max(50, 'Too long'),
  country: Yup.string().required('This field is required').max(50, 'Too long'),
  postcode: Yup.string().required('This field is required').max(50, 'Too long')
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
          handleChange, setFieldValue, values, errors, touched
        }) => (

          <form onSubmit={e => formSubmit(e)}>
            <MarketingPreferencesDS
              formValues={values}
              handleInputChange={handleChange}
              handleCheckChange={setFieldValue}
              validation={{ errors, touched }}
            />
            <input type="submit" />

            <button type="button" onClick={() => console.log(values)}>
              Print values
            </button>
          </form>
        )}
      </Formik>

    </>
  );
};

export default MarketingPreferencesDSForm;
