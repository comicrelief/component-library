import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import AssociatedFields from './_AssociatedFields';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesDS.style';

const CheckAnswer = ({ name, mpValidationOptions }) => {
  const {
    register, setValue, clearErrors
  } = useFormContext();

  const onChange = e => {
    let newVal;
    if (e.target.checked) {
      newVal = e.target.value === 'yes' ? e.target.value : 'no';
    } else {
      newVal = '';
    }

    // Update the checkbox field itself
    setValue(name, [newVal]);

    /* If the click represents either a 'none selected' or a 'not required' option
      (set in config), reset the value and error for all fields associated with this checkbox */
    const reValidate = !mpValidationOptions[name][newVal];

    if (reValidate) {
      const theseFields = AssociatedFields[name];
      theseFields.forEach(fieldName => {
        setValue(fieldName, '');
        clearErrors(fieldName);
      });
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
  name: PropTypes.string.isRequired,
  /* These options are created in _MarketingPrefsConfig.js, passed to react-hook-form
  in the parent to set-up the validation, but also required here for additional functionality */
  mpValidationOptions: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default CheckAnswer;
