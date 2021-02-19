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
  TopCopyWrapper, BottomCopyWrapper, Head, FormField, ShowHideInputWrapper
} from './MarketingPreferencesDS.style';

import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

const MarketingPreferencesDS = ({
  copyTop,
  copyBottom,
  validationOptions
}) => {
  const { errors } = useFormContext();

  // For brevity
  const emailChoice = useWatch({ name: 'mp_permissionEmail', defaultValue: [] });
  const postChoice = useWatch({ name: 'mp_permissionPost', defaultValue: [] });
  const phoneChoice = useWatch({ name: 'mp_permissionPhone', defaultValue: [] });
  const smsChoice = useWatch({ name: 'mp_permissionSMS', defaultValue: [] });
  const mpValidationOptions = validationOptions;

  const {
    mp_permissionEmail, mp_permissionSMS, mp_permissionPhone, mp_permissionPost
  } = mpValidationOptions;

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
      {copyTop && <TopCopyWrapper>{copyTop}</TopCopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!mp_permissionEmail.disableOption && (
      <FormField className="field-email" userSelection={emailChoice}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer validationOptions={mpValidationOptions} name="mp_permissionEmail" id="mp_permissionEmail" />
        </Head>

        <MaybeDisabled disabled={hideEmailInput}>
          <ShowHideInputWrapper show={emailChoice.length || errors.mp_email}>
            {emailChoice[0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              // Dynamically update the field attr based on config for current choice
              isRequired={mp_permissionEmail[emailChoice]}
              type="email"
              id="mp_email"
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
            id="mp_permissionSMS"
            validationOptions={mpValidationOptions}
          />
        </Head>
        <MaybeDisabled disabled={hideSMSInput}>
          <ShowHideInputWrapper show={smsChoice.length || errors.mp_mobile}>
            {smsChoice[0] === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              isRequired={mp_permissionSMS[smsChoice]}
              id="mp_mobile"
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
            validationOptions={mpValidationOptions}
            id="mp_permissionPhone"
          />
        </Head>
        <MaybeDisabled disabled={hidePhoneInput}>
          <ShowHideInputWrapper show={phoneChoice.length || errors.mp_phone}>
            {phoneChoice[0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              isRequired={mp_permissionPhone[phoneChoice]}
              id="mp_phone"
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
            validationOptions={mpValidationOptions}
            id="mp_permissionPost"
          />
        </Head>
        <MaybeDisabled disabled={hidePostInput}>
          <ShowHideInputWrapper show={postChoice.length || isAddressErroring}>
            {postChoice[0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              isRequired={mp_permissionPost[postChoice]}
              id="mp_address1"
            />
            <TextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              isRequired={false}
              id="mp_address2"

            />
            <TextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              isRequired={false}
              id="mp_address3"
            />
            <TextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              isRequired={mp_permissionPost[postChoice]}
              id="mp_town"
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              isRequired={mp_permissionPost[postChoice]}
              id="mp_postcode"
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired={mp_permissionPost[postChoice]}
              id="mp_country"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {copyBottom && <BottomCopyWrapper>{copyBottom}</BottomCopyWrapper>}
    </>
  );
};

// removes from DOM completely
const MaybeDisabled = ({ children, disabled }) => {
  if (disabled) return null;
  return children;
};

MarketingPreferencesDS.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  validationOptions: PropTypes.objectOf(PropTypes.shape).isRequired
};

MarketingPreferencesDS.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom
};

export {
  MarketingPreferencesDS, setInitialValues, buildValidationSchema
};
