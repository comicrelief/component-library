import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label, fieldValuesFromParent, onTextFieldChange, ...rest
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
    ...rest
  };

  return (
    <Input {...props} />
  );
};

TextInput.defaultProps = {
  onTextFieldChange: null,
  fieldValuesFromParent: null
};

TextInput.propTypes = {
  onTextFieldChange: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
  fieldValuesFromParent: PropTypes.objectOf(PropTypes.shape),
  label: PropTypes.string.isRequired
};

export default TextInput;
