import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import TextInput from './_TextInput';
import CheckAnswer from './_CheckAnswer';
import NoMessage from './_NoMessage';
import associatedFields from './_HelperFunctions';

import { defaultCopyTop, defaultCopyBottom } from './_DefaultCopy';
import {
  CopyWrapper, Head, FormField, ShowHide
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

  // In the interest of brevity:
  const permissionEmail = 'mp_permissionEmail';
  const permissionPost = 'mp_permissionPost';
  const permissionSMS = 'mp_permissionSMS';
  const permissionPhone = 'mp_permissionPhone';
  const {
    // touched,
    errors
  } = validation;

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
      {/* Email field */}
      <FormField className="field-email" userSelection={formValues[permissionEmail]}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer name={permissionEmail} onChange={e => handleCheckboxChange(e)} />
        </Head>

        <MaybeDisabled disabled={disableEmailInput}>
          <ShowHide show={formValues[permissionEmail][0] !== undefined}>
            {formValues[permissionEmail][0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName="mp_email"
              label="Please enter your email address"
              handleInputChange={handleInputChange}
              isRequired={formValues[permissionEmail][0] !== undefined} // TO-DO: reflect prop optns
              errorMessage={errors.mp_email ? errors.mp_email : ''}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Text field */}
      <FormField className="field-sms" userSelection={formValues[permissionSMS]}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name={permissionSMS}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <ShowHide show={formValues[permissionSMS][0] !== undefined}>
            {formValues[permissionSMS][0] === 'no' && <NoMessage askingFor="a mobile number" />}
            <TextInput
              placeholder=""
              fieldName="mp_mobile"
              label="Please enter your mobile no."
              handleInputChange={handleInputChange}
              isRequired={formValues[permissionSMS][0] !== undefined}
              errorMessage={errors.mp_mobile ? errors.mp_mobile : ''}

            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Phone field */}
      <FormField className="field-sms" userSelection={formValues[permissionPhone]}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name={permissionPhone}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <ShowHide show={formValues[permissionPhone][0] !== undefined}>
            {formValues[permissionPhone][0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_phone"
              label="Please enter your phone no."
              handleInputChange={handleInputChange}
              isRequired={formValues[permissionPhone][0] !== undefined}
              errorMessage={errors.mp_phone ? errors.mp_phone : ''}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Post field */}
      <FormField className="field-post" userSelection={formValues[permissionPost]}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name={permissionPost}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disablePostInputs}>
          <ShowHide show={formValues[permissionPost][0] !== undefined}>
            {formValues[permissionPost][0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName="mp_address1"
              label="Address Line 1"
              handleInputChange={handleInputChange}
              isRequired={formValues[permissionPost][0] !== undefined}
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
              isRequired={formValues[permissionPost][0] !== undefined}
              errorMessage={errors.mp_town ? errors.mp_town : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_postcode"
              label="Postcode"
              handleInputChange={handleInputChange}
              isRequired={formValues[permissionPost][0] !== undefined}
              errorMessage={errors.mp_postcode ? errors.mp_postcode : ''}
            />
            <TextInput
              placeholder=""
              fieldName="mp_country"
              label="Country"
              isRequired={formValues[permissionPost][0] !== undefined}
              handleInputChange={handleInputChange}
              errorMessage={errors.mp_country ? errors.mp_country : ''}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

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
