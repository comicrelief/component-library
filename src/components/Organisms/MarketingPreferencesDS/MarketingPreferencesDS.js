import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../Atoms/Text/Text';
import TextInput from './TextInput';
import CheckAnswer from './CheckAnswer';
import {
  CopyWrapper, Head, Body, Field
} from './MarketingPreferencesDS.style';

// inputs should remain in the dom whether or not they are displayed,
//  otherwise you get unpredictable behaviour from react-hook-form APIs.
const ShowHide = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

// eslint-disable-next-line react/prop-types
const NoMessage = ({ askingFor }) => {
  const message = `Please provide ${askingFor} so we can make sure you're not on our database already. Untick the box if you don't want to enter ${askingFor}.`;

  return (
    <Text tag="p" size="s">
      {message}
    </Text>
  );
};

const MarketingPreferencesDS = ({
  copyTop,
  copyBottom,
  fieldPrefix,
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput,
  submitted,
  passFormData
}) => {
  const prefixName = name => fieldPrefix + name;
  const isMounted = useRef(false);
  const [currentFieldValues, setFieldValues] = useState({
    permissionEmail: { value: '' },
    permissionPost: { value: '' },
    permissionPhone: { value: '' },
    permissionSMS: { value: '' },
    email: { value: '', errorMessage: '' },
    address1: { value: '', errorMessage: '' },
    address2: { value: '', errorMessage: '' },
    address3: { value: '', errorMessage: '' },
    town: { value: '', errorMessage: '' },
    postcode: { value: '', errorMessage: '' },
    country: { value: '', errorMessage: '' },
    mobile: { value: '', errorMessage: '' },
    phone: { value: '', errorMessage: '' }
  });

  /* Once the 'submitted' prop has been updated by the form parent,
  pass the values up to parent via callback */
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // If a new submission, call function passed from parent form
    if (submitted) passFormData(currentFieldValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  function onCheckboxChange(fieldName, event, value) {
    // Copy current state so we can use the 'name' key dynamically to update the state
    const updateValues = { ...currentFieldValues };
    const newValue = event.target.checked ? value : '';
    updateValues[fieldName].value = newValue;
    setFieldValues(updateValues);

    // Determine which checkbox to untick based on new value
    const nameSuffix = newValue === 'yes' ? 'no' : 'yes';
    document.getElementById(`${fieldName}-${nameSuffix}`).checked = false;
  }

  function onTextFieldChange(e, fieldName) {
    // Copy current state so we can use the 'name' key dynamically to update the state
    const updateValues = { ...currentFieldValues };
    const newValue = e.target.value;
    updateValues[fieldName].value = newValue;
    setFieldValues(updateValues);
  }

  return (
    <>
      <Field>
        {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <CheckAnswer name={prefixName('permissionEmail')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disableEmailInput}>
          <Body>
            <ShowHide show={currentFieldValues.permissionEmail.value !== ''}>
              {currentFieldValues.permissionEmail.value === 'no' && <NoMessage askingFor="an email" /> }
              <TextInput
                placeholder="Email Address"
                fieldName={prefixName('email')}
                label="Email Address"
                onTextFieldChange={onTextFieldChange}
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Post
          </Text>
          <CheckAnswer name={prefixName('permissionPost')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disablePostInputs}>
          <Body>
            <ShowHide show={currentFieldValues.permissionPost.value !== ''}>
              {currentFieldValues.permissionPost.value === 'no' ? <NoMessage askingFor="an address" /> : ''}
              <TextInput
                placeholder="Address Line 1"
                fieldName={prefixName('address1')}
                label="Address Line 1"
              />
              <TextInput
                placeholder="Address Line 2"
                fieldName={prefixName('address2')}
                label="Address Line 2"
              />
              <TextInput
                placeholder="Address Line 3"
                fieldName={prefixName('address3')}
                label="Address Line 3"
              />
              <TextInput
                placeholder="Town/City"
                fieldName={prefixName('town')}
                label="Town/City"
              />
              <TextInput
                placeholder="Postcode"
                fieldName={prefixName('postcode')}
                label="Postcode"
              />
              <TextInput
                placeholder="Country"
                fieldName={prefixName('country')}
                label="Country"
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Phone
          </Text>
          <CheckAnswer name={prefixName('permissionPhone')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <Body>
            <ShowHide show={currentFieldValues.permissionPhone.value !== ''}>
              {currentFieldValues.permissionPhone.value === 'no' ? <NoMessage askingFor="a phone number" /> : ''}

              <TextInput
                placeholder="Phone Number"
                fieldName={prefixName('phone')}
                label="Phone Number"
              />
            </ShowHide>
          </Body>
        </MaybeDisabled>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            SMS
          </Text>
          <CheckAnswer name={prefixName('permissionSMS')} onChange={onCheckboxChange} />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <Body>

            <ShowHide show={currentFieldValues.permissionSMS.value !== ''}>
              {currentFieldValues.permissionSMS.value === 'no' ? <NoMessage askingFor="a mobile number" /> : ''}

              <TextInput
                placeholder="Mobile Number"
                fieldName={prefixName('mobile')}
                label="Mobile Number"
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
  if (disabled) {
    return null;
  }
  return children;
};

MarketingPreferencesDS.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  /** Can be used to prevent clashes with other fields if this component
   * is being used in a larger form. */
  fieldPrefix: PropTypes.string,
  disableEmailInput: PropTypes.bool,
  disablePostInputs: PropTypes.bool,
  disablePhoneInput: PropTypes.bool,
  disableSMSInput: PropTypes.bool,
  submitted: PropTypes.bool,
  passFormData: PropTypes.func
};

MarketingPreferencesDS.defaultProps = {
  copyTop: null,
  copyBottom: null,
  fieldPrefix: '',
  disableEmailInput: false,
  disablePostInputs: false,
  disablePhoneInput: false,
  disableSMSInput: false,
  submitted: false,
  passFormData: null
};

export default MarketingPreferencesDS;
