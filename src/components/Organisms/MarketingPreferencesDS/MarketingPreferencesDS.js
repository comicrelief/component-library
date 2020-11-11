import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { isEqual } from 'lodash';
import Text from '../../Atoms/Text/Text';
import TextInput from './TextInput';
import CheckAnswer from './CheckAnswer';
import NoMessage from './NoMessage';

import {
  CopyWrapper, Head, Body, Field, ShowHide
} from './MarketingPreferencesDS.style';

const MarketingPreferencesDS = ({
  copyTop,
  copyBottom,
  fieldPrefix,
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput,
  passFieldValues,
  fieldValuesFromParent
}) => {
  const prefixName = name => fieldPrefix + name;

  // Store refs to access 'required' attribute dynamically
  const allRefs = {
    email: useRef(null),
    address1: useRef(null),
    address2: useRef(null),
    address3: useRef(null),
    town: useRef(null),
    country: useRef(null),
    postcode: useRef(null),
    phone: useRef(null),
    mobile: useRef(null)
  };

  /* Updates parent form state with current checkbox value */
  function onCheckboxChange(fieldName, event, value) {
    const updatedValues = { ...fieldValuesFromParent };
    const newValue = event.target.checked ? value : '';
    updatedValues[fieldName].value = newValue;
    // Determine which checkbox to untick based on new value
    const nameSuffix = newValue === 'yes' ? 'no' : 'yes';
    document.getElementById(`${fieldName}-${nameSuffix}`).checked = false;
    passFieldValues(updatedValues);
  }

  /* Updates parent form state with current textfield input value */
  function onTextFieldChange(e, fieldName) {
    const updatedValues = { ...fieldValuesFromParent };
    const newValue = e.target.value;
    updatedValues[fieldName].value = newValue;
    passFieldValues(updatedValues);
  }

  /** Passes 'required' attribute value to parent form validation state  on mount,
    * ensuring appropriate validation can be used on that field without requiring
    * duplication in form code
    * */
  useEffect(() => {
    const updatedValues = { ...fieldValuesFromParent };

    Object.keys(allRefs).forEach(key => {
      updatedValues[key].required = allRefs[key].current.required;
    });

    if (!isEqual(updatedValues, fieldValuesFromParent)) passFieldValues(updatedValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fieldVals = fieldValuesFromParent; // In the interest of brevity

  return (
    <>
      {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
      {/* Email field */}
      <Field className={`field-email ${fieldVals.permissionEmail.value && `field-${fieldVals.permissionEmail.value}`}`}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Email Me
          </Text>
          <CheckAnswer name={prefixName('permissionEmail')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disableEmailInput}>
          <Body>
            <ShowHide show={fieldVals.permissionEmail.value !== ''}>
              {fieldVals.permissionEmail.value === 'no' && <NoMessage askingFor="an email" /> }
              <TextInput
                placeholder=""
                fieldName={prefixName('email')}
                label="Please enter your email address"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.email}
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>

      {/* Text field */}
      <Field className={`field-sms field-${fieldVals.permissionSMS.value}`}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Text me
          </Text>
          <CheckAnswer name={prefixName('permissionSMS')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <Body>
            <ShowHide show={fieldVals.permissionSMS.value !== ''}>
              {fieldVals.permissionSMS.value === 'no' ? <NoMessage askingFor="a mobile number" /> : ''}
              <TextInput
                placeholder=""
                fieldName={prefixName('mobile')}
                label="Please enter your mobile no."
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.mobile}
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>

      {/* Phone field */}
      <Field className={`field-phone field-${fieldVals.permissionPhone.value}`}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Phone me
          </Text>
          <CheckAnswer name={prefixName('permissionPhone')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <Body>
            <ShowHide show={fieldVals.permissionPhone.value !== ''}>
              {fieldVals.permissionPhone.value === 'no' ? <NoMessage askingFor="a phone number" /> : ''}
              <TextInput
                placeholder=""
                fieldName={prefixName('phone')}
                label="Please enter your phone no."
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.phone}
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>

      {/* Post field */}
      <Field className={`field-post field-${fieldVals.permissionPost.value}`}>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400" color="grey_dark">
            Send me post
          </Text>
          <CheckAnswer name={prefixName('permissionPost')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disablePostInputs}>
          <Body>
            <ShowHide show={fieldVals.permissionPost.value !== ''}>
              {fieldVals.permissionPost.value === 'no' ? <NoMessage askingFor="an address" /> : ''}
              <TextInput
                placeholder=""
                fieldName={prefixName('address1')}
                label="Address Line 1"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.address1}
              />
              <TextInput
                placeholder=""
                fieldName={prefixName('address2')}
                label="Address Line 2"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                ref={allRefs.address2}
              />
              <TextInput
                placeholder=""
                fieldName={prefixName('address3')}
                label="Address Line 3"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                ref={allRefs.address3}
              />
              <TextInput
                placeholder=""
                fieldName={prefixName('town')}
                label="Town/City"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.town}
              />
              <TextInput
                placeholder=""
                fieldName={prefixName('postcode')}
                label="Postcode"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.postcode}
              />
              <TextInput
                placeholder=""
                fieldName={prefixName('country')}
                label="Country"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldVals}
                isRequired
                ref={allRefs.country}
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>

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
  fieldValuesFromParent: PropTypes.objectOf(PropTypes.shape).isRequired,
  passFieldValues: PropTypes.func.isRequired
};

MarketingPreferencesDS.defaultProps = {
  copyTop: null,
  copyBottom: null,
  fieldPrefix: '',
  disableEmailInput: false,
  disablePostInputs: false,
  disablePhoneInput: false,
  disableSMSInput: false
};

export default MarketingPreferencesDS;
