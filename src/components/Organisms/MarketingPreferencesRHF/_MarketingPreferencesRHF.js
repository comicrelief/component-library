/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWatch, useFormContext } from 'react-hook-form';
import Text from '../../Atoms/Text/Text';
import TextInput from './_TextInput';
import CheckAnswer from './_CheckAnswer';
import NoMessage from './_NoMessage';
import associatedFields from './_HelperFunctions';

import { defaultCopyTop, defaultCopyBottom } from './_DefaultCopy';
import {
  CopyWrapper, Head, FormField, ShowHideInputWrapper
} from './MarketingPreferencesRHF.style';

import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

const MarketingPreferencesRHF = ({
  copyTop,
  copyBottom,
  // inputFieldOverrides,
  validationOptions
}) => {
  const { errors, register } = useFormContext();

  // For brevity
  const emailChoice = useWatch({ name: 'mp_permissionEmail', defaultValue: [] });
  const postChoice = useWatch({ name: 'mp_permissionPost', defaultValue: [] });
  const phoneChoice = useWatch({ name: 'mp_permissionPhone', defaultValue: [] });
  const smsChoice = useWatch({ name: 'mp_permissionSMS', defaultValue: [] });

  // If the field is not required for each No/Yes choice, hide it
  const hideEmailInput = (validationOptions.mp_permissionEmail.yes === false && emailChoice.includes('yes'))
  || (validationOptions.mp_permissionEmail.no === false && emailChoice.includes('no'));

  const hideSMSInput = (validationOptions.mp_permissionSMS.yes === false && smsChoice.includes('yes'))
  || (validationOptions.mp_permissionSMS.no === false && postChoice.includes('no'));

  const hidePhoneInput = (validationOptions.mp_permissionPhone.yes === false && phoneChoice.includes('yes'))
  || (validationOptions.mp_permissionPhone.no === false && phoneChoice.includes('no'));

  const hidePostInput = (validationOptions.mp_permissionPost.yes === false && postChoice.includes('yes'))
  || (validationOptions.mp_permissionPost.no === false && postChoice.includes('no'));

  // Required to track multiple errors to determine whether to show/hide the fieldset
  const isAddressErroring = errors.mp_address1 || errors.mp_address2
  || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode;

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!validationOptions.mp_permissionEmail.disableOption && (
      <FormField className="field-email" userSelection={emailChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer name="mp_permissionEmail" />
        </Head>

        <MaybeDisabled disabled={hideEmailInput}>
          <ShowHideInputWrapper show={emailChoice.length || errors.mp_email}>
            {emailChoice === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              isRequired
              type="email"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!validationOptions.mp_permissionSMS.disableOption && (
      <FormField className="field-sms" userSelection={smsChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name="mp_permissionSMS"
          />
        </Head>
        <MaybeDisabled disabled={hideSMSInput}>
          <ShowHideInputWrapper show={smsChoice.length || errors.mp_mobile}>
            {smsChoice === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              isRequired
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!validationOptions.mp_permissionPhone.disableOption && (
      <FormField className="field-phone" userSelection={phoneChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name="mp_permissionPhone"
          />
        </Head>
        <MaybeDisabled disabled={hidePhoneInput}>
          <ShowHideInputWrapper show={phoneChoice.length || errors.mp_phone}>
            {phoneChoice === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              isRequired
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!validationOptions.mp_permissionPost.disableOption && (
      <FormField className="field-post" userSelection={postChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name="mp_permissionPost"
          />
        </Head>
        <MaybeDisabled disabled={hidePostInput}>
          <ShowHideInputWrapper show={postChoice.length || isAddressErroring}>
            {postChoice === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              isRequired
            />
            <TextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              isRequired={false}
            />
            <TextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              isRequired={false}
            />
            <TextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              isRequired
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              isRequired
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {copyBottom && <CopyWrapper>{copyBottom}</CopyWrapper>}
    </>
  );
};

// removes from DOM completely
const MaybeDisabled = ({ children, disabled }) => {
  if (disabled) return null;
  return children;
};

MarketingPreferencesRHF.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  // handleInputChange: PropTypes.func.isRequired,
  // handleTouchedReset: PropTypes.func.isRequired,
  // setFieldValue: PropTypes.func.isRequired,
  // formValues: PropTypes.objectOf(PropTypes.shape).isRequired,
  validationOptions: PropTypes.objectOf(PropTypes.shape).isRequired,
  // validateField: PropTypes.func.isRequired,
  inputFieldOverrides: PropTypes.shape({
    mp_email: PropTypes.string,
    mp_mobile: PropTypes.string,
    mp_phone: PropTypes.string,
    mp_address1: PropTypes.string,
    mp_address2: PropTypes.string,
    mp_address3: PropTypes.string,
    mp_town: PropTypes.string,
    mp_country: PropTypes.string,
    mp_postcode: PropTypes.string
  })
};

MarketingPreferencesRHF.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom,
  inputFieldOverrides: null
};

export { MarketingPreferencesRHF, setInitialValues, buildValidationSchema };
