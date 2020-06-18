import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Button from '../../Atoms/Button/Button';
import Text from '../../Atoms/Text/Text';
import InputController from './InputController';
import CheckAnswer from './CheckAnswer';
import { CopyWrapper, Head, Body, Field } from './MarketingPreferences.style';

// inputs should remain in the dom whether or not they are displayed,
//  otherwise you get unpredictable behaviour from react-hook-form APIs.
const ShowHide = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const MarketingPreferences = ({
  copyTop,
  copyBottom,
  fieldPrefix,
  disableEmailInput,
  disablePostInputs,
  disablePhoneInput,
  disableSMSInput
}) => {
  const { watch } = useFormContext();
  const prefixName = name => fieldPrefix + name;

  const watchEmail = watch(prefixName('permissionEmail'), '');
  const watchAddress = watch(prefixName('permissionPost'), '');
  const watchPhone = watch(prefixName('permissionPhone'), '');
  const watchMobile = watch(prefixName('permissionSMS'), '');

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
            <ShowHide show={watchEmail}>
              {watchEmail === 'no' && (
                <Text tag="p" size="s">
                  Enter email you wish us to remove from our list
                </Text>
              )}
              <InputController
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
            <ShowHide show={watchAddress}>
              {watchAddress === 'no' && (
                <Text tag="p" size="s">
                  Enter address you wish us to remove from our list
                </Text>
              )}
              <InputController
                placeholder="Address Line 1"
                fieldName={prefixName('address1')}
                label="Address Line 1"
              />
              <InputController
                placeholder="Address Line 2"
                fieldName={prefixName('address2')}
                label="Address Line 2"
              />
              <InputController
                placeholder="Address Line 3"
                fieldName={prefixName('address3')}
                label="Address Line 3"
              />
              <InputController
                placeholder="Town/City"
                fieldName={prefixName('town')}
                label="Town/City"
              />
              <InputController
                placeholder="Postcode"
                fieldName={prefixName('postcode')}
                label="Postcode"
              />
              <InputController
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
            <ShowHide show={watchPhone}>
              {watchPhone === 'no' && (
                <Text tag="p" size="s">
                  Enter phone number you wish us to remove from our list
                </Text>
              )}
              <InputController
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
            <ShowHide show={watchMobile}>
              {watchMobile === 'no' && (
                <Text tag="p" size="s">
                  Enter mobile number you wish us to remove from our list
                </Text>
              )}
              <InputController
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

// todo
// const ResetButton = ({onClick}) => (
//   <Button color="grey_light" type="button" onClick={onClick}>
//     <Text>Reset marketing preferences</Text>
//   </Button>
// );

const MaybeDisabled = ({ children, disabled }) => {
  if (disabled) {
    return null;
  }
  return children;
};

MarketingPreferences.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  /** Can be used to prevent clashes with other fields if this component is being used in a larger form. */
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
