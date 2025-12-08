import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import {
  EmailSignUpWrapper,
  LabelWrapper,
  FormWrapper,
  InputWrapper,
  StyledEmailInput,
  ButtonWrapper,
  StyledEmailSignUpButton
} from './EmailSignUp.style';

const EmailSignUp = ({ formContext, ...rest }) => {
  const { formState: { errors }, register } = formContext;
  const errorMsg = errors && errors.email && errors.email.message;

  return (
    <EmailSignUpWrapper>
      <LabelWrapper>
        <Text weight="bold" color="white" size="s">
          Subscribe to our newsletter
        </Text>
      </LabelWrapper>
      <FormWrapper error={!!errorMsg}>
        <InputWrapper>
          <StyledEmailInput
            name="email"
            type="email"
            id="email-signup"
            label="Email address"
            showLabel={false}
            placeholder="Enter your email address"
            errorMsg={errorMsg}
            optional
            {...register('email')}
            {...rest}
          />
        </InputWrapper>
        <ButtonWrapper>
          <StyledEmailSignUpButton type="submit" color="white" disabled={!!errorMsg}>
            Sign up
          </StyledEmailSignUpButton>
        </ButtonWrapper>
      </FormWrapper>
    </EmailSignUpWrapper>
  );
};

EmailSignUp.propTypes = {
  /** React Hook Form context object */
  formContext: PropTypes.shape().isRequired
};

export default EmailSignUp;
