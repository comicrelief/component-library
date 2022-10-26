import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EmailSignUp, buildEsuValidationSchema, FIELDS } from './_EmailSignUp';

const EmailSignUpForm = () => {
  const isSchools = false;
  const validationSchema = buildEsuValidationSchema(isSchools);

  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });
  const { handleSubmit, trigger } = formMethods;

  async function handleSubscribe(data) {
    const valid = await trigger([
      FIELDS.EMAIL,
      FIELDS.FIRST_NAME,
      FIELDS.LAST_NAME
    ]);
    if (valid) {
      console.log('Submission successful', data);
    }
  }

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleSubscribe)} noValidate>
          <EmailSignUp
            id="default"
            title="Stay in the know!"
            topCopy="Get regular email updates and info on what we’re up to!"
            privacyCopy="Our Privacy Policy describes how we handle and protect your information."
            formContext={formMethods}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default EmailSignUpForm;
