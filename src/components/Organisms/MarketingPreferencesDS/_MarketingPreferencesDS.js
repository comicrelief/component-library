/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useWatch, useFormContext } from 'react-hook-form';
import _ from 'lodash';
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
  control,
  copyTop,
  copyBottom,
  mpValidationOptions,
  id
}) => {
  const { errors = {} } = useFormContext() || {};

  // For brevity
  const emailChoice = useWatch({ control, name: 'mp_permissionEmail', defaultValue: [] });
  const postChoice = useWatch({ control, name: 'mp_permissionPost', defaultValue: [] });
  const phoneChoice = useWatch({ control, name: 'mp_permissionPhone', defaultValue: [] });
  const smsChoice = useWatch({ control, name: 'mp_permissionSMS', defaultValue: [] });

  const {
    mp_permissionEmail, mp_permissionSMS, mp_permissionPhone, mp_permissionPost
  } = mpValidationOptions;

  // If the field is not required for each No/Yes choice, remove it from the DOM entirely
  const disableEmailInput = (mp_permissionEmail.yes === false && emailChoice.includes('yes'))
  || (mp_permissionEmail.no === false && emailChoice.includes('no'));

  const disableSMSInput = (mp_permissionSMS.yes === false && smsChoice.includes('yes'))
  || (mp_permissionSMS.no === false && smsChoice.includes('no'));

  const disablePhoneInput = (mp_permissionPhone.yes === false && phoneChoice.includes('yes'))
  || (mp_permissionPhone.no === false && phoneChoice.includes('no'));

  const disablePostInput = (mp_permissionPost.yes === false && postChoice.includes('yes'))
  || (mp_permissionPost.no === false && postChoice.includes('no'));

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
  const showEmailField = !mp_permissionEmail.hideInput && (emailChoice.length || errors.mp_email);
  const showSMSField = !mp_permissionSMS.hideInput && (smsChoice.length || errors.mp_mobile);
  const showPhoneField = !mp_permissionPhone.hideInput && (phoneChoice.length || errors.mp_phone);
  const showPostFields = !mp_permissionPost.hideInput && (postChoice.length || isAddressErroring());

  const customId = id ? `marketing-preferences--${id}` : 'marketing-preferences';

  return (
    <div id={customId}>
      {copyTop && <TopCopyWrapper>{copyTop}</TopCopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!mp_permissionEmail.disableOption && (
      <FormField className="field-email">
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer
            mpValidationOptions={mpValidationOptions}
            name="mp_permissionEmail"
            id="mp_permissionEmail"
            userSelection={emailChoice[0]}
            {...register("mp_permissionEmail")}
          />
        </Head>

        <MaybeDisabled disabled={disableEmailInput}>
          {/* DEBUG */}
          <ShowHideInputWrapper show={showEmailField}>
            {emailChoice[0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              // Dynamically update the field attr based on config for current choice
              optional={!mp_permissionEmail[emailChoice[0]]}
              type="email"
              id="mp_email"
              {...register("mp_email")}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!mp_permissionSMS.disableOption && (
      <FormField className="field-sms">
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name="mp_permissionSMS"
            id="mp_permissionSMS"
            mpValidationOptions={mpValidationOptions}
            userSelection={smsChoice[0]}
          />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <ShowHideInputWrapper show={showSMSField}>
            {smsChoice[0] === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              optional={!mp_permissionSMS[smsChoice[0]]}
              id="mp_mobile"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!mp_permissionPhone.disableOption && (
      <FormField className="field-phone">
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name="mp_permissionPhone"
            mpValidationOptions={mpValidationOptions}
            id="mp_permissionPhone"
            userSelection={phoneChoice[0]}
          />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <ShowHideInputWrapper show={showPhoneField}>
            {phoneChoice[0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              optional={!mp_permissionPhone[phoneChoice[0]]}
              id="mp_phone"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!mp_permissionPost.disableOption && (
      <FormField className="field-post">
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name="mp_permissionPost"
            mpValidationOptions={mpValidationOptions}
            id="mp_permissionPost"
            userSelection={postChoice[0]}
          />
        </Head>
        <MaybeDisabled disabled={disablePostInput}>
          <ShowHideInputWrapper show={showPostFields}>
            {postChoice[0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              optional={!mp_permissionPost[postChoice[0]]}
              id="mp_address1"
            />
            <TextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              optional
              id="mp_address2"

            />
            <TextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              optional
              id="mp_address3"
            />
            <TextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              optional={!mp_permissionPost[postChoice[0]]}
              id="mp_town"
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              optional={!mp_permissionPost[postChoice[0]]}
              id="mp_postcode"
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              optional={!mp_permissionPost[postChoice[0]]}
              id="mp_country"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {copyBottom && <BottomCopyWrapper>{copyBottom}</BottomCopyWrapper>}
    </div>
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
  /* These options are created in _MarketingPrefsConfig.js, passed to react-hook-form
  in the parent to set-up the validation, but also required here for additional functionality */
  mpValidationOptions: PropTypes.objectOf(PropTypes.shape).isRequired,
  id: PropTypes.string,
  control: PropTypes.func.isRequired
};

MarketingPreferencesDS.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom,
  id: null
};

export {
  MarketingPreferencesDS, setInitialValues, buildValidationSchema
};
