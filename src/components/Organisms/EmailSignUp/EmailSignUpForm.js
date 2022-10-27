import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import { EmailSignUp, validationSchema, FIELDS } from './_EmailSignUp';

const EmailSignUpForm = () => {
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
      console.log(data);
      // setError('formError', { message: 'Issue, innit', type: 'custom ' });
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
        />
      </form>
    </FormProvider>
  );
};
export default EmailSignUpForm;
