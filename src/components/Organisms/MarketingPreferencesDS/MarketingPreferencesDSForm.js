import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

const prefix = 'testprefix-';

const initialValues = {
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
};

const validationSchema = yup.object({
  /* 'Required' attributes needs to be set on checkbox status to ensure validation makes sense */
  [`${prefix}email`]: yup.string().max(50, 'Too long').email('Please enter a valid email address')
    .when(`${prefix}permissionEmail`, {
      is: val => val.length > 0,
      then: yup.string().required('Please enter your email address')
    }),

  [`${prefix}mobile`]: yup.string().max(11, 'Too long').when(`${prefix}permissionSMS`, {
    is: val => val.length > 0,
    then: yup.string().required('Please enter your mobile number')
  }),

  [`${prefix}phone`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPhone`, {
    is: val => val.length > 0,
    then: yup.string().required('Please enter your phone number')
  }),

  [`${prefix}address1`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPost`, {
    is: val => val.length > 0,
    then: yup.string().required('This field is required')
  }),

  [`${prefix}town`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
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

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesDSForm = () => {
  /** Rather than using Formik's own weird onSubmit function (which only runs if the form is valid)
    * here's a custom handler  */
  function customSubmitHandler(e, triggerValidation, formValues) {
    e.preventDefault(); //
    triggerValidation().then(() => {
      console.log('Oh great, these are PRE-validation values', formValues);
    }); // trigger Formik's native validation passed to this custom handler

    // Not worth setting-up refs for error scrolling, so going oldskool
    // setTimeout(() => {
    //   document.querySelector('.error-message').scrollIntoView({ behavior: 'smooth' });
    // }, 0);
  }

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        validate={values => { console.log('validate!', values); }}
      >
        {({
          handleChange, setFieldValue, validateForm, setFieldTouched,
          // handleSubmit, isSubmitting, isValidating
          values, errors, touched
        }) => (

          <form
            noValidate
            onSubmit={e => customSubmitHandler(e, validateForm, { errors, touched, values })}
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
