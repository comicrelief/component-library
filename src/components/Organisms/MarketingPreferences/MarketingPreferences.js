import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import InputController from './InputController';
import CheckAnswer from './CheckAnswer';
import { CopyWrapper, Head, Body, Field } from './MarketingPreferences.style';

const MarketingPreferences = ({ copyTop, copyBottom, fieldPrefix }) => {
  const { control, errors, watch, register, reset } = useFormContext();

  const watchEmail = watch(`${fieldPrefix}permissionEmail`, '');
  const watchAddress = watch(`${fieldPrefix}permissionPost`, '');
  const watchPhone = watch(`${fieldPrefix}permissionPhone`, '');
  const watchMobile = watch(`${fieldPrefix}permissionSMS`, '');

  console.log(watchEmail);

  return (
    <>
      <Field>
        {copyTop && <CopyWrapper>{copyTop}</CopyWrapper>}
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Email
          </Text>
          <CheckAnswer
            name={`${fieldPrefix}permissionEmail`}
            register={register}
            control={control}
          />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchEmail === 'yes' ? (
            <div>
              <InputController
                placeholder="Email Address"
                fieldName={`${fieldPrefix}email`}
                label="Email Address"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
            </div>
          ) : (
            <div>
              <Text tag="p" size="s">
                Enter email you wish us to remove from our list
              </Text>
              <InputController
                placeholder="Email Address"
                fieldName={`${fieldPrefix}email`}
                label="Email Address"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
            </div>
          )}
        </Body>
      </Field>
      <Field>
        <Head>
          <Text tag="h3" size="l" family="Anton" uppercase weight="400">
            Post
          </Text>
          <CheckAnswer
            name={`${fieldPrefix}permissionPost`}
            register={register}
          />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchAddress !== '' && (
            <>
              <InputController
                placeholder="Address Line 1"
                fieldName={`${fieldPrefix}address1`}
                label="Address Line 1"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 2"
                fieldName={`${fieldPrefix}address2`}
                label="Address Line 2"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Address Line 3"
                fieldName={`${fieldPrefix}address3`}
                label="Address Line 3"
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Town/City"
                fieldName={`${fieldPrefix}town`}
                label="Town/City"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Postcode"
                fieldName={`${fieldPrefix}postcode`}
                label="Postcode"
                rules={{ required: 'This is required.' }}
                control={control}
                errors={errors}
              />
              <InputController
                placeholder="Country"
                fieldName={`${fieldPrefix}country`}
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
          <CheckAnswer
            name={`${fieldPrefix}permissionPhone`}
            register={register}
          />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchPhone !== '' && (
            <InputController
              placeholder="Phone Number"
              fieldName={`${fieldPrefix}phone`}
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
          <CheckAnswer
            name={`${fieldPrefix}permissionSMS`}
            register={register}
          />
        </Head>
        <Body>
          <Text tag="p" color="grey">
            You will receive the latest fundraising activities updates and
            marketing material from Comic Relief brand.
          </Text>
          {watchMobile !== '' && (
            <InputController
              placeholder="Mobile Number"
              fieldName={`${fieldPrefix}mobile`}
              label="Mobile Number"
              rules={{ required: 'This is required.' }}
              control={control}
              errors={errors}
            />
          )}
        </Body>
      </Field>
      <Button color="grey_light" type="button" onClick={() => reset()}>
        <Text>Reset All</Text>
      </Button>
      {copyBottom && <CopyWrapper>{copyBottom}</CopyWrapper>}
    </>
  );
};

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
