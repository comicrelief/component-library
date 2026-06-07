import React from 'react';
import EmailSignUpForm from './EmailSignUpForm';
import Text from '../../Atoms/Text/Text';

export default function EmailSignUpExample() {
  return (
    <>
      <h3>**DEPRECATED**: This component is deprecated and will be removed in a future version. Please use `EmailBanner` instead, which provides the same functionality with improved design.</h3>

      <h3>EmailSignUpForm.js is just a wrapper for viewing in the CL</h3>

      <h3>The email sign up component that is used/exported is _EmailSignUp.js</h3>

      <Text tag="p">This EmailSignUpForm component exists purely to show the EmailSignUp component functioning within the Component Library; applications are to provide their own react-hook-form form and validation, based on these.</Text>
      <EmailSignUpForm />
    </>
  );
}
