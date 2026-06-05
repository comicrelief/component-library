import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../Atoms/Icons/Arrow';
import {
  EmailSignUpWrapper,
  LabelWrapper,
  StyledLabel,
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
        <StyledLabel>
          Subscribe to our newsletter
        </StyledLabel>
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
          <StyledEmailSignUpButton type="submit" color="white">
            <span className="emailSignUpButtonContent">
              <span className="emailSignUpButtonLabel">Sign up</span>
              <span className="emailSignUpButtonArrow" aria-hidden="true">
                <Arrow direction="right" colour="white" size={18} />
              </span>
            </span>
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
