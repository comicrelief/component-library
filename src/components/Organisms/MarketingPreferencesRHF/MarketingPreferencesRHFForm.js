/* eslint-disable max-len */
import React from 'react';
/// import { Formik } from 'formik';

// in progress stuff
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  MarketingPreferencesRHF,
  // setInitialValues,
  buildValidationSchema
} from './_MarketingPreferencesRHF';

const validation = buildValidationSchema();
// const initialValues = setInitialValues(); // don't think we need this now

const {
  validationSchema,
  validationOptions
} = validation;

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesRHFForm = () => {
  function customSubmitHandler(e, formValues) {
    e.preventDefault();
    console.log('customSubmitHandler', formValues);
  }

  const formMethods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema)
  });

  const {
    handleSubmit, errors, register
  } = formMethods;

  return (
    <>
      {/* ReactHookForm based solution: */}
      <FormProvider {...formMethods}>

        <form onSubmit={handleSubmit(customSubmitHandler)}>

          {/* <input type="submit" /> */}

          <MarketingPreferencesRHF
            // formValues={values}
            // handleInputChange={handleChange}
            // handleTouchedReset={setFieldTouched}
            validationOptions={validationOptions} // still needed for Yup config stuff
            // setFieldValue={setFieldValue}
            // inputFieldOverrides={fieldOverrides}
            // validateField={validateField}
          />

        </form>
      </FormProvider>

    </>
  );
};
export default MarketingPreferencesRHFForm;
