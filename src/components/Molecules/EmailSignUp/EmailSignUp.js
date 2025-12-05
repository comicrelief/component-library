import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import spacing from '../../../theme/shared/spacing';
import { springScaleAnimation } from '../../../theme/shared/animations';

const EmailSignUpWrapper = styled.div`
  margin-bottom: ${spacing('m')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin-bottom: ${spacing('m')};
  }
`;

const LabelWrapper = styled.div`
  margin-bottom: ${spacing('md')};
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing('md')};
  overflow: visible;


  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    align-items: center;
    ${({ error }) => error && `
    align-items: flex-start;
  `}
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: visible;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: auto;
    min-width: 360px;
  }
`;

const StyledEmailInput = styled(Input)`
  overflow: visible;
  input {
    font-size: ${({ theme }) => theme.fontSize('s')};
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${springScaleAnimation(true, 1.04, 1)}
  }

  input {
    background-color: ${({ theme }) => theme.color('grey_5')};
    border-color: transparent;
    transition: background-color 0.2s ease;
    border: 1px solid ${({ theme }) => theme.color('white')};
    color: ${({ theme }) => theme.color('white')};
    &::placeholder {
      color: ${({ theme }) => theme.color('grey_2')};
    }
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.color('grey_4_hover')};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: auto;
  }
`;

const StyledEmailSignUpButton = styled(Button)`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  border-radius: 0.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${springScaleAnimation(true, 1.02, 1)}
    margin: 0;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color('white')};
    color: ${({ theme }) => theme.color('black')};
  }
`;

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
