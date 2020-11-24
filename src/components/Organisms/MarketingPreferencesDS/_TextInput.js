import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label, handleInputChange,
  isRequired, errorMessage, ...rest
}) => {
  const props = {
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg: errorMessage,
    onChange: handleInputChange,
    isRequired,
    'aria-required': isRequired,
    labelProps: { className: errorMessage ? 'error-message' : '' },
    ...rest
  };

  return (
    <Field {...props} as={Input} />
  );
};

TextInput.defaultProps = {
  isRequired: false,
  errorMessage: ''
};

TextInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default TextInput;
