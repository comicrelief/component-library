/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import TextInput from './_TextInput';
import CheckAnswer from './_CheckAnswer';
import NoMessage from './_NoMessage';
import associatedFields from './_HelperFunctions';
import { defaultCopyTop, defaultCopyBottom } from './_DefaultCopy';
import {
  CopyWrapper, Head, FormField, ShowHideInputWrapper
} from './MarketingPreferencesDS.style';

import {
  setInitialValues, buildValidationSchema
} from './_MarketingPrefsConfig';

const MarketingPreferencesDS = ({
  copyTop,
  copyBottom,
  handleInputChange,
  handleTouchedReset,
  formValues,
  validation,
  setFieldValue,
  inputFieldOverrides,
  validateField
}) => {
  const { errors, validationOptions, touched } = validation;

  // For brevity
  const emailChoice = formValues.mp_permissionEmail[0];
  const smsChoice = formValues.mp_permissionSMS[0];
  const phoneChoice = formValues.mp_permissionPhone[0];
  const postChoice = formValues.mp_permissionPost[0];

  // If the field is not required for each No/Yes choice, hide it
  const hideEmailInput = (validationOptions.mp_permissionEmail.yes === false && emailChoice === 'yes')
  || (validationOptions.mp_permissionEmail.no === false && emailChoice === 'no');

  const hideSMSInput = (validationOptions.mp_permissionSMS.yes === false && smsChoice === 'yes')
  || (validationOptions.mp_permissionSMS.no === false && smsChoice === 'no');

  const hidePhoneInput = (validationOptions.mp_permissionPhone.yes === false && phoneChoice === 'yes')
  || (validationOptions.mp_permissionPhone.no === false && phoneChoice === 'no');

  const hidePostInput = (validationOptions.mp_permissionPost.yes === false && postChoice === 'yes')
  || (validationOptions.mp_permissionPost.no === false && postChoice === 'no');

  // Required to track multiple errors to determine whether to show/hide the fieldset
  const isAddressErroring = errors.mp_address1 || errors.mp_address2
  || errors.mp_address3 || errors.mp_town || errors.mp_country || errors.mp_postcode;

  // A lightweight workaround for useEffect lack of deep comparison w/objects
  const jsonInputFieldOverrides = JSON.stringify(inputFieldOverrides);

  useEffect(() => {
    // Iterate over the new props and set the fields accordingly
    if (inputFieldOverrides) {
      Object.keys(inputFieldOverrides).map(key => setFieldValue(key, inputFieldOverrides[key]));
    }
  }, [jsonInputFieldOverrides, inputFieldOverrides, setFieldValue]);

  async function resetFields(fieldName) {
    await setFieldValue(fieldName, '')
      .then(() => { validateField(fieldName); });
    handleTouchedReset(fieldName, false);
  }

  /* Uses Formik's 'setFieldValue' function passed as prop to allow us to
   * override the native checkbox functionality to allow Yes/No/None interaction */
  async function handleCheckboxChange(e, options) {
    const thisName = e.target.name;
    const thisVal = e.target.value;
    const currVal = formValues[thisName][0]; // As Formik stores grouped checkbox values as arrays
    const newVal = thisVal !== currVal ? [thisVal] : []; // Toggle the value

    /* If the click represents either a 'none selected' or a 'not required' option (set in config),
    reset the value and 'touched' state in Formik for all fields associated with this checkbox, and revalidate 'em */
    const reValidate = !options[newVal];

    if (reValidate) {
      const theseFields = associatedFields[thisName];
      theseFields.forEach(fieldName => {
        resetFields(fieldName);
      });
    }

    // Update Formik with the value of the checkbox
    setFieldValue(thisName, newVal);
  }

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
          <CheckAnswer name="mp_permissionEmail" onChange={e => handleCheckboxChange(e, validationOptions.mp_permissionEmail)} />
        </Head>

        <MaybeDisabled disabled={hideEmailInput}>
          <ShowHideInputWrapper show={emailChoice !== undefined || errors.mp_email}>
            {emailChoice === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_email && touched.mp_email ? errors.mp_email : ''}
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
            onChange={e => handleCheckboxChange(e, validationOptions.mp_permissionSMS)}

          />
        </Head>
        <MaybeDisabled disabled={hideSMSInput}>
          <ShowHideInputWrapper show={smsChoice !== undefined || errors.mp_mobile}>
            {smsChoice === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_mobile && touched.mp_mobile ? errors.mp_mobile : ''}
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
            onChange={e => handleCheckboxChange(e, validationOptions.mp_permissionPhone)}

          />
        </Head>
        <MaybeDisabled disabled={hidePhoneInput}>
          <ShowHideInputWrapper show={phoneChoice !== undefined || errors.mp_phone}>
            {phoneChoice === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_phone && touched.mp_phone ? errors.mp_phone : ''}
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
            onChange={e => handleCheckboxChange(e, validationOptions.mp_permissionPost)}

          />
        </Head>
        <MaybeDisabled disabled={hidePostInput}>
          <ShowHideInputWrapper show={postChoice !== undefined || isAddressErroring}>
            {postChoice === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_address1 && touched.mp_address1 ? errors.mp_address1 : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_address2 && touched.mp_address2 ? errors.mp_address2 : ''}
              isRequired={false}
            />
            <TextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_address3 && touched.mp_address3 ? errors.mp_address3 : ''}
              isRequired={false}
            />
            <TextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_town && touched.mp_town ? errors.mp_town : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              handleInputChange={handleInputChange}
              isRequired
              errorMessage={errors.mp_postcode && touched.mp_postcode ? errors.mp_postcode : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_country && touched.mp_country ? errors.mp_country : ''}
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

MarketingPreferencesDS.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  handleInputChange: PropTypes.func.isRequired,
  handleTouchedReset: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  formValues: PropTypes.objectOf(PropTypes.shape).isRequired,
  validation: PropTypes.objectOf(PropTypes.shape).isRequired,
  validateField: PropTypes.func.isRequired,
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

MarketingPreferencesDS.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom,
  inputFieldOverrides: null
};

export { MarketingPreferencesDS, setInitialValues, buildValidationSchema };
