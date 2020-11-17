import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import TextInput from './_TextInput';
import CheckAnswer from './_CheckAnswer';
import NoMessage from './_NoMessage';
import { defaultCopyTop, defaultCopyBottom } from './_DefaultCopy';
import {
  CopyWrapper, Head, FormField, ShowHide
} from './MarketingPreferencesDS.style';

const MarketingPreferencesDS = ({
  fieldPrefix,
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput,
  copyTop,
  copyBottom,
  handleInputChange,
  handleCheckChange,
  formValues,
  validation
}) => {
  const prefixName = name => fieldPrefix + name;

  /** Uses Formik's 'setFieldValue' function (passed down as 'handleCheckChange' prop)
    *  to allow us to override the native checkbox functionality to act as a toggle
    */
  function handleCheckboxChange(e) {
    const thisName = e.target.name;
    const thisValue = e.target.value;
    const currValue = formValues[thisName][0]; // As Formik stores grouped checkbox vals as arrays
    const newValue = thisValue !== currValue ? [thisValue] : []; // Toggle the value
    handleCheckChange(thisName, newValue); // Update Formik with the value
  }

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
      {/* Email field */}
      <FormField className="field-email" userSelection={formValues.permissionEmail}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer
            name={prefixName('permissionEmail')}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disableEmailInput}>
          <ShowHide show={formValues.permissionEmail[0] !== undefined}>
            {formValues.permissionEmail[0] === 'no' && <NoMessage askingFor="an email" /> }
            <TextInput
              placeholder=""
              fieldName={prefixName('email')}
              label="Please enter your email address"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.email && validation.touched.email)
                && validation.errors.email}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Text field */}
      <FormField className="field-sms" userSelection={formValues.permissionSMS}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer
            name={prefixName('permissionSMS')}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <ShowHide show={formValues.permissionSMS[0] !== undefined}>
            {formValues.permissionSMS[0] === 'no' && <NoMessage askingFor="a mobile number" />}

            <TextInput
              placeholder=""
              fieldName={prefixName('mobile')}
              label="Please enter your mobile no."
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.mobile && validation.touched.mobile)
                && validation.errors.mobile}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Phone field */}
      <FormField className="field-sms" userSelection={formValues.permissionPhone}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer
            name={prefixName('permissionPhone')}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <ShowHide show={formValues.permissionPhone[0] !== undefined}>
            {formValues.permissionPhone[0] === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
            <TextInput
              placeholder=""
              fieldName={prefixName('phone')}
              label="Please enter your phone no."
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.phone && validation.touched.phone)
                && validation.errors.phone}
            />
          </ShowHide>
        </MaybeDisabled>
      </FormField>

      {/* Post field */}
      <FormField className="field-post" userSelection={formValues.permissionPost}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer
            name={prefixName('permissionPost')}
            onChange={e => handleCheckboxChange(e)}
          />
        </Head>
        <MaybeDisabled disabled={disablePostInputs}>
          <ShowHide show={formValues.permissionPost[0] !== undefined}>
            {formValues.permissionPost[0] === 'no' ? <NoMessage askingFor="an address" /> : ''}
            <TextInput
              placeholder=""
              fieldName={prefixName('address1')}
              label="Address Line 1"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.address1 && validation.touched.address1)
                && validation.errors.address1}
            />
            <TextInput
              placeholder=""
              fieldName={prefixName('address2')}
              label="Address Line 2"
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.address2 && validation.touched.address2)
                && validation.errors.address2}
            />
            <TextInput
              placeholder=""
              fieldName={prefixName('address3')}
              label="Address Line 3"
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.address3 && validation.touched.address3)
                && validation.errors.address3}
            />
            <TextInput
              placeholder=""
              fieldName={prefixName('town')}
              label="Town/City"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.town && validation.touched.town)
                && validation.errors.town}
            />
            <TextInput
              placeholder=""
              fieldName={prefixName('postcode')}
              label="Postcode"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.postcode && validation.touched.postcode)
                && validation.errors.postcode}
            />
            <TextInput
              placeholder=""
              fieldName={prefixName('country')}
              label="Country"
              isRequired
              handleInputChange={handleInputChange}
              errorMessage={(validation.errors.country && validation.touched.country)
                && validation.errors.country}
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
  fieldPrefix: PropTypes.string,
  disableEmailInput: PropTypes.bool,
  disablePostInputs: PropTypes.bool,
  disablePhoneInput: PropTypes.bool,
  disableSMSInput: PropTypes.bool,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  formValues: PropTypes.objectOf(PropTypes.shape).isRequired,
  validation: PropTypes.objectOf(PropTypes.shape).isRequired
};

MarketingPreferencesDS.defaultProps = {
  copyTop: defaultCopyTop,
  copyBottom: defaultCopyBottom,
  fieldPrefix: '',
  disableEmailInput: false,
  disablePostInputs: false,
  disablePhoneInput: false,
  disableSMSInput: false
};

export default MarketingPreferencesDS;
