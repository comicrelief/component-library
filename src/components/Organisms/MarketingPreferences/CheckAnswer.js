import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferences.style';

const CheckAnswer = ({ register, name }) => (
  <CheckContainer>
    <CheckLabel htmlFor={`${name}-yes`}>
      <CheckInput
        type="radio"
        name={name}
        id={`${name}-yes`}
        value="yes"
        ref={register}
      />
      <span />
      Yes, please
    </CheckLabel>
    <CheckLabel htmlFor={`${name}-no`}>
      <CheckInput
        type="radio"
        id={`${name}-no`}
        name={name}
        value="no"
        ref={register}
      />
      <span />
      No, thanks
    </CheckLabel>
  </CheckContainer>
);

CheckAnswer.propTypes = {
  register: PropTypes.objectOf.isRequired,
  name: PropTypes.string.isRequired
};

export default CheckAnswer;
