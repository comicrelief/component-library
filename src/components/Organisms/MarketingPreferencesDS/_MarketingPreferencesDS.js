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

const MarketingPreferencesDS = ({
  copyTop,
  copyBottom,
  handleInputChange,
  handleTouchedReset,
  formValues,
  validation,
  setFieldValue,
  inputFieldOverrides
}) => {
  const { errors, validationOptions } = validation;

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

  /* Uses Formik's 'setFieldValue' function passed as prop to allow us to
   * override the native checkbox functionality to allow Yes/No/None interaction */
  function handleCheckboxChange(e) {
    const thisName = e.target.name;
    const thisVal = e.target.value;
    const currVal = formValues[thisName][0]; // As Formik stores grouped checkbox values as arrays
    const newVal = thisVal !== currVal ? [thisVal] : []; // Toggle the value

    setFieldValue(thisName, newVal); // Update Formik with the value

    /* If a 'not seleted' choice, reset the value and 'touched'
    state in Formik for all fields associated with this checkbox */
    if (newVal.length === 0) {
      const theseFields = associatedFields[thisName];
      theseFields.forEach(fieldName => {
        setFieldValue(fieldName, '');
        handleTouchedReset(fieldName, false);
      });
    }
  }

  // Check the currently-ticked associated checkbox against the config to update the field's required attribute
  const emailFieldRequired = (validationOptions.mp_permissionEmail.yes && formValues.mp_permissionEmail[0] === 'yes')
  || (validationOptions.mp_permissionEmail.no && formValues.mp_permissionEmail[0] === 'no');

  const addressFieldRequired = (validationOptions.mp_permissionPost.yes && formValues.mp_permissionPost[0] === 'yes')
  || (validationOptions.mp_permissionPost.no && formValues.mp_permissionPost[0] === 'no');

  const mobileFieldRequired = (validationOptions.mp_permissionSMS.yes && formValues.mp_permissionSMS[0] === 'yes')
  || (validationOptions.mp_permissionSMS.no && formValues.mp_permissionSMS[0] === 'no');

  const phoneFieldRequired = (validationOptions.mp_permissionPhone.yes && formValues.mp_permissionPhone[0] === 'yes')
  || (validationOptions.mp_permissionPhone.no && formValues.mp_permissionPhone[0] === 'no');

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!validationOptions.mp_permissionEmail.disableOption && (
      <FormField className="field-email" userSelection={formValues.mp_permissionEmail}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer name="mp_permissionEmail" onChange={e => handleCheckboxChange(e)} />
        </Head>

        <MaybeDisabled disabled={validationOptions.mp_permissionEmail.hideInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionEmail[0] !== undefined || errors.mp_email}>
            {formValues.mp_permissionEmail[0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              handleInputChange={handleInputChange}
              isRequired={emailFieldRequired}
              errorMessage={errors.mp_email ? errors.mp_email : ''}
              type="email"
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!validationOptions.mp_permissionSMS.disableOption && (
      <FormField className="field-sms" userSelection={formValues.mp_permissionSMS}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name="mp_permissionSMS"
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={validationOptions.mp_permissionSMS.hideInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionSMS[0] !== undefined || errors.mp_mobile}>
            {formValues.mp_permissionSMS[0] === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              handleInputChange={handleInputChange}
              isRequired={mobileFieldRequired}
              errorMessage={errors.mp_mobile ? errors.mp_mobile : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!validationOptions.mp_permissionPhone.disableOption && (
      <FormField className="field-phone" userSelection={formValues.mp_permissionPhone}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name="mp_permissionPhone"
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={validationOptions.mp_permissionPhone.hideInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionPhone[0] !== undefined || errors.mp_phone}>
            {formValues.mp_permissionPhone[0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              handleInputChange={handleInputChange}
              isRequired={phoneFieldRequired}
              errorMessage={errors.mp_phone ? errors.mp_phone : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!validationOptions.mp_permissionPost.disableOption && (
      <FormField className="field-post" userSelection={formValues.mp_permissionPost}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name="mp_permissionPost"
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={validationOptions.mp_permissionPhone.hideInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionPost[0] !== undefined || isAddressErroring}>
            {formValues.mp_permissionPost[0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              handleInputChange={handleInputChange}
              isRequired={addressFieldRequired}
              errorMessage={errors.mp_address1 ? errors.mp_address1 : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_address2"
              label="Address Line 2"
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_address2 ? errors.mp_address2 : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_address3"
              label="Address Line 3"
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_address3 ? errors.mp_address3 : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_town"
              label="Town/City"
              handleInputChange={handleInputChange}
              isRequired={addressFieldRequired}
              errorMessage={errors.mp_town ? errors.mp_town : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              handleInputChange={handleInputChange}
              isRequired={addressFieldRequired}
              errorMessage={errors.mp_postcode ? errors.mp_postcode : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired={addressFieldRequired}
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_country ? errors.mp_country : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {copyBottom && <CopyWrapper>{copyBottom}</CopyWrapper>}
    </>
  );
};

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

export default MarketingPreferencesDS;
