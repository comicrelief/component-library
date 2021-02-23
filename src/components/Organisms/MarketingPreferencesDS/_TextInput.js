import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { MarketingPrefsInput } from './MarketingPreferencesDS.style';

const TextInput = ({
  fieldName, label,
  isRequired, fieldType, ...rest
}) => {
  const { errors, register } = useFormContext();

  const props = {
    name: fieldName,
    type: fieldType,
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName]
      && errors[fieldName].message,
    isRequired,
    'aria-required': isRequired,
    ...rest
  };

  return <MarketingPrefsInput {...props} ref={register} />;
};

TextInput.defaultProps = {
  isRequired: false,
  fieldType: 'text'
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  fieldType: PropTypes.string
};

export default TextInput;
