import React from 'react';
import PropTypes from 'prop-types';
import AssociatedFields from './_AssociatedFields';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesDS.style';

const OptInCheckbox = ({
  name, mpValidationOptions, userSelection = null, formContext = null
}) => {
  const { setValue, clearErrors, register } = formContext;

  const onChange = e => {
    let newVal;
    if (e.target.checked) {
      newVal = e.target.value;
    } else {
      newVal = '';

      // To ensure we're not letting invalid values get passed, reset any associated fields
      // but only when it's not a hidden "passed values behind the scenes" field:
      if (!mpValidationOptions[name].hideInput) {
        const theseFields = AssociatedFields[name].fieldNames;
        theseFields.forEach(fieldName => {
          setValue(fieldName, '');
        });
      }
    }

    // Update the checkbox field itself
    setValue(name, newVal);

    /* If the click represents either a 'none selected' or a 'not required' option
      (set in config), reset errors for all fields associated with this checkbox */
    const reValidate = !mpValidationOptions[name][newVal];

    if (reValidate) {
      const theseFields = AssociatedFields[name].fieldNames;
      theseFields.forEach(fieldName => {
        clearErrors(fieldName);
      });
    }
  };

  return (
    <CheckContainer>
      <CheckLabel htmlFor={`${name}-yes`} userSelection={userSelection}>
        { AssociatedFields[name].label }
        <CheckInput
          type="checkbox"
          name={name}
          id={`${name}-yes`}
          value="yes"
          {...register(name)}
          onChange={onChange}
        />
        {/* What our custom checkbox is built on: */}
        <span />
      </CheckLabel>
    </CheckContainer>
  );
};

OptInCheckbox.propTypes = {
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

export default OptInCheckbox;
