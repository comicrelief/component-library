import React from 'react';
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
    <Text tag="p" size="s">{message}</Text>
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
  passFieldValues,
  fieldValuesFromParent
}) => {
  const prefixName = name => fieldPrefix + name;

  /* Updates local state with current checkbox value */
  function onCheckboxChange(fieldName, event, value) {
    const updateValues = { ...fieldValuesFromParent };
    const newValue = event.target.checked ? value : '';
    updateValues[fieldName].value = newValue;
    // Determine which checkbox to untick based on new value
    const nameSuffix = newValue === 'yes' ? 'no' : 'yes';
    document.getElementById(`${fieldName}-${nameSuffix}`).checked = false;
    passFieldValues(updateValues); // pass updated stuff to parent form state
  }

  /* Updates local state with current textfield input value */
  function onTextFieldChange(e, fieldName) {
    const updateValues = { ...fieldValuesFromParent };
    const newValue = e.target.value;
    updateValues[fieldName].value = newValue;
    passFieldValues(updateValues); // pass updated stuff to parent form state
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
            <ShowHide show={fieldValuesFromParent.permissionEmail.value !== ''}>
              {fieldValuesFromParent.permissionEmail.value === 'no' && <NoMessage askingFor="an email" /> }
              <TextInput
                placeholder="Email Address"
                fieldName={prefixName('email')}
                label="Email Address"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
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
            <ShowHide show={fieldValuesFromParent.permissionPost.value !== ''}>
              {fieldValuesFromParent.permissionPost.value === 'no' ? <NoMessage askingFor="an address" /> : ''}
              <TextInput
                placeholder="Address Line 1"
                fieldName={prefixName('address1')}
                label="Address Line 1"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
              />
              <TextInput
                placeholder="Address Line 2"
                fieldName={prefixName('address2')}
                label="Address Line 2"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
              />
              <TextInput
                placeholder="Address Line 3"
                fieldName={prefixName('address3')}
                label="Address Line 3"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
              />
              <TextInput
                placeholder="Town/City"
                fieldName={prefixName('town')}
                label="Town/City"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
              />
              <TextInput
                placeholder="Postcode"
                fieldName={prefixName('postcode')}
                label="Postcode"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
              />
              <TextInput
                placeholder="Country"
                fieldName={prefixName('country')}
                label="Country"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
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
            <ShowHide show={fieldValuesFromParent.permissionPhone.value !== ''}>
              {fieldValuesFromParent.permissionPhone.value === 'no' ? <NoMessage askingFor="a phone number" /> : ''}

              <TextInput
                placeholder="Phone Number"
                fieldName={prefixName('phone')}
                label="Phone Number"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
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

            <ShowHide show={fieldValuesFromParent.permissionSMS.value !== ''}>
              {fieldValuesFromParent.permissionSMS.value === 'no' ? <NoMessage askingFor="a mobile number" /> : ''}

              <TextInput
                placeholder="Mobile Number"
                fieldName={prefixName('mobile')}
                label="Mobile Number"
                onTextFieldChange={onTextFieldChange}
                fieldValuesFromParent={fieldValuesFromParent}
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
