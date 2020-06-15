import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import InputController from './InputController';
import CheckAnswer from './CheckAnswer';
import { CopyWrapper, Head, Body, Field } from './MarketingPreferences.style';

const MarketingPreferences = ({ copyTop, copyBottom }) => {
  const { control, errors, watch, register } = useFormContext();

  const watchEmail = watch('mpEmail', 'no');
  const watchAddress = watch('mpAddress', 'no');
  const watchPhone = watch('mpTelephone', 'no');
  const watchMobile = watch('mpMobilePhone', 'no');

  return (
    <>
      <Field>
        {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <CheckAnswer name="mpEmail" register={register} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchEmail === 'yes' && (
            <InputController
              placeholder="Email Address"
              fieldName="mpEmailAddress"
              label="Email Address"
              rules={{ required: 'This is required.' }}
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Post
          </Text>
          <CheckAnswer name="mpAddress" register={register} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchAddress === 'yes' && (
            <>
              <InputController
                placeholder="Address Line 1"
                fieldName="mpAddress1"
                label="Address Line 1"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 2"
                fieldName="mpAddress2"
                label="Address Line 2"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 3"
                fieldName="mpAddress3"
                label="Address Line 3"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Town/City"
                fieldName="mpTownCity"
                label="Town/City"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Postcode"
                fieldName="mpPostcode"
                label="Postcode"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Country"
                fieldName="mpCountry"
                label="Country"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
            </>
          )}
        </Body>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Phone
          </Text>
          <CheckAnswer name="mpTelephone" register={register} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchPhone === 'yes' && (
            <InputController
              placeholder="Phone Number"
              fieldName="mpPhone"
              label="Phone Number"
              rules={{ required: 'This is required.' }}
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            SMS
          </Text>
          <CheckAnswer name="mpMobilePhone" register={register} />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchMobile === 'yes' && (
            <InputController
              placeholder="Mobile Number"
              fieldName="mpMobile"
              label="Mobile Number"
              rules={{ required: 'This is required.' }}
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </Field>
      {copyBottom && <CopyWrapper>{copyBottom}</CopyWrapper>}
    </>
  );
};

MarketingPreferences.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node
};

MarketingPreferences.defaultProps = {
  copyTop: null,
  copyBottom: null
};

export default MarketingPreferences;
