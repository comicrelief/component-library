import React from 'react';
import PropTypes from 'prop-types';

import {
  FormWrapper,
  Form,
  OuterFieldset,
  PrimaryTitleText,
  FormFieldset,
  NameWrapper,
  InputField,
  BodyCopyWrapper,
  PrivacyCopyWrapper,
  SuccessCopyWrapper,
  ButtonWrapper
} from '../EmailBanner.style';
import TextInput from '../../shared/emailSignup/TextInput';
import ButtonWithStates from '../../../Atoms/ButtonWithStates/ButtonWithStates';
import ErrorText from '../../../Atoms/ErrorText/ErrorText';
import Confetti from '../../../Atoms/Confetti/Confetti';
import RichText from '../../../Atoms/RichText/RichText';
import { ESU_FIELDS } from '../../shared/emailSignup/emailSignupConfig';

const EmailForm = ({
  title,
  bodyCopy,
  privacyCopy,
  successCopy,
  formContext,
  onSubmit,
  ctaText = 'Sign up',
  orientation = 'right',
  hasTopImage = false,
  showTitleSection = false,
  emailWidgetIsTextOnly = false
}) => {
  const {
    formState: {
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      errors,
      handleSubmit
    }
  } = formContext;

  const shouldShowTitleInForm = (title || bodyCopy) && (
    !emailWidgetIsTextOnly || (emailWidgetIsTextOnly && !showTitleSection)
  );

  return (
    <FormWrapper
      orientation={orientation}
      showTitleSection={showTitleSection}
    >
      {isSubmitSuccessful && <Confetti trigger={isSubmitSuccessful} />}

      <Form
        orientation={orientation}
        hasTopImage={hasTopImage}
        showTitleSection={showTitleSection}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        noValidate
      >
        <OuterFieldset>
          {shouldShowTitleInForm && (
            <PrimaryTitleText tag="span" color="black">
              {title}
            </PrimaryTitleText>
          )}

          {shouldShowTitleInForm && bodyCopy && (
            <BodyCopyWrapper>
              {typeof bodyCopy === 'string' ? (
                <RichText markup={bodyCopy} />
              ) : (
                bodyCopy
              )}
            </BodyCopyWrapper>
          )}

          {isSubmitSuccessful ? (
            <SuccessCopyWrapper>
              {typeof successCopy === 'string' ? (
                <RichText markup={successCopy} />
              ) : (
                successCopy
              )}
            </SuccessCopyWrapper>
          ) : (
            <>
              <FormFieldset>
                <NameWrapper>
                  <InputField $isNameField>
                    <TextInput
                      fieldName={ESU_FIELDS.FIRST_NAME}
                      id="first-name"
                      type="text"
                      label="First name"
                      placeholder="Enter your first name"
                      formContext={formContext}
                    />
                  </InputField>
                  <InputField $isNameField>
                    <TextInput
                      fieldName={ESU_FIELDS.LAST_NAME}
                      id="last-name"
                      type="text"
                      label="Last name"
                      placeholder="Enter your last name"
                      formContext={formContext}
                    />
                  </InputField>
                </NameWrapper>
                <InputField>
                  <TextInput
                    fieldName={ESU_FIELDS.EMAIL}
                    id="email"
                    type="email"
                    label="Email address"
                    placeholder="example@youremail.com"
                    formContext={formContext}
                  />
                </InputField>
              </FormFieldset>

              {isSubmitted && !isSubmitSuccessful && errors.formError && (
                <ErrorText size="error">{errors.formError.message}</ErrorText>
              )}

              <ButtonWrapper>
                <ButtonWithStates
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  loadingText="Submitting..."
                  data-test="subscribe-button"
                >
                  {ctaText}
                </ButtonWithStates>
              </ButtonWrapper>
            </>
          )}

          {privacyCopy && (
            <PrivacyCopyWrapper>
              {typeof privacyCopy === 'string' ? (
                <RichText markup={privacyCopy} />
              ) : (
                privacyCopy
              )}
            </PrivacyCopyWrapper>
          )}
        </OuterFieldset>
      </Form>
    </FormWrapper>
  );
};

EmailForm.propTypes = {
  title: PropTypes.string,
  bodyCopy: PropTypes.node,
  privacyCopy: PropTypes.node,
  successCopy: PropTypes.node,
  ctaText: PropTypes.string,
  orientation: PropTypes.oneOf(['left', 'right']),
  hasTopImage: PropTypes.bool,
  showTitleSection: PropTypes.bool,
  emailWidgetIsTextOnly: PropTypes.bool,
  formContext: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func
};

export default EmailForm;
