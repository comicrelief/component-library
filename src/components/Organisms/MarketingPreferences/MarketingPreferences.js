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

const MarketingPreferences = ({ copyTop, copyBottom, fieldPrefix }) => {
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
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
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
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Post
          </Text>
          <CheckAnswer name={prefixName('permissionPost')} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          <ShowHide show={watchAddress}>
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
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Phone
          </Text>
          <CheckAnswer name={prefixName('permissionPhone')} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          <ShowHide show={watchPhone}>
            <InputController
              placeholder="Phone Number"
              fieldName={prefixName('phone')}
              label="Phone Number"
            />
          </ShowHide>
        </Body>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            SMS
          </Text>
          <CheckAnswer name={prefixName('permissionSMS')} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          <ShowHide show={watchMobile}>
            <InputController
              placeholder="Mobile Number"
              fieldName={prefixName('mobile')}
              label="Mobile Number"
            />
          </ShowHide>
        </Body>
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

MarketingPreferences.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node,
  /** Can be used to prevent clashes with other fields if this component is being used in a larger form. */
  fieldPrefix: PropTypes.string
};

MarketingPreferences.defaultProps = {
  copyTop: null,
  copyBottom: null,
  fieldPrefix: ''
};

export default MarketingPreferences;
