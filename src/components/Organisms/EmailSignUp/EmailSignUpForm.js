import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EmailSignUp, validationSchema, FIELDS } from './_EmailSignUp';

const EmailSignUpForm = () => {
  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });
  const { handleSubmit, trigger, setError } = formMethods;

  async function handleSubscribe(data) {
    const valid = await trigger([
      FIELDS.EMAIL,
      FIELDS.FIRST_NAME,
      FIELDS.LAST_NAME
    ]);
    if (valid) {
      console.log(data);
      setError('formError', { message: 'Issue, innit', type: 'custom ' });
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSubscribe)} noValidate>
        <EmailSignUp
          id="default"
          title="Stay in the know!"
          topCopy="Get regular email updates and info on what we’re up to!"
          successCopy="Thanks! Your first email will be with you shortly"
          privacyCopy="Our Privacy Policy describes how we handle and protect your information."
        />
      </form>
    </FormProvider>
  );
};

export default EmailSignUpForm;
