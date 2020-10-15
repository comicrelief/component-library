import React from 'react';
import { useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../Atoms/Text/Text';
import TextInput from './TextInput';
import CheckAnswer from './CheckAnswer';
import {
  CopyWrapper, Head, Body, Field
} from './MarketingPreferences.style';

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

const MarketingPreferences = ({
  copyTop,
  copyBottom,
  fieldPrefix,
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput
}) => {
  const prefixName = name => fieldPrefix + name;

  const watchEmail = useWatch({ name: prefixName('permissionEmail'), defaultValue: [] });
  const watchAddress = useWatch({ name: prefixName('permissionPost'), defaultValue: [] });
  const watchPhone = useWatch({ name: prefixName('permissionPhone'), defaultValue: [] });
  const watchMobile = useWatch({ name: prefixName('permissionSMS'), defaultValue: [] });

  return (
    <>
      <Field>
        {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <CheckAnswer name={prefixName('permissionEmail')} />
        </Head>
        <MaybeDisabled disabled={disableEmailInput}>
          <Body>
            <ShowHide show={watchEmail.length > 0}>
              {watchEmail.includes('no') ? <NoMessage askingFor="an email" /> : ''}
              <TextInput
                placeholder="Email Address"
                fieldName={prefixName('email')}
                label="Email Address"
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
          <CheckAnswer name={prefixName('permissionPost')} />
        </Head>
        <MaybeDisabled disabled={disablePostInputs}>
          <Body>
            <ShowHide show={watchAddress.length > 0}>
              {watchAddress.includes('no') ? <NoMessage askingFor="an address" /> : ''}
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
          <CheckAnswer name={prefixName('permissionPhone')} />
        </Head>
        <MaybeDisabled disabled={disablePhoneInput}>
          <Body>
            <ShowHide show={watchPhone.length > 0}>
              {watchPhone.includes('no') ? <NoMessage askingFor="a phone number" /> : ''}
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
          <CheckAnswer name={prefixName('permissionSMS')} />
        </Head>
        <MaybeDisabled disabled={disableSMSInput}>
          <Body>
            <ShowHide show={watchMobile.length > 0}>
              {watchMobile.includes('no') ? <NoMessage askingFor="a mobile number" /> : ''}
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

MarketingPreferences.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  /** Can be used to prevent clashes with other fields if this component
   * is being used in a larger form. */
  fieldPrefix: PropTypes.string,
  disableEmailInput: PropTypes.bool,
  disablePostInputs: PropTypes.bool,
  disablePhoneInput: PropTypes.bool,
  disableSMSInput: PropTypes.bool
};

MarketingPreferences.defaultProps = {
  copyTop: null,
  copyBottom: null,
  fieldPrefix: '',
  disableEmailInput: false,
  disablePostInputs: false,
  disablePhoneInput: false,
  disableSMSInput: false
};

export default MarketingPreferences;
