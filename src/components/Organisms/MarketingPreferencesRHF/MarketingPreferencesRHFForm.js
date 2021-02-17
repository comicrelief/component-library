/* eslint-disable max-len */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  MarketingPreferencesRHF,
  setInitialValues,
  buildValidationSchema
} from './_MarketingPreferencesRHF';

const validation = buildValidationSchema();
const initialValues = setInitialValues();

const {
  validationSchema,
  validationOptions
} = validation;

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesRHFForm = () => {
  function customSubmitHandler() {
    console.log('customSubmitHandler');
  }

  const formMethods = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });

  const { handleSubmit, formState } = formMethods;

  return (
    <>
      <FormProvider {...formMethods}>

        <form onSubmit={handleSubmit(customSubmitHandler)}>

          <input type="submit" disabled={!formState.isValid} />

          <MarketingPreferencesRHF
            validationOptions={validationOptions}
            inputFieldOverrides={{ mp_email: 'pooass' }}
            // formValues={values}
            // handleInputChange={handleChange}
            // handleTouchedReset={setFieldTouched}
            // setFieldValue={setFieldValue}
            // validateField={validateField}
          />

        </form>
      </FormProvider>

    </>
  );
};
export default MarketingPreferencesRHFForm;
