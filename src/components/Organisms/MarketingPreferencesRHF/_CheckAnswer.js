import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesRHF.style';

const CheckAnswer = ({ name }) => {
  const { register, setValue } = useFormContext();

  const onChange = e => {
    if (e.target.checked) {
      if (e.target.value === 'yes') {
        setValue(name, ['yes']);
      } else {
        setValue(name, ['no']);
      }
    }
  };

  return (
    <CheckContainer>
      <CheckLabel htmlFor={`${name}-yes`}>
        <CheckInput
          type="checkbox"
          name={name}
          id={`${name}-yes`}
          value="yes"
          ref={register}
          onChange={onChange}
        />
        <span />
        Yes, please
      </CheckLabel>
      <CheckLabel htmlFor={`${name}-no`}>
        <CheckInput
          type="checkbox"
          id={`${name}-no`}
          name={name}
          value="no"
          ref={register}
          onChange={onChange}
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
