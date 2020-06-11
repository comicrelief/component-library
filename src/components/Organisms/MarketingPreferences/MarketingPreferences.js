import React from 'react';
import { useFormContext } from 'react-hook-form';

import Text from '../../Atoms/Text/Text';
import InputController from './InputController';
import CheckAnswer from './CheckAnswer';
import { Head, Body, Field } from './MarketingPreferences.style';

const MarketingPreferences = ({ copyTop, copyBottom }) => {
  const { control, errors, watch, register } = useFormContext();

  const watchEmail = watch('email', 'no');
  const watchAddress = watch('address', 'no');
  const watchPhone = watch('telephone', 'no');
  const watchMobile = watch('mobilePhone', 'no');

  return (
    <>
      <Field>
        {copyTop && copyTop}
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <CheckAnswer name="email" register={register} />
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
          <CheckAnswer name="address" register={register} />
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
                rules={{ required: 'This is required.' }}
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
          <CheckAnswer name="telephone" register={register} />
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
          <CheckAnswer name="mobilePhone" register={register} />
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
      {copyBottom && copyBottom}
    </>
  );
};

export default MarketingPreferences;
