import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import {
  ESUWrapper,
  TopCopyWrapper,
  FormInner,
  PrivacyCopyWrapper,
  InputField,
  ButtonWrapper,
  Title,
  NameWrapper
} from './EmailSignUp.style';
import ButtonWithStates from '../../Atoms/ButtonWithStates/ButtonWithStates';

import Text from '../../Atoms/Text/Text';
import { buildEsuValidationSchema, ESU_FIELDS } from './_EmailSignUpConfig';
import ErrorText from '../../Atoms/ErrorText/ErrorText';
import Confetti from './_Confetti';

const EmailSignUp = ({
  title,
  topCopy,
  successCopy,
  privacyCopy,
  backgroundColor,
  ...rest
}) => {
  const formContext = useFormContext();
  const {
    formState: {
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      errors
    }
  } = formContext;

  return (
    <ESUWrapper backgroundColor={backgroundColor} {...rest}>
      <Title tag="h2" size="xxl" weight="400" family="Anton" uppercase>
        {title}
      </Title>
      {!isSubmitted ? (
        <TopCopyWrapper>
          <Text>{topCopy}</Text>
        </TopCopyWrapper>
      ) : (
        isSubmitSuccessful && (
          <>
            <Confetti trigger={isSubmitSuccessful} />
            <TopCopyWrapper>
              <Text>{successCopy}</Text>
            </TopCopyWrapper>
          </>
        )
      )}
      {!isSubmitSuccessful && (
        <FormInner>
          <NameWrapper>
            <InputField
              fieldName={ESU_FIELDS.FIRST_NAME}
              id="first-name"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              formContext={formContext}
            />
            <InputField
              fieldName={ESU_FIELDS.LAST_NAME}
              id="last-name"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              formContext={formContext}
            />
          </NameWrapper>
          <InputField
            fieldName={ESU_FIELDS.EMAIL}
            id="email"
            type="email"
            label="Email Address"
            placeholder="example@youremail.com"
            formContext={formContext}
          />
          <ButtonWrapper>
            <ButtonWithStates
              type="submit"
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
              loadingText="Submitting..."
              data-test="subscribe-button"
            >
              <Text>Subscribe</Text>
            </ButtonWithStates>
          </ButtonWrapper>
        </FormInner>
      )}
      {isSubmitted && !isSubmitSuccessful && (
        <>
          {Object.values(errors).map(error => (
            <ErrorText>{error.message}</ErrorText>
          ))}
        </>
      )}

      <PrivacyCopyWrapper>
        <Text>{privacyCopy}</Text>
      </PrivacyCopyWrapper>
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  title: PropTypes.string.isRequired,
  topCopy: PropTypes.node.isRequired,
  successCopy: PropTypes.node.isRequired,
  privacyCopy: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

EmailSignUp.defaultProps = {
  backgroundColor: 'deep_violet_dark'
};

export { EmailSignUp, buildEsuValidationSchema, ESU_FIELDS };
