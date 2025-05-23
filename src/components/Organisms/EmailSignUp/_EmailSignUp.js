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
import Confetti from '../../Atoms/Confetti/Confetti';

const EmailSignUp = ({
  title,
  topCopy,
  successCopy,
  privacyCopy,
  backgroundColour = 'deep_violet_dark',
  buttonColour = 'red',
  buttonText,
  containerPadding = true,
  formContext,
  columnLayout = false,
  textColour,
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

  const normalisedButtonText = buttonText || 'Subscribe';

  return (
    <ESUWrapper
      backgroundColour={backgroundColour}
      textColour={textColour}
      containerPadding={containerPadding}
      {...rest}
    >
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
          <NameWrapper columnLayout={columnLayout}>
            <InputField
              textColour={textColour}
              fieldName={ESU_FIELDS.FIRST_NAME}
              id="first-name"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              formContext={formContext}
            />
            <InputField
              textColour={textColour}
              fieldName={ESU_FIELDS.LAST_NAME}
              id="last-name"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              formContext={formContext}
            />
          </NameWrapper>
          <InputField
            textColour={textColour}
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
              <Text>{normalisedButtonText}</Text>
            </ButtonWithStates>
          </ButtonWrapper>
        </FormInner>
      )}
      {isSubmitted && !isSubmitSuccessful && (
        <>
          {/* This error can be set as part of the submit callback using RHF's `setError` function.
          e.g. setError('formError', { message: 'Some error message'}) */}
          {errors.formError !== undefined && (
            <ErrorText>{errors.formError.message}</ErrorText>
          )}
        </>
      )}

      <PrivacyCopyWrapper
        textColour={textColour}
      >
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
  buttonText: PropTypes.string,
  textColour: PropTypes.string,
  containerPadding: PropTypes.bool,
  formContext: PropTypes.shape().isRequired,
  columnLayout: PropTypes.bool
};

export { EmailSignUp, buildEsuValidationSchema, ESU_FIELDS };
