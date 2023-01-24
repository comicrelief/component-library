import React from 'react';
import PropTypes from 'prop-types';
import AssociatedFields from './_AssociatedFields';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesDS.style';

const CheckAnswer = ({
  name, mpValidationOptions, userSelection, formContext
}) => {
  const { setValue, clearErrors, register } = formContext;

  const onChange = e => {
    let newVal;
    if (e.target.checked) {
      newVal = e.target.value;
    } else {
      newVal = '';

      // To ensure we're not letting invalid values get passed, reset any associated fields:
      const theseFields = AssociatedFields[name];
      theseFields.forEach(fieldName => {
        setValue(fieldName, '');
      });
    }

    // Update the checkbox field itself
    setValue(name, newVal);

    /* If the click represents either a 'none selected' or a 'not required' option
      (set in config), reset errors for all fields associated with this checkbox */
    const reValidate = !mpValidationOptions[name][newVal];

    if (reValidate) {
      const theseFields = AssociatedFields[name];
      theseFields.forEach(fieldName => {
        clearErrors(fieldName);
      });
    }
  };

  return (
    <CheckContainer>
      <CheckLabel htmlFor={`${name}-yes`} userSelection={userSelection}>
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
    </CheckContainer>
  );
};

CheckAnswer.defaultProps = {
  userSelection: null,
  formContext: null
};

CheckAnswer.propTypes = {
  name: PropTypes.string.isRequired,
  /* These options are created in _MarketingPrefsConfig.js, passed to react-hook-form
  in the parent to set-up the validation, but also required here for additional functionality */
  mpValidationOptions: PropTypes.objectOf(PropTypes.shape).isRequired,
  userSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  formContext: PropTypes.shape()
};

export default CheckAnswer;
