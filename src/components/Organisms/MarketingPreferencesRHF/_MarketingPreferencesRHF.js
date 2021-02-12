/* eslint-disable camelcase */ // sorry but wtf does it matter
import React from 'react';
import PropTypes from 'prop-types';
import { useWatch, useFormContext } from 'react-hook-form';
import Text from '../../Atoms/Text/Text';
import TextInput from './_TextInput';
import CheckAnswer from './_CheckAnswer';
import NoMessage from './_NoMessage';

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
  const { errors } = useFormContext();

  // For brevity
  const emailChoice = useWatch({ name: 'mp_permissionEmail', defaultValue: [] });
  const postChoice = useWatch({ name: 'mp_permissionPost', defaultValue: [] });
  const phoneChoice = useWatch({ name: 'mp_permissionPhone', defaultValue: [] });
  const smsChoice = useWatch({ name: 'mp_permissionSMS', defaultValue: [] });

  const {
    mp_permissionEmail, mp_permissionSMS, mp_permissionPhone, mp_permissionPost
  } = validationOptions;

  // If the field is not required for each No/Yes choice, hide it
  const hideEmailInput = (mp_permissionEmail.yes === false && emailChoice.includes('yes'))
  || (mp_permissionEmail.no === false && emailChoice.includes('no'));

  const hideSMSInput = (mp_permissionSMS.yes === false && smsChoice.includes('yes'))
  || (mp_permissionSMS.no === false && smsChoice.includes('no'));

  const hidePhoneInput = (mp_permissionPhone.yes === false && phoneChoice.includes('yes'))
  || (mp_permissionPhone.no === false && phoneChoice.includes('no'));

  const hidePostInput = (mp_permissionPost.yes === false && postChoice.includes('yes'))
  || (mp_permissionPost.no === false && postChoice.includes('no'));

  // Required to track multiple errors to determine whether to show/hide the fieldset
  const isAddressErroring = errors.mp_address1 || errors.mp_address2
  || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode;

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!mp_permissionEmail.disableOption && (
      <FormField className="field-email" userSelection={emailChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer validationOptions={validationOptions} name="mp_permissionEmail" />
        </Head>

        <MaybeDisabled disabled={hideEmailInput}>
          <ShowHideInputWrapper show={emailChoice.length || errors.mp_email}>
            {emailChoice === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              // To prevent validation issues ('required' fields not being filled), have it reflect the config
              isRequired={mp_permissionEmail[emailChoice]}
              type="email"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!mp_permissionSMS.disableOption && (
      <FormField className="field-sms" userSelection={smsChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name="mp_permissionSMS"
            validationOptions={validationOptions}
          />
        </Head>
        <MaybeDisabled disabled={hideSMSInput}>
          <ShowHideInputWrapper show={smsChoice.length || errors.mp_mobile}>
            {smsChoice === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              isRequired={mp_permissionSMS[smsChoice]}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!mp_permissionPhone.disableOption && (
      <FormField className="field-phone" userSelection={phoneChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name="mp_permissionPhone"
            validationOptions={validationOptions}
          />
        </Head>
        <MaybeDisabled disabled={hidePhoneInput}>
          <ShowHideInputWrapper show={phoneChoice.length || errors.mp_phone}>
            {phoneChoice === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              isRequired={mp_permissionPhone[phoneChoice]}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!mp_permissionPost.disableOption && (
      <FormField className="field-post" userSelection={postChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name="mp_permissionPost"
            validationOptions={validationOptions}
          />
        </Head>
        <MaybeDisabled disabled={hidePostInput}>
          <ShowHideInputWrapper show={postChoice.length || isAddressErroring}>
            {postChoice === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              isRequired={mp_permissionPost[postChoice]}
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
              isRequired={mp_permissionPost[postChoice]}
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              isRequired={mp_permissionPost[postChoice]}
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired={mp_permissionPost[postChoice]}
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
  validationOptions: PropTypes.objectOf(PropTypes.shape).isRequired,
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
