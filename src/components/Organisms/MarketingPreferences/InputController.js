import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../../Atoms/Input/Input';

const InputController = ({ fieldName, label, ...rest }) => {
  const { errors, control } = useFormContext();

  const props = {
    as: Input,
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg: errors && errors[fieldName] && errors[fieldName].message,
    control,
    defaultValue: '',
    ...rest
  };

  return <Controller {...props} />;
};

InputController.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default InputController;
