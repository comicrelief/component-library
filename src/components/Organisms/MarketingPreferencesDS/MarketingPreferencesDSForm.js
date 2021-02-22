/* eslint-disable max-len */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  MarketingPreferencesDS,
  setInitialValues,
  buildValidationSchema
} from './_MarketingPreferencesDS';

const mpValidation = buildValidationSchema();
const initialValues = setInitialValues();

const {
  mpValidationSchema,
  mpValidationOptions
} = mpValidation;

/* This component exists purely to show the Marketing Preferences
  component working in the Component Library; applications are to
  provide their own form and validation based on these */
const MarketingPreferencesDSForm = () => {
  function customSubmitHandler() {
    console.log('customSubmitHandler');
  }

  const formMethods = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(mpValidationSchema)
  });

  const { handleSubmit } = formMethods;

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(customSubmitHandler)} noValidate>
          <input type="submit" />
          <MarketingPreferencesDS
            validationOptions={mpValidationOptions}
          />
        </form>
      </FormProvider>

    </>
  );
};
export default MarketingPreferencesDSForm;
