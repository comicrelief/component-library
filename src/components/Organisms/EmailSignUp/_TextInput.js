import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

// TODO: This is a copy paste of the RHF friendly `TextInput` from Marketing Prefs.
// Perhaps it would be worthwhile refactoring this into a new `Atom` as a seperate PR.
const TextInput = ({
  fieldName,
  label,
  optional = null,
  fieldType = 'text',
  formContext = null,
  ...rest
}) => {
  const { formState: { errors }, register } = formContext;

  const props = {
    name: fieldName,
    type: fieldType,
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName] && errors[fieldName].message,
    optional,
    'aria-required': !optional,
    ...rest
  };

  return <Input {...props} {...register(fieldName)} />;
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  fieldType: PropTypes.string,
  formContext: PropTypes.shape()
};

export default TextInput;
