import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label, errors, ...rest
}) => {
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

  return <Input {...props} />;
};

TextInput.defaultProps = {
  errors: {}
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.any) // for now
};

export default TextInput;
