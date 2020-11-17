import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesDS.style';

const CheckAnswer = ({ name, onChange }) => (
  <CheckContainer>
    <CheckLabel htmlFor={`${name}-yes`}>
      <Field
        type="checkbox"
        name={name}
        id={`${name}-yes`}
        value="yes"
        onChange={onChange}
        as={CheckInput}
      />
      <span />
      Yes please
    </CheckLabel>
    <CheckLabel htmlFor={`${name}-no`}>
      <Field
        type="checkbox"
        id={`${name}-no`}
        name={name}
        value="no"
        onChange={onChange}
        as={CheckInput}
      />
      <span />
      No thanks
    </CheckLabel>
  </CheckContainer>
);
CheckAnswer.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckAnswer;
