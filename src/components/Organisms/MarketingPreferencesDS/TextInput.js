import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label, fieldValuesFromParent, onTextFieldChange, isRequired, ...rest
}) => {
  const props = {
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    defaultValue: '',
    errorMsg: fieldValuesFromParent
      && fieldValuesFromParent[fieldName]
      && fieldValuesFromParent[fieldName].errorMessage,
    onChange: e => onTextFieldChange(e, fieldName),
    isRequired,
    ...rest
  };

  return (
    <Input {...props} />
  );
};

TextInput.defaultProps = {
  onTextFieldChange: null,
  fieldValuesFromParent: null,
  isRequired: false
};

TextInput.propTypes = {
  onTextFieldChange: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
  fieldValuesFromParent: PropTypes.objectOf(PropTypes.shape),
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};

export default TextInput;
