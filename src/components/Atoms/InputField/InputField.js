import React from 'react';
import PropTypes from 'prop-types';

import InputHelper from '../../../helpers/Input/InputHelper';

const Input = props => {
  return <InputHelper elementType="input" {...props} />;
};

Input.propTypes = {
  name: PropTypes.string,
  elementType: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default Input;
