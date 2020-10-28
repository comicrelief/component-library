import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';

const TextInput = ({
  fieldName, label, fieldData, ...rest
}) => {
  const props = {
    id: fieldName,
    name: fieldName,
    type: 'text',
    label,
    placeholder: label,
    errorMsg: fieldData && fieldData[fieldName] && fieldData[fieldName].errorMessage,
    defaultValue: '',
    ...rest
  };

  return <Input {...props} />;
};

TextInput.defaultProps = {
  fieldData: {
    email: {
      value: '',
      errorMessage: ''
    },
    address1: {
      value: '',
      errorMessage: ''
    },
    address2: {
      value: '',
      errorMessage: ''
    },
    address3: {
      value: '',
      errorMessage: ''
    },
    town: {
      value: '',
      errorMessage: ''
    },
    postcode: {
      value: '',
      errorMessage: ''
    },
    country: {
      value: '',
      errorMessage: ''
    },
    mobile: {
      value: '',
      errorMessage: ''
    },
    phone: {
      value: '',
      errorMessage: ''
    }
  }
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldData: PropTypes.shape({
    email: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    adddress1: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    adddress2: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    adddress3: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    town: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    postcode: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    country: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    phone: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    }),
    mobile: PropTypes.shape({
      value: PropTypes.string,
      errorMessage: PropTypes.string
    })
  })
};

export default TextInput;
