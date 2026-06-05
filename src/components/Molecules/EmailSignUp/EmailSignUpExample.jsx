import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import EmailSignUp from './EmailSignUp';
import Text from '../../Atoms/Text/Text';

const DarkWrapper = styled.div`
  background: ${({ theme }) => theme.color('deep_violet_dark')};
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const validationSchema = yup.object({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
});

export default function EmailSignUpExample() {
  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = formMethods;

  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log('Submitted:', data);

  return (
    <>
      <Text tag="p">
        The EmailSignUp molecule is a presentational sub-component; consuming applications must
        supply their own react-hook-form context and form element.
      </Text>

      <DarkWrapper>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <EmailSignUp formContext={formMethods} />
          </form>
        </FormProvider>
      </DarkWrapper>
    </>
  );
}
