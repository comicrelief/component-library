import React from 'react';
import PropTypes from 'prop-types';
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
  backgroundColour,
  buttonColour,
  formContext,
  ...rest
}) => {
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
    <ESUWrapper backgroundColour={backgroundColour} {...rest}>
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
          <ButtonWrapper buttonColour={buttonColour}>
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
          {/*
            Field errors will prevent submission,
            so theoretically this should just be a single error set in the submission callback
            with with RHF's `setError` method, but will neatly display multiple errors.
          */}
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
  backgroundColour: PropTypes.string,
  buttonColour: PropTypes.string,
  formContext: PropTypes.shape().isRequired
};

EmailSignUp.defaultProps = {
  backgroundColour: 'deep_violet_dark',
  buttonColour: 'blue_light'
};

export { EmailSignUp, buildEsuValidationSchema, ESU_FIELDS };
