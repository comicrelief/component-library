/* eslint-disable no-console */
import React, { useState } from 'react';
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
  mp_email: 'user@website.com', // Potentially provided earlier in the journey
  mp_permissionEmail: 'true'
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
  const [emailInteractedWith, setEmailInteractedWith] = useState(false);

  function customSubmitHandler(formData) {
    // Obviously, in a *real* context, we'd do something useful with this data:
    console.log('Successful submission', formData);
    console.log('emailInteractedWith:', emailInteractedWith);
  }

  // For our default instance:
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(mpValidationSchema)
  });
  const { handleSubmit } = formMethods;

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
            mpValidationOptions={mpValidationOptions}
            id="default"
            formContext={formMethods}
            // Directly pass in our useState 'set' function as the callback:
            emailInteractedCallback={setEmailInteractedWith}
          />
          <input type="submit" />
        </form>
      </FormProvider>

      <Text tag="h3" size="xl">- - - - - - - - - - - - - </Text>

      <Text tag="p" weight="bold">Our customised instance:</Text>
      <FormProvider {...formMethodsCustom}>
        <form onSubmit={handleSubmitCustom(customSubmitHandler)} noValidate>
          <MarketingPreferencesDS
            mpValidationOptions={mpValidationOptionsCustom}
            id="custom"
            formContext={formMethodsCustom}
            // Directly pass in our useState 'set' function as the callback:
            emailInteractedCallback={setEmailInteractedWith}
          />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};
export default MarketingPreferencesDSForm;
