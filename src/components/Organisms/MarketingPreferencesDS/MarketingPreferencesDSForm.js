import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '../../Atoms/Text/Text';

import {
  MarketingPreferencesDS,
  setInitialValues,
  buildValidationSchema
} from './_MarketingPreferencesDS';

/**
 * Normal usage would be a single instance of the Marketing Preferences, but we're creating two here
 * to illustrate the difference in config options; see _MarketingPrefsConfig.js for more details.
 */

/* Create default validation and initial values by not passing any override
 parameters into the functions: */
const mpValidation = buildValidationSchema();
const initialValues = setInitialValues();

const { mpValidationSchema, mpValidationOptions } = mpValidation;

// Or customise and override the config to suit the destination app's requirements:
const initalValueOverrides = {
  mp_email: 'user@website.com' // Potentially provided earlier in the journey
};
const validationOverrides = {
  mp_permissionEmail: { hideInput: true }, // As we're passing a value above, hide the user input
  mp_permissionSMS: { disableOption: true }, // Remove this option entirely
  mp_permissionPost: { no: false } // Make Post fields non-req (so not shown) when 'No' selected
};

// Pass these override objects in as parameters
const mpValidationCustom = buildValidationSchema(validationOverrides);
const initialValuesCustom = setInitialValues(initalValueOverrides);

const {
  mpValidationSchema: mpValidationSchemaCustom,
  mpValidationOptions: mpValidationOptionsCustom
} = mpValidationCustom;

const MarketingPreferencesDSForm = () => {
  function customSubmitHandler() {
    // eslint-disable-next-line no-console
    console.log('Successful submission');
  }

  // For our default instance:
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(mpValidationSchema)
  });
  const { handleSubmit, control } = formMethods;

  // For our customised-instance:
  const formMethodsCustom = useForm({
    mode: 'onBlur',
    defaultValues: initialValuesCustom,
    resolver: yupResolver(mpValidationSchemaCustom)
  });
  const { handleSubmit: handleSubmitCustom } = formMethodsCustom;

  return (
    <>
      <Text tag="p" weight="bold">Our default instance:</Text>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(customSubmitHandler)} noValidate>
          <MarketingPreferencesDS
            control={control}
            mpValidationOptions={mpValidationOptions}
            id="default"
          />
          <input type="submit" />
        </form>
      </FormProvider>

      <Text tag="h3" size="xl">- - - - - - - - - - - - - </Text>

      <Text tag="p" weight="bold">Our customised instance:</Text>
      <FormProvider {...formMethodsCustom}>
        <form onSubmit={handleSubmitCustom(customSubmitHandler)} noValidate>
          <MarketingPreferencesDS
            control={control}
            mpValidationOptions={mpValidationOptionsCustom}
            id="custom"
          />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};
export default MarketingPreferencesDSForm;
