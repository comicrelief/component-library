import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Input from '../../Atoms/Input/Input';

const InputController = ({ fieldName, label, control, errors, ...rest }) => {
  const props = {
    control,
    as: Input,
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName] && errors[fieldName].message,
    ...rest
  };

  return <Controller {...props} />;
};

InputController.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.objectOf.isRequired,
  control: PropTypes.objectOf.isRequired
};

export default InputController;
