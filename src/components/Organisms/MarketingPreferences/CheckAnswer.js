import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferences.style';

const CheckAnswer = ({ name }) => {
  const { control, watch } = useFormContext();
  const value = watch(name, '');

  return (
    <CheckContainer>
      <CheckLabel htmlFor={`${name}-yes`}>
        <Controller
          as={CheckInput}
          type="radio"
          name={name}
          id={`${name}-yes`}
          value="yes"
          valueName="selected"
          control={control}
          checked={value === 'yes'}
        />
        <span />
        Yes, please
      </CheckLabel>
      <CheckLabel htmlFor={`${name}-no`}>
        <Controller
          as={CheckInput}
          type="radio"
          id={`${name}-no`}
          name={name}
          value="no"
          valueName="selected"
          control={control}
          checked={value === 'no'}
        />
        <span />
        No, thanks
      </CheckLabel>
    </CheckContainer>
  );
};

CheckAnswer.propTypes = {
  name: PropTypes.string.isRequired
};

export default CheckAnswer;
