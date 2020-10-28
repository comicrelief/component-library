import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import Input from '../../Atoms/Input/Input';

const TextInput = ({ fieldName, label, ...rest }) => {
  const { errors, register } = useFormContext();

  const props = {
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName] && errors[fieldName].message,
    defaultValue: '',
    ...rest
  };

  console.log('errors', errors);

  return <Input {...props} ref={register} />;
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;
