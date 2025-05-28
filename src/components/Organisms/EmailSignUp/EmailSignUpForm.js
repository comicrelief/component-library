// EmailSignUpForm.js is just a wrapper for viewing in the CL
// The email sign up component that is used/exported is _EmailSignUp.js
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import {
  EmailSignUp,
  buildEsuValidationSchema,
  ESU_FIELDS
} from './_EmailSignUp';

const EmailSignUpForm = () => {
  const validationSchema = buildEsuValidationSchema({});
  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });
  const { handleSubmit, trigger, setError } = formMethods;

  async function handleSubscribe(data) {
    const valid = await trigger([
      ESU_FIELDS.EMAIL,
      ESU_FIELDS.FIRST_NAME,
      ESU_FIELDS.LAST_NAME
    ]);
    if (valid) {
      // eslint-disable-next-line no-console
      console.log(data);
    } else {
      setError('formError', { message: 'Error' });
    }
  }
  const title = 'Stay in the know!';
  const topCopy = (
    <RichText
      markup={"<p>Get regular email updates and info on what we're up to!</p>"}
    />
  );
  const privacyCopy = (
    <RichText
      markup={
        '<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>'
      }
    />
  );
  const successCopy = (
    <RichText markup="<p>Thanks! Your first email will be with you shortly</p>" />
  );
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSubscribe)} noValidate>
        <EmailSignUp
          id="default"
          title={title}
          topCopy={topCopy}
          successCopy={successCopy}
          privacyCopy={privacyCopy}
          formContext={formMethods}
        />
      </form>
    </FormProvider>
  );
};
export default EmailSignUpForm;
