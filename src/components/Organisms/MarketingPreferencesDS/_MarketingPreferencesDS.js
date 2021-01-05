/* eslint-disable max-len */
import React from 'react';
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
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput,
  copyTop,
  copyBottom,
  handleInputChange,
  handleCheckChange,
  handleTouchedReset,
  formValues,
  validation
}) => {
  /** Uses Formik's 'setFieldValue' function (passed down as 'handleCheckChange' prop)
    *  to allow us to override the native checkbox functionality to allow yes/no/none interaction
    */
  function handleCheckboxChange(e) {
    const thisName = e.target.name;
    const thisVal = e.target.value;
    const currVal = formValues[thisName][0]; // As Formik stores grouped checkbox vals as arrays
    const newVal = thisVal !== currVal ? [thisVal] : []; // Toggle the value
    handleCheckChange(thisName, newVal); // Update Formik with the value

    /* If a 'not seleted' choice, reset the value and 'touched'
    state in Formik for all fields associated with this checkbox */
    if (newVal.length === 0) {
      const theseFields = associatedFields[thisName];
      theseFields.forEach(fieldName => {
        handleCheckChange(fieldName, '');
        handleTouchedReset(fieldName, false);
      });
    }
  }
  const {
    // touched,
    errors,
    options
  } = validation;

  console.log('errors', errors);

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}

      {/* Render Email checkboxes and input if not removed in config */}
      {!options.mp_permissionEmail.disableOption && (
      <FormField className="field-email" userSelection={formValues.mp_permissionEmail}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer name="mp_permissionEmail" onChange={e => handleCheckboxChange(e)} />
        </Head>

        <MaybeDisabled disabled={disableEmailInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionEmail[0] !== undefined}>
            {formValues.mp_permissionEmail[0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              handleInputChange={handleInputChange}
              isRequired={formValues.mp_permissionEmail[0] !== undefined}// TO-DO:reflect prop optns
              errorMessage={errors.mp_email ? errors.mp_email : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render SMS checkboxes and inputs if not removed in config */}
      {!options.mp_permissionSMS.disableOption && (
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
        <MaybeDisabled disabled={disableSMSInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionSMS[0] !== undefined}>
            {formValues.mp_permissionSMS[0] === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              handleInputChange={handleInputChange}
              isRequired={formValues.mp_permissionSMS[0] !== undefined}
              errorMessage={errors.mp_mobile ? errors.mp_mobile : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Phone checkboxes and input if not removed in config */}
      {!options.mp_permissionPhone.disableOption && (
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
        <MaybeDisabled disabled={disablePhoneInput}>
          <ShowHideInputWrapper show={formValues.mp_permissionPhone[0] !== undefined}>
            {formValues.mp_permissionPhone[0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              handleInputChange={handleInputChange}
              isRequired={formValues.mp_permissionPhone[0] !== undefined}
              errorMessage={errors.mp_phone ? errors.mp_phone : ''}
            />
          </ShowHideInputWrapper>
        </MaybeDisabled>
      </FormField>
      )}

      {/* Render Post checkboxes and inputs if not removed in config */}
      {!options.mp_permissionPost.disableOption && (
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
        <MaybeDisabled disabled={disablePostInputs}>
          <ShowHideInputWrapper show={formValues.mp_permissionPost[0] !== undefined}>
            {formValues.mp_permissionPost[0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              handleInputChange={handleInputChange}
              isRequired={formValues.mp_permissionPost[0] !== undefined}
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
              isRequired={formValues.mp_permissionPost[0] !== undefined}
              errorMessage={errors.mp_town ? errors.mp_town : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              handleInputChange={handleInputChange}
              isRequired={formValues.mp_permissionPost[0] !== undefined}
              errorMessage={errors.mp_postcode ? errors.mp_postcode : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired={formValues.mp_permissionPost[0] !== undefined}
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
  disableEmailInput: PropTypes.bool,
  disablePostInputs: PropTypes.bool,
  disablePhoneInput: PropTypes.bool,
  disableSMSInput: PropTypes.bool,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  handleTouchedReset: PropTypes.func.isRequired,
  formValues: PropTypes.objectOf(PropTypes.shape).isRequired,
  validation: PropTypes.objectOf(PropTypes.shape).isRequired
};

MarketingPreferencesDS.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom,
  disableEmailInput: false,
  disablePostInputs: false,
  disablePhoneInput: false,
  disableSMSInput: false
};

export default MarketingPreferencesDS;
