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
import { validationSchema, FIELDS } from './_EmailSignUpConfig';
import ErrorText from '../../Atoms/ErrorText/ErrorText';

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
      isValid, isSubmitting, isSubmitted, isSubmitSuccessful
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
          <TopCopyWrapper>
            <Text>{successCopy}</Text>
          </TopCopyWrapper>
        )
      )}
      {!isSubmitSuccessful && (
        <FormInner>
          <NameWrapper>
            <InputField
              fieldName={FIELDS.FIRST_NAME}
              id="first-name"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              formContext={formContext}
            />
            <InputField
              fieldName={FIELDS.LAST_NAME}
              id="last-name"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              formContext={formContext}
            />
          </NameWrapper>
          <InputField
            fieldName={FIELDS.EMAIL}
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
        <ErrorText>
          Sorry, there was a problem submitting the form. Please try again.
        </ErrorText>
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

export { EmailSignUp, validationSchema, FIELDS };
