import React from 'react';
import PropTypes from 'prop-types';
import { useWatch } from 'react-hook-form';
import _ from 'lodash';
import OptInCheckbox from './_OptInCheckbox';

import { defaultCopyTop, defaultCopyBottom } from './_DefaultCopy';
import {
  TopCopyWrapper, BottomCopyWrapper, CheckboxWrapper, FormField,
  ShowHideInputWrapper, ExtraInfo, OuterWrapper, MPTextInput
} from './MarketingPreferencesDS.style';

import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

const MarketingPreferencesDS = ({
  copyTop = defaultCopyTop,
  copyBottom = defaultCopyBottom,
  mpValidationOptions,
  id = null,
  formContext = null,
  ...rest
}) => {
  const { formState: { errors }, control } = formContext;

  // For brevity
  const emailChoice = useWatch({ control, name: 'mp_permissionEmail', defaultValue: null });
  const postChoice = useWatch({ control, name: 'mp_permissionPost', defaultValue: null });
  const phoneChoice = useWatch({ control, name: 'mp_permissionPhone', defaultValue: null });
  const smsChoice = useWatch({ control, name: 'mp_permissionSMS', defaultValue: null });

  const {
    // eslint-disable-next-line camelcase
    mp_permissionEmail, mp_permissionSMS, mp_permissionPhone, mp_permissionPost
  } = mpValidationOptions;

  // If the field is not required for each No/Yes choice, remove it from the DOM entirely
  const disableEmailInput = (mp_permissionEmail.yes === false && emailChoice.includes('yes'));

  const disableSMSInput = (mp_permissionSMS.yes === false && smsChoice.includes('yes'));

  const disablePhoneInput = (mp_permissionPhone.yes === false && phoneChoice.includes('yes'));

  const disablePostInput = (mp_permissionPost.yes === false && postChoice.includes('yes'));

  // Required to track multiple errors to determine whether to show/hide the fieldset
  const isAddressErroring = () => {
    if (_.isEmpty(errors)) {
      return null;
    }
    return errors.mp_address1 || errors.mp_address2
    || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode;
  };
  /* Only show the field if config hasn't hidden it (to pass in parent values)
    or if a choice has been made */
  const showEmailField = !mp_permissionEmail.hideInput && (emailChoice || errors.mp_email);
  const showSMSField = !mp_permissionSMS.hideInput && (smsChoice || errors.mp_mobile);
  const showPhoneField = !mp_permissionPhone.hideInput && (phoneChoice || errors.mp_phone);
  const showPostFields = !mp_permissionPost.hideInput && (postChoice || isAddressErroring());

  const customId = id ? `marketing-preferences--${id}` : 'marketing-preferences';

  // Check for field-specific errors
  const hasEmailError = Boolean(errors.mp_permissionEmail || errors.mp_email);
  const hasPostError = Boolean(errors.mp_permissionPost || errors.mp_address1 || errors.mp_address2
  || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode);
  const hasSMSError = Boolean(errors.mp_permissionSMS || errors.mp_mobile);
  const hasPhoneError = Boolean(errors.mp_permissionPhone || errors.mp_phone);

  return (
    <OuterWrapper id={customId} {...rest}>
      {copyTop && <TopCopyWrapper>{copyTop}</TopCopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!mp_permissionEmail.disableOption && (
      <FormField
        className={`field-email ${emailChoice && 'selected'}`}
        isError={hasEmailError}
      >
        <CheckboxWrapper>
          <OptInCheckbox
            mpValidationOptions={mpValidationOptions}
            name="mp_permissionEmail"
            id="mp_permissionEmail"
            userSelection={emailChoice}
            formContext={formContext}
          />
        </CheckboxWrapper>

        <MaybeDisabled disabled={disableEmailInput}>
          <ShowHideInputWrapper show={showEmailField}>
            <ExtraInfo>
              Please confirm the email address we will use to
              <b> email </b>
              you:
            </ExtraInfo>
            <MPTextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              // Dynamically update the field attr based on config for current choice
              optional={!mp_permissionEmail[emailChoice]}
              type="email"
              id="mp_email"
              formContext={formContext}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!mp_permissionPost.disableOption && (
      <FormField
        className={`field-post ${postChoice && 'selected'}`}
        isError={hasPostError}
      >
        <CheckboxWrapper>
          <OptInCheckbox
            name="mp_permissionPost"
            mpValidationOptions={mpValidationOptions}
            id="mp_permissionPost"
            userSelection={postChoice}
            formContext={formContext}
          />
        </CheckboxWrapper>
        <MaybeDisabled disabled={disablePostInput}>
          <ShowHideInputWrapper show={showPostFields}>
            <ExtraInfo>
              Please confirm the address we will use to
              <b> post </b>
              to you:
            </ExtraInfo>
            <MPTextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              optional={!mp_permissionPost[postChoice]}
              id="mp_address1"
              formContext={formContext}
            />
            <MPTextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              optional
              id="mp_address2"
              formContext={formContext}
            />
            <MPTextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              optional
              id="mp_address3"
              formContext={formContext}
            />
            <MPTextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              optional={!mp_permissionPost[postChoice]}
              id="mp_town"
              formContext={formContext}
            />
            <MPTextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              optional={!mp_permissionPost[postChoice]}
              id="mp_postcode"
              formContext={formContext}
            />
            <MPTextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              optional={!mp_permissionPost[postChoice]}
              id="mp_country"
              formContext={formContext}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!mp_permissionSMS.disableOption && (
      <FormField
        className={`field-sms ${smsChoice && 'selected'}`}
        isError={hasSMSError}
      >
        <CheckboxWrapper>
          <OptInCheckbox
            name="mp_permissionSMS"
            id="mp_permissionSMS"
            mpValidationOptions={mpValidationOptions}
            userSelection={smsChoice}
            formContext={formContext}
          />
        </CheckboxWrapper>
        <MaybeDisabled disabled={disableSMSInput}>
          <ShowHideInputWrapper show={showSMSField}>
            <ExtraInfo>
              Please confirm the mobile number we will use to
              <b> text </b>
              you on:
            </ExtraInfo>
            <MPTextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              optional={!mp_permissionSMS[smsChoice]}
              id="mp_mobile"
              formContext={formContext}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!mp_permissionPhone.disableOption && (
      <FormField
        className={`field-phone ${phoneChoice && 'selected'}`}
        isError={hasPhoneError}
      >
        <CheckboxWrapper>
          <OptInCheckbox
            name="mp_permissionPhone"
            mpValidationOptions={mpValidationOptions}
            id="mp_permissionPhone"
            userSelection={phoneChoice}
            formContext={formContext}
          />
        </CheckboxWrapper>
        <MaybeDisabled disabled={disablePhoneInput}>
          <ShowHideInputWrapper show={showPhoneField}>
            <ExtraInfo>
              Please confirm the telephone number we will use to
              <b> phone </b>
              you on:
            </ExtraInfo>
            <MPTextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              optional={!mp_permissionPhone[phoneChoice]}
              id="mp_phone"
              formContext={formContext}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {copyBottom && <BottomCopyWrapper>{copyBottom}</BottomCopyWrapper>}
    </OuterWrapper>
  );
};

// removes from DOM completely
const MaybeDisabled = ({ children = null, disabled = false }) => {
  if (disabled) return null;
  return children;
};

MarketingPreferencesDS.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  /* These options are created in _MarketingPrefsConfig.js, passed to react-hook-form
  in the parent to set-up the validation, but also required here for additional functionality */
  mpValidationOptions: PropTypes.objectOf(PropTypes.shape).isRequired,
  id: PropTypes.string,
  formContext: PropTypes.shape()
};

MaybeDisabled.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export {
  MarketingPreferencesDS, setInitialValues, buildValidationSchema
};
