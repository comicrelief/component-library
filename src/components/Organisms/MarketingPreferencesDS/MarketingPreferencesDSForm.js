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

const MarketingPreferencesDSForm = () => {
  function customSubmitHandler() {
    // eslint-disable-next-line no-console
    console.log('customSubmitHandler');
  }

  const formMethods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
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
            mpValidationOptions={mpValidationOptions}
          />
        </form>
      </FormProvider>

    </>
  );
};
export default MarketingPreferencesDSForm;
