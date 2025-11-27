import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import spacing from '../../../theme/shared/spacing';
import { springScaleAnimation } from '../../../theme/shared/animations';

const EmailSignUpWrapper = styled.div`
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
  overflow: visible;
`;

const StyledEmailInput = styled(Input)`
  overflow: visible;

  ${springScaleAnimation(true, 1.04, 1)}

  input {
    background-color: ${({ theme }) => theme.color('grey_5')};
    border-color: transparent;
    transition: background-color 0.2s ease;
    border: 1px solid ${({ theme }) => theme.color('grey')};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.color('grey_4_hover')};
      border-color: transparent;
      border: 1px solid ${({ theme }) => theme.color('grey')};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-shrink: 0;
  }
`;

const StyledEmailSignUpButton = styled(Button)`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  border-radius: 0.5rem;

  ${springScaleAnimation(true, 1.04, 1)}

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    margin: 0;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color('white')};
    color: ${({ theme }) => theme.color('black')};
  }
`;

const EmailSignUp = ({ onSubmit, errorMsg, ...rest }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <EmailSignUpWrapper>
      <LabelWrapper>
        <Text weight="bold" color="white" size="s">
          Subscribe to our newsletter
        </Text>
      </LabelWrapper>
      <form onSubmit={handleSubmit}>
        <FormWrapper error={!!errorMsg}>
          <InputWrapper>
            <StyledEmailInput
              name="email"
              type="email"
              id="email-signup"
              label="Email address"
              showLabel={false}
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              errorMsg={errorMsg}
              optional
              {...rest}
            />
          </InputWrapper>
          <ButtonWrapper>
            <StyledEmailSignUpButton type="submit" color="white" disabled={!!errorMsg}>
              Sign up
            </StyledEmailSignUpButton>
          </ButtonWrapper>
        </FormWrapper>
      </form>
    </EmailSignUpWrapper>
  );
};

EmailSignUp.propTypes = {
  /** Function to handle form submission, receives email as parameter */
  onSubmit: PropTypes.func,
  /** Error message to display on the input field */
  errorMsg: PropTypes.string
};

export default EmailSignUp;
