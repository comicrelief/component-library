import // { useState },
React
  from 'react';
import { Formik } from 'formik';
import MarketingPreferencesDS from './_MarketingPreferencesDS';

/* This component exists purely  to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation
*/
const MarketingPreferencesDSForm = () => {
  const dummyErrorState = {
    email: 'a dummy error msg'
  };

  // Dummy validation state
  /*   const [currValidation, setCurrValidation] = useState({
    permissionEmail: { value: '', errorMessage: '' },
    permissionPost: { value: '', errorMessage: '' },
    permissionPhone: { value: '', errorMessage: '' },
    permissionSMS: { value: '', errorMessage: '' }
  }); */

  /* Dummy validation update */
  /*   function validateFields() {
    const newValues = { ...currValidation };

    // Setting up a dummy rule and dummy error msg to test
    Object.keys(newValues).forEach(key => {
      const isInvalid = newValues[key].value.length === 0; // fake a validation rule
      const errorMsg = 'This field is empty'; // fake an error
      newValues[key].errorMessage = isInvalid ? errorMsg : '';
    });

    setCurrValidation(newValues);
  } */

  /* Updates state with the most recent values */
  /*   function updateFormData(data) {
    setCurrValidation(data);
  } */

  function formSubmit() {
    console.log('formSubmit');
  }

  return (
    <>
      <Formik
        validator={() => ({})}
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
          // handleSubmit,
          handleChange,
          setFieldValue,
          values
        }) => (

          <form onSubmit={e => formSubmit(e)}>

            <MarketingPreferencesDS
              formValues={values}
              errorState={dummyErrorState}
              handleInputChange={handleChange}
              handleCheckChange={setFieldValue}
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
