import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Text from '../../Atoms/Text/Text';
import InputController from './InputController';
import {
  emailValidation,
  addressValidation,
  phoneValidation,
  mobileValidation
} from './marketingRules';
import { Head, Body } from './MarketingPreferences.style';

const MarketingPreferences = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [addressActive, setAddressActive] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const marketingValidations = yup.object().shape({
    ...(emailActive === 'yes' && emailValidation),
    ...(addressActive === 'yes' && addressValidation),
    ...(phoneActive === 'yes' && phoneValidation),
    ...(mobileActive === 'yes' && mobileValidation)
  });

  const { watch, register, control, errors, handleSubmit } = useForm({
    validationSchema: marketingValidations,
    mode: 'onBlur'
  });

  const watchEmail = watch('email', 'no');
  const watchAddress = watch('address', 'no');
  const watchPhone = watch('telephone', 'no');
  const watchMobile = watch('mobilePhone', 'no');

  const onSubmit = data => console.log('data', data);
  console.log(marketingValidations);

  useEffect(() => {
    setEmailActive(watchEmail);
    setAddressActive(watchAddress);
    setPhoneActive(watchPhone);
    setMobileActive(watchMobile);
  }, [watchAddress, watchPhone, watchMobile, watchEmail]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <div>
            <input type="radio" name="email" value="yes" ref={register} />
            Yes, please
            <input type="radio" name="email" value="no" ref={register} />
            No, thanks
          </div>
        </Head>
        <Body>
          <Text tag="p">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchEmail === 'yes' && (
            <InputController
              placeholder="Email Address"
              fieldName="emailAddress"
              label="Email Address"
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </div>
      <div>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Post
          </Text>
          <div>
            <input type="radio" name="address" value="yes" ref={register} />
            Yes, please
            <input type="radio" name="address" value="no" ref={register} />
            No, thanks
          </div>
        </Head>
        <Body>
          <Text tag="p">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchAddress === 'yes' && (
            <>
              <InputController
                placeholder="Address Line 1"
                fieldName="address1"
                label="Address Line 1"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 2"
                fieldName="address2"
                label="Address Line 2"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 3"
                fieldName="address3"
                label="Address Line 3"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Town/City"
                fieldName="townCity"
                label="Town/City"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Postcode"
                fieldName="postcode"
                label="Postcode"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Country"
                fieldName="country"
                label="Country"
                control={control}
                errors={errors}
              />
            </>
          )}
        </Body>
      </div>
      <div>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Phone
          </Text>
          <div>
            <input type="radio" name="telephone" value="yes" ref={register} />
            Yes, please
            <input type="radio" name="telephone" value="no" ref={register} />
            No, thanks
          </div>
        </Head>
        <Body>
          <Text tag="p">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchPhone === 'yes' && (
            <InputController
              placeholder="Phone Number"
              fieldName="phone"
              label="Phone Number"
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </div>
      <div>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            SMS
          </Text>
          <div>
            <input type="radio" name="mobilePhone" value="yes" ref={register} />
            Yes, please
            <input type="radio" name="mobilePhone" value="no" ref={register} />
            No, thanks
          </div>
        </Head>
        <Body>
          <Text tag="p">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchMobile === 'yes' && (
            <InputController
              placeholder="Mobile Number"
              fieldName="mobile"
              label="Mobile Number"
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </div>
      <input type="submit" />
    </form>
  );
};

export default MarketingPreferences;
