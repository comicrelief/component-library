import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Input from '../../Atoms/Input/Input';

const TextInput = React.forwardRef(({
  fieldName, label, fieldValuesFromParent, handleInputChange,
  isRequired, errorMessage, ...rest
}, ref) => {
  const errorMsg = errorMessage || (fieldValuesFromParent && fieldValuesFromParent[fieldName]
  && fieldValuesFromParent[fieldName].errorMessage);

  const props = {
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg,
    onChange: handleInputChange,
    isRequired,
    ...rest
  };

  return (
    <Field {...props} ref={ref} as={Input} />
  );
});

TextInput.defaultProps = {
  fieldValuesFromParent: null,
  isRequired: false,
  errorMessage: ''
};

TextInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldValuesFromParent: PropTypes.objectOf(PropTypes.shape),
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default TextInput;
