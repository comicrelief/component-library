import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label,
  optional, fieldType, formContext, ...rest
}) => {
  const { errors, register } = formContext;

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
  fieldType: PropTypes.string,
  formContext: PropTypes.shape.isRequired
};

export default TextInput;
