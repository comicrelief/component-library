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
    <EmailSignUpWrapper data-testid="EmailSignUpWrapper">
      <LabelWrapper data-testid="EmailSignUpLabelWrapper">
        <StyledLabel data-testid="EmailSignUpLabel">
          Subscribe to our newsletter
        </StyledLabel>
      </LabelWrapper>
      <FormWrapper $error={!!errorMsg} data-testid="EmailSignUpFormWrapper">
        <InputWrapper data-testid="EmailSignUpInputWrapper">
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
            data-testid="EmailSignUpInput"
          />
        </InputWrapper>
        <ButtonWrapper data-testid="EmailSignUpButtonWrapper">
          <StyledEmailSignUpButton type="submit" color="white" data-testid="EmailSignUpButton">
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
