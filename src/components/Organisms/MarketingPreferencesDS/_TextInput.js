import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label,
  optional, fieldType, ...rest
}) => {
  const { errors, register = {} } = useFormContext();

  const props = {
    name: fieldName,
    type: fieldType,
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName]
      && errors[fieldName].message,
    optional,
    'aria-required': !optional,
    ...rest
  };

  return <Input {...props} ref={register} />;
};

TextInput.defaultProps = {
  optional: null,
  fieldType: 'text'
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  fieldType: PropTypes.string
};

export default TextInput;
